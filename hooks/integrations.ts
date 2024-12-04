// lib/actions/channelActions.ts
"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getIntegratedChannels(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        channels: {
          select: {
            platform: true,
          },
        },
      },
    });

    return user?.channels.map((channel) => channel.platform) || [];
  } catch (error) {
    console.error("Failed to fetch integrated channels:", error);
    return [];
  }
}
