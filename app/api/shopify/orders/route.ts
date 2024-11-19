// app/api/shopify/orders/route.ts
import { NextResponse } from "next/server";

const SHOPIFY_STORE_URL = process.env.SHOPIFY_STORE_URL;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;

export async function POST() {
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

  try {
    const response = await fetch(
      `${SHOPIFY_STORE_URL}/admin/api/2024-10/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN!,
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
