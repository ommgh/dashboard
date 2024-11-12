"use client";

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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar as CalendarIcon,
  Download,
  MoreHorizontal,
  RefreshCw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Component() {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b">
        <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <h1 className="text-xl font-semibold">Orders</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  All
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Orders</DropdownMenuItem>
                <DropdownMenuItem>Pending Orders</DropdownMenuItem>
                <DropdownMenuItem>Completed Orders</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex-1 w-full sm:max-w-3xl">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search orders..." className="pl-8" />
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
        <ScrollArea className="w-full">
          <Tabs defaultValue="new" className="px-4">
            <TabsList className="w-max">
              <TabsTrigger value="new" className="relative">
                New
                <Badge className="ml-2 bg-primary text-primary-foreground">
                  2
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="ready">Ready To Ship</TabsTrigger>
              <TabsTrigger value="pickups">Pickups & Manifests</TabsTrigger>
              <TabsTrigger value="transit">In Transit</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
              <TabsTrigger value="rto">RTO</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
          </Tabs>
        </ScrollArea>
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
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Select Bulk Action
            </Button>
          </div>
        </div>
        <div className="rounded-lg border overflow-hidden">
          <div className="hidden md:grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_auto_auto] gap-4 p-4 bg-muted/50">
            <div className="flex items-center">
              <Checkbox />
            </div>
            <div className="font-medium">Order Details</div>
            <div className="font-medium">Customer Details</div>
            <div className="font-medium">Product Details</div>
            <div className="font-medium">Package Details</div>
            <div className="font-medium">Payment</div>
            <div className="font-medium">Status</div>
            <div className="font-medium">Action</div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_auto_auto] gap-4 p-4 border-t items-start md:items-center">
            <div className="hidden md:block">
              <Checkbox />
            </div>
            <div>
              <div className="font-medium">#1002</div>
              <div className="text-sm text-muted-foreground">
                09 Nov 2024 | 09:59 PM
              </div>
              <div className="flex items-center gap-1 mt-1">
                <img src="/placeholder.svg" alt="Shopify" className="h-4 w-4" />
                <span className="text-sm">Shopify</span>
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <div>Om Mishra</div>
              <div className="text-sm text-muted-foreground">
                ommishra1990@gmail.com
              </div>
              <div className="text-sm text-red-500">Contact missing</div>
            </div>
            <div className="mt-2 md:mt-0">
              <div>The Multi-location Sno...</div>
              <div className="text-sm text-muted-foreground">
                SKU: 46136758239389
              </div>
              <div className="text-sm text-muted-foreground">QTY: 1</div>
            </div>
            <div className="mt-2 md:mt-0">
              <div>Dead wt.: 0 Kg</div>
              <div className="text-sm text-muted-foreground">
                0 x 0 x 0 (cm)
              </div>
              <div className="text-sm text-muted-foreground">
                Volumetric wt.: 0 Kg
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <div>₹ 861.34</div>
              <div className="text-sm text-green-500">Prepaid</div>
            </div>
            <div className="mt-2 md:mt-0">
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary"
              >
                NEW
              </Badge>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <Button size="sm" className="w-full md:w-auto">
                Ship Now
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Order</DropdownMenuItem>
                  <DropdownMenuItem>Cancel Order</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
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
  );
}
