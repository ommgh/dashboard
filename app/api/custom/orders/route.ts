// app/api/orders/webhook/route.ts
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    // Get headers
    const authHeader = headers().get("authorization");
    const channelId = headers().get("x-channel-id");
    const apiKey = authHeader?.split(" ")[1];

    if (!apiKey || !channelId) {
      return new NextResponse("Missing required headers", { status: 401 });
    }

    // Verify channel exists and API key matches
    const channel = await db.ecommerceChannel.findFirst({
      where: {
        id: channelId!,
        apiKey: apiKey,
      },
      include: {
        user: true,
      },
    });

    if (!channel) {
      return new NextResponse("Invalid channel or API key", { status: 401 });
    }

    const body = await req.json();

    // Create order in dashboard database
    const order = await db.order.create({
      data: {
        channelId: channel!.id,
        userId: channel!.userId,
        orderId: body.channelOrderId,
        productName: body.productName,
        productPrice: body.productPrice,
        quantity: body.quantity,
        orderStatus: body.orderStatus,
      },
    });
    console.log("Order created:", order);
    return NextResponse.json(order);
  } catch (error) {
    console.error("Error processing order webhook:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
