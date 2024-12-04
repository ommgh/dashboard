"use client";

import { useEffect, useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar as CalendarIcon,
  Download,
  MoreHorizontal,
  RefreshCw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define TypeScript interfaces for our data
interface Money {
  currencyCode: string;
  amount: string;
}

interface LineItem {
  node: {
    id: string;
    title: string;
    sku: string;
    quantity: number;
    variant: {
      product: {
        id: string;
        title: string;
      };
    };
  };
}

interface Order {
  node: {
    id: string;
    name: string;
    createdAt: string;
    billingAddress: {
      name: string;
      formatted: string;
      phone: string;
    };
    netPaymentSet: {
      presentmentMoney: Money;
    };
    lineItems: {
      edges: LineItem[];
    };
  };
}

interface OrdersData {
  data: {
    orders: {
      edges: Order[];
    };
  };
}

export default function Component() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/shopify/orders", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data: OrdersData = await response.json();
      setOrders(data.data.orders.edges);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <ContentLayout title="Orders">
      <div className="flex flex-col h-full">
        <header className="border-b">
          {/* Header content remains the same */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 gap-4">
            <div className="flex-1 w-full sm:max-w-3xl">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for AWB, Order ID, Buyer Mobile Number, Email, SKU, Pickup ID"
                  className="pl-8"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button className="bg-primary text-primary-foreground w-full sm:w-auto">
                + Add Order
              </Button>
              <Button
                variant="outline"
                className="gap-2 w-full sm:w-auto"
                onClick={fetchOrders}
              >
                <RefreshCw
                  className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                />
                <span className="hidden sm:inline">Sync Orders</span>
              </Button>
            </div>
          </div>
        </header>

        <div className="p-4 space-y-4">
          {/* Filters section remains the same */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    Last 30 days
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="range" numberOfMonths={2} />
                </PopoverContent>
              </Popover>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                More Filters
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Download className="h-4 w-4" />
            </Button>
          </div>

          {error && (
            <div className="text-red-500 p-4 rounded-lg bg-red-50">{error}</div>
          )}

          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Order Details</TableHead>
                  <TableHead>Customer Details</TableHead>
                  <TableHead>Product Details</TableHead>
                  {/* <TableHead>Package Details</TableHead> */}
                  <TableHead>Payment</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      Loading orders...
                    </TableCell>
                  </TableRow>
                ) : orders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      No orders found
                    </TableCell>
                  </TableRow>
                ) : (
                  orders.map((order) => (
                    <TableRow key={order.node.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{order.node.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(order.node.createdAt)}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Image
                            src="/shopify-logo.png"
                            alt="Shopify"
                            height={15}
                            width={15}
                          />
                          <span className="text-sm">Shopify</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>{order.node.billingAddress?.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {order.node.billingAddress?.formatted}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {order.node.billingAddress?.phone}
                        </div>
                      </TableCell>
                      <TableCell>
                        {order.node.lineItems.edges.map((item, index) => (
                          <div
                            key={item.node.id}
                            className={index > 0 ? "mt-2" : ""}
                          >
                            <div>{item.node.title}</div>
                            <div className="text-sm text-muted-foreground">
                              SKU: {item.node.sku || "N/A"}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              QTY: {item.node.quantity}
                            </div>
                          </div>
                        ))}
                      </TableCell>
                      {/* <TableCell>
                        <div>Package details not available in API</div>
                      </TableCell> */}
                      <TableCell>
                        <div>
                          {
                            order.node.netPaymentSet?.presentmentMoney
                              .currencyCode
                          }{" "}
                          {order.node.netPaymentSet?.presentmentMoney.amount}
                        </div>
                        <div className="text-sm text-green-500">Prepaid</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center items-center gap-5">
                          <Link href={`/orders/${order.node.name}/ship`}>
                            <Button size="sm">Ship Now</Button>
                          </Link>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Order</DropdownMenuItem>
                              <DropdownMenuItem>Cancel Order</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              Showing {orders.length} orders
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
