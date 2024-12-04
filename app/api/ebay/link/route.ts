import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { storeName, apiKey } = body;

    if (!storeName || !apiKey) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Created a new channel for the user
    const channel = await db.ecommerceChannel.create({
      data: {
        name: storeName,
        platform: "EBAY",
        apiKey: apiKey,
        webhookUrl: "https://ebay.com",
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
