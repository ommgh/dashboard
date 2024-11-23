import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";

export async function POST() {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch Shopify API Key and Store URL
    const { apiKey, webhookUrl } = await getShopifyCredentials(userId);

    if (!apiKey || !webhookUrl) {
      return NextResponse.json(
        { error: "Shopify credentials not found" },
        { status: 404 }
      );
    }

    const graphqlQuery = `
      query GetLastTenOrdersWithProducts {
        orders(first: 10, sortKey: CREATED_AT, reverse: true) {
          edges {
            node {
              id
              name
              createdAt
              billingAddress {
                name
                formatted
                phone
              }
              netPaymentSet {
                presentmentMoney {
                  currencyCode
                  amount
                }
              }
              lineItems(first: 10) {
                edges {
                  node {
                    id
                    title
                    sku
                    quantity
                    variant {
                      product {
                        id
                        title
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(
      `${webhookUrl}/admin/api/2024-10/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": apiKey,
        },
        body: JSON.stringify({ query: graphqlQuery }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Shopify data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Shopify" },
      { status: 500 }
    );
  }
}

async function getShopifyCredentials(userId: string) {
  try {
    const ecommerceChannel = await db.ecommerceChannel.findUnique({
      where: {
        userId_platform: {
          userId,
          platform: "SHOPIFY",
        },
      },
      select: {
        apiKey: true,
        webhookUrl: true,
      },
    });

    if (!ecommerceChannel) {
      console.error("No Shopify channel found for this user.");
      return { apiKey: null, webhookUrl: null };
    }

    return {
      apiKey: ecommerceChannel.apiKey,
      webhookUrl: ecommerceChannel.webhookUrl,
    };
  } catch (error) {
    console.error("Error fetching Shopify credentials:", error);
    return { apiKey: null, webhookUrl: null };
  }
}
