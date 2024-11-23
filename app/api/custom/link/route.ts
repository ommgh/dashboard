import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import crypto from "crypto";
import { auth } from "@/auth";

// Generate a secure API key
function generateApiKey() {
  return `dk_${crypto.randomBytes(24).toString("hex")}`;
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { storeName, storeUrl } = body;

    if (!storeName || !storeUrl) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Generate an API key for this channel
    const apiKey = generateApiKey();

    // Create a new channel for the user
    const channel = await db.ecommerceChannel.create({
      data: {
        name: storeName,
        platform: "CUSTOM",
        apiKey: apiKey,
        webhookUrl: storeUrl,
        userId: session.user.id,
      },
    });

    return NextResponse.json({
      channelId: channel.id,
      apiKey: apiKey,
      storeName: channel.name,
    });
  } catch (error) {
    console.error("Error creating channel:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
