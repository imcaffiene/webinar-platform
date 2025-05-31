"use server";

import { prismaClient } from "@/lib/prismClient";
import { AttendanceData } from "@/lib/types";
import { AttendedTypeEnum, CtaTypeEnum } from "@prisma/client";
import { revalidatePath } from "next/cache";

/**
 * Fetches attendance data for a specific webinar with various filtering options
 * @param webinarId - The ID of the webinar to fetch attendance for
 * @param options - Configuration options:
 *   - includeUsers: Whether to include user details (default: true)
 *   - userLimit: Maximum number of users to return per attendance type (default: 100)
 * @returns Object containing attendance data, webinar details, and operation status
 */
export const getWebinarAttendance = async (
  webinarId: string,
  options: {
    includeUsers?: boolean;
    userLimit?: number;
  } = { includeUsers: true, userLimit: 100 }
) => {
  try {
    // First, fetch basic webinar information including CTA type and tags
    const webinar = await prismaClient.webinar.findUnique({
      where: { id: webinarId },
      select: {
        id: true,
        ctaType: true, // The call-to-action type (BOOK_A_CALL, etc.)
        tags: true, // Associated tags for the webinar
        _count: {
          select: {
            attendances: true, // Total count of attendances
          },
        },
      },
    });

    // Return error if webinar doesn't exist
    if (!webinar) {
      return { success: false, status: 404, message: "Webinar not found" };
    }

    // Get counts of each attendance type for this webinar
    const attendanceCounts = await prismaClient.attendance.groupBy({
      by: ["attendedType"], // Group by attendance type
      where: {
        webinarId, // Filter for this specific webinar
      },
      _count: {
        attendedType: true, // Count each attendance type
      },
    });

    // Initialize result object that will hold all attendance data
    const result: Record<AttendedTypeEnum, AttendanceData> = {} as Record<
      AttendedTypeEnum,
      AttendanceData
    >;

    // Process each possible attendance type
    for (const type of Object.values(AttendedTypeEnum)) {
      // Skip certain attendance types based on webinar's CTA type
      if (
        type === AttendedTypeEnum.ADDED_TO_CART &&
        webinar.ctaType === CtaTypeEnum.BOOK_A_CALL
      )
        continue;

      if (
        type === AttendedTypeEnum.BREAKOUT_ROOM &&
        webinar.ctaType !== CtaTypeEnum.BOOK_A_CALL
      )
        continue;

      // Find the count for this attendance type
      const countItem = attendanceCounts.find((item) => {
        // Special case: Treat ADDED_TO_CART as BREAKOUT_ROOM for BOOK_A_CALL webinars
        if (
          webinar.ctaType === CtaTypeEnum.BOOK_A_CALL &&
          type === AttendedTypeEnum.BREAKOUT_ROOM &&
          item.attendedType === AttendedTypeEnum.ADDED_TO_CART
        ) {
          return true;
        }
        return item.attendedType === type;
      });

      // Initialize result entry for this attendance type
      result[type] = {
        count: countItem ? countItem._count.attendedType : 0, // Set count (0 if none found)
        users: [], // Initialize empty users array
      };
    }
    // If requested, fetch detailed user information
    if (options.includeUsers) {
      // Process each attendance type again for user details
      for (const type of Object.values(AttendedTypeEnum)) {
        // Skip the same types as before
        if (
          (type === AttendedTypeEnum.ADDED_TO_CART &&
            webinar.ctaType === CtaTypeEnum.BOOK_A_CALL) ||
          (type === AttendedTypeEnum.BREAKOUT_ROOM &&
            webinar.ctaType !== CtaTypeEnum.BOOK_A_CALL)
        ) {
          continue;
        }

        // Determine which attendance type to query in database
        const queryType =
          webinar.ctaType === CtaTypeEnum.BOOK_A_CALL &&
          type === AttendedTypeEnum.BREAKOUT_ROOM
            ? AttendedTypeEnum.ADDED_TO_CART
            : type;

        // Only fetch users if there are attendances of this type
        if (result[type].count > 0) {
          const attendances = await prismaClient.attendance.findMany({
            where: {
              webinarId: webinar.id,
              attendedType: queryType,
            },
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                  callStatus: true,
                  // Only select fields you need
                },
              },
            },
            take: options.userLimit,
            orderBy: {
              joinedAt: "desc",
            },
          });

          // Map attendance records to user data
          result[type].users = attendances.map((att) => ({
            id: att.user.id,
            name: att.user.name,
            email: att.user.email,
            joinedAt: att.joinedAt,
            stripeConnectId: null, // Note: Hardcoded null - might want to fetch actual value
            callStatus: att.user.callStatus,
          }));
        }
      }
    }

    // Revalidate the cache for this webinar's pipeline page
    // revalidatePath(`/webinars/${webinarId}/pipeline`);

    // Return successful response with all collected data
    return {
      success: true,
      data: result, // The main attendance data structure
      ctaType: webinar.ctaType, // Webinar's CTA type
      webinarTags: webinar.tags || [], // Webinar tags (empty array if null)
      message: "Webinar attendance fetched successfully",
    };
  } catch (error) {
    // Log and return error if something goes wrong
    console.error("Error fetching webinar attendance:", error);
    return {
      success: false,
      message: "Internal server error",
    };
  }
};
