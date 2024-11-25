"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CreditCard,
  DollarSign,
  Package,
  TrendingUp,
  Wallet,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function BillingPage() {
  const [walletBalance, setWalletBalance] = useState(500);
  const [rechargeAmount, setRechargeAmount] = useState("");

  const handleRecharge = () => {
    const amount = parseFloat(rechargeAmount);
    if (!isNaN(amount) && amount > 0) {
      setWalletBalance((prevBalance) => prevBalance + amount);
      setRechargeAmount("");
    }
  };

  return (
    <ContentLayout title="Billing">
      <div className="container mx-auto p-4 space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Wallet Balance
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₹{walletBalance.toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                Available for shipping
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Spending
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹1,254.36</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Orders Shipped
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+5</div>
              <p className="text-xs text-muted-foreground">
                +1 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Cost per Order
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2.19</div>
              <p className="text-xs text-muted-foreground">
                +4.75% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="wallet" className="space-y-4">
          <TabsList>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
          </TabsList>
          <TabsContent value="wallet" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recharge Wallet</CardTitle>
                <CardDescription>
                  Add funds to your wallet for shipping orders.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="recharge">Recharge Amount</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="recharge"
                      placeholder="Enter amount"
                      type="number"
                      value={rechargeAmount}
                      onChange={(e) => setRechargeAmount(e.target.value)}
                    />
                    <Button onClick={handleRecharge}>Recharge</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>
                  Your recent wallet activities and order shipments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>
                    A list of your recent transactions.
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2023-06-01</TableCell>
                      <TableCell>Wallet Recharge</TableCell>
                      <TableCell>+₹100.00</TableCell>
                      <TableCell>Completed</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-05-30</TableCell>
                      <TableCell>Order #12345 Shipment</TableCell>
                      <TableCell>-₹2.50</TableCell>
                      <TableCell>Completed</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-05-28</TableCell>
                      <TableCell>Order #12344 Shipment</TableCell>
                      <TableCell>-₹3.25</TableCell>
                      <TableCell>Completed</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-05-25</TableCell>
                      <TableCell>Wallet Recharge</TableCell>
                      <TableCell>+₹50.00</TableCell>
                      <TableCell>Completed</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ContentLayout>
  );
}
