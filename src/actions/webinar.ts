"use server";

import { WebinarFormState } from "@/store/useWebinarStore";
import { onAuthenticate } from "./auth";
import { prismaClient } from "@/lib/prismClient";
import { revalidatePath } from "next/cache";

function combineDateAndTime(
  date: Date,
  timeStr: string,
  timeFormat: "AM" | "PM"
): Date {
  const [hourStr, minuteStr] = timeStr.split(":");
  let hours = Number.parseInt(hourStr, 10);
  const minutes = Number.parseInt(minuteStr || "0", 10);

  if (timeFormat === "PM" && hours < 12) {
    hours += 12;
  } else if (timeFormat === "AM" && hours === 12) {
    hours = 0;
  }

  const result = new Date(date);
  result.setHours(hours, minutes, 0, 0);
  return result;
}

export const createWebinar = async (formData: WebinarFormState) => {
  try {
    const user = await onAuthenticate();

    if (!user.user) {
      return {
        status: 401,
        message: "User not authenticated",
      };
    }

    const presenterId = user.user.id;

    console.log("Form Data:", formData, presenterId);

    if (!formData.basicInfo.webinarName) {
      return {
        status: 404,
        message: "Webinar name is required",
      };
    }

    if (!formData.basicInfo.date) {
      return {
        status: 404,
        message: "Webinar date is required",
      };
    }

    if (!formData.basicInfo.time) {
      return {
        status: 404,
        message: "Webinar time is required",
      };
    }

    const webinarDateTime = combineDateAndTime(
      formData.basicInfo.date,
      formData.basicInfo.time,
      formData.basicInfo.timeFormat || "AM"
    );

    const now = new Date();

    if (webinarDateTime < now) {
      return {
        status: 404,
        message: "Webinar date and time must be in the future",
      };
    }

    const webinar = await prismaClient.webinar.create({
      data: {
        title: formData.basicInfo.webinarName,
        description: formData.basicInfo.description || "",
        startTime: webinarDateTime,
        tags: formData.cta.tags || [],
        ctaLabel: formData.cta.ctaLabel,
        ctaType: formData.cta.ctaType,
        aiAgentId: formData.cta.aiAgent || null,
        priceId: formData.cta.priceId || null,
        lockChat: formData.additionalInfo.lockChat || false,
        couponCode: formData.additionalInfo.couponEnabled
          ? formData.additionalInfo.couponCode
          : null,
        couponEnabled: formData.additionalInfo.couponEnabled || false,
        presenterId: presenterId,
      },
    });

    revalidatePath("/");

    return {
      status: 200,
      message: "Webinar created successfully",
      webinarId: webinar.id,
      webinarLink: `webinar/${webinar.id}`,
    };
  } catch (error) {
    console.error("Error creating webinar:", error);
    return {
      status: 500,
      message: "Failed to create webinar",
    };
  }
};
