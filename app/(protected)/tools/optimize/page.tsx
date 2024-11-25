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
  { name: "Warehouse A", allocation: 35 },
  { name: "Warehouse B", allocation: 28 },
  { name: "Warehouse C", allocation: 22 },
  { name: "Warehouse D", allocation: 15 },
];

// Dummy data for geographical trends
const geographicalData = [
  { region: "North", orders: 1200 },
  { region: "South", orders: 900 },
  { region: "East", orders: 1500 },
  { region: "West", orders: 1100 },
];

// Dummy data for product distribution
const productData = [
  {
    id: 1,
    name: "Product A",
    stock: 500,
    strategy: "Even distribution",
    warehouse: "A, B, C",
  },
  {
    id: 2,
    name: "Product B",
    stock: 750,
    strategy: "Centralized",
    warehouse: "B",
  },
  {
    id: 3,
    name: "Product C",
    stock: 300,
    strategy: "Regional focus",
    warehouse: "A, D",
  },
  {
    id: 4,
    name: "Product D",
    stock: 1000,
    strategy: "High demand areas",
    warehouse: "A, B, C, D",
  },
  {
    id: 5,
    name: "Product E",
    stock: 250,
    strategy: "Seasonal rotation",
    warehouse: "C, D",
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
