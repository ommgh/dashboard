"use client";

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

export default function Component() {
  return (
    <ContentLayout title="Orders">
      <div className="flex flex-col h-full">
        <header className="border-b">
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
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <RefreshCw className="h-4 w-4" />
                <span className="hidden sm:inline">Sync Orders</span>
              </Button>
            </div>
          </div>
        </header>
        <div className="p-4 space-y-4">
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
                  <TableHead>Package Details</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">#1002</div>
                    <div className="text-sm text-muted-foreground">
                      09 Nov 2024 | 09:59 PM
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Image
                        src="/shopify-logo.png"
                        alt="Shopify"
                        className="h-4 w-4"
                      />
                      <span className="text-sm">Shopify</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>Om Mishra</div>
                    <div className="text-sm text-muted-foreground">
                      ommishra1990@gmail.com
                    </div>
                    <div className="text-sm text-muted-foreground">
                      +916299921091
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>The Multi-location Sno...</div>
                    <div className="text-sm text-muted-foreground">
                      SKU: 46136758239389
                    </div>
                    <div className="text-sm text-muted-foreground">QTY: 1</div>
                  </TableCell>
                  <TableCell>
                    <div>Dead wt.: 0.35 Kg</div>
                    <div className="text-sm text-muted-foreground">
                      100 x 30 x 80 (cm)
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Volumetric wt.: 0.90
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>₹ 861.34</div>
                    <div className="text-sm text-green-500">Prepaid</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center items-center gap-5">
                      <Button size="sm">Ship Now</Button>
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
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              Showing 1 of 1 orders
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
