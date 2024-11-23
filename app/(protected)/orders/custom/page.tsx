"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { db } from "@/lib/db";
import { Order, OrderStatus } from "@prisma/client";

export default function OrdersPage() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOrders = async () => {
    try {
      if (!session?.user?.id) {
        setOrders([]);
        return;
      }

      setIsLoading(true);
      const userOrders = await db.order.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      setOrders(userOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatPrice = (price: any) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(price));
  };

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case "DELIVERED":
        return "text-green-500";
      case "PENDING":
      case "PROCESSING":
        return "text-yellow-500";
      case "CANCELLED":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <ContentLayout title="Orders">
      <div className="flex flex-col h-full">
        <header className="border-b">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold">Orders List</h2>
            <div className="flex gap-2">
              <Button className="bg-primary text-primary-foreground">
                + Add Order
              </Button>
              <Button
                onClick={fetchOrders}
                disabled={isLoading}
                variant="outline"
              >
                {isLoading ? "Syncing..." : "Sync Orders"}
              </Button>
            </div>
          </div>
        </header>

        <div className="p-4">
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Product Details</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      {isLoading
                        ? "Loading orders..."
                        : "No orders found. Click 'Sync Orders' to fetch your orders."}
                    </TableCell>
                  </TableRow>
                ) : (
                  orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{order.orderId}</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(order.createdAt)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{order.productName}</div>
                      </TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>{formatPrice(order.productPrice)}</TableCell>
                      <TableCell>
                        <div
                          className={`text-sm font-medium ${getStatusColor(
                            order.orderStatus
                          )}`}
                        >
                          {order.orderStatus}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Update Status</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete Order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
