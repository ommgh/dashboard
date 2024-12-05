"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dummy data for warehouse allocations
const warehouseData = [
  { name: "Chennai", allocation: 10 },
  { name: "Lucknow", allocation: 28 },
  { name: "Jaipur", allocation: 22 },
  { name: "Patna", allocation: 20 },
];

// Dummy data for geographical trends
const geographicalData = [
  { region: "North", orders: 4 },
  { region: "South", orders: 1 },
  { region: "East", orders: 1 },
  { region: "West", orders: 2 },
];

// Dummy data for product distribution
const productData = [
  {
    id: 1006,
    name: "The Multi-location Snowboard",
    stock: 10,
    strategy: "Even distribution",
    warehouse: "Patna, Lucknow, Jaipur",
  },
  {
    id: 1005,
    name: "The Multi-location Snowboard",
    stock: 10,
    strategy: "Even distribution",
    warehouse: "Patna, Lucknow, Jaipur",
  },
  {
    id: 1004,
    name: "The Compare at Price Snowboard",
    stock: 22,
    strategy: "Centralized",
    warehouse: "Lucknow",
  },
  {
    id: 590,
    name: "White Bedsheet",
    stock: 30,
    strategy: "Even Distribution",
    warehouse: "Patna, Lucknow, Jaipur, Chennai",
  },
  {
    id: 1003,
    name: "The Multi-managed Snowboard",
    stock: 25,
    strategy: "Centralized",
    warehouse: "Patna, Lucknow, Jaipur, Chennai",
  },
  {
    id: 1002,
    name: "The Multi-location Snowboard",
    stock: 18,
    strategy: "Even distribution",
    warehouse: "Patna, Lucknow, Jaipur",
  },
  {
    id: 1001,
    name: "The Collection Snowboard: Liquid",
    stock: 15,
    strategy: "Even distribution",
    warehouse: "Patna, Lucknow, Jaipur, Chennai",
  },
];

export default function WarehouseAllocationPage() {
  return (
    <ContentLayout title="Optimize">
      <div className="container mx-auto p-4 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Warehouse Allocations</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={warehouseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="allocation" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Geographical Order Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={geographicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="orders" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Product Stock Distribution Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Current Stock</TableHead>
                  <TableHead>Distribution Strategy</TableHead>
                  <TableHead>Warehouse Assignment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productData.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.strategy}</TableCell>
                    <TableCell>{product.warehouse}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
