"use server";

import { prismaClient } from "@/lib/prismClient";
import { currentUser } from "@clerk/nextjs/server";

export async function onAuthenticate() {
  try {
    const user = await currentUser();

    if (!user) {
      return {
        status: 403,
      };
    }

    const userExist = await prismaClient.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (userExist) {
      return {
        status: 200,
        user: userExist,
      };
    }

    const newUser = await prismaClient.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.firstName + " " + user.lastName,
        profileImage: user.imageUrl,
      },
    });

    if (!newUser) {
      return {
        status: 400,
        message: "Failed to create user",
      };
    }

    return {
      status: 201,
      user: newUser,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
}
