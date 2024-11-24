import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, MessageSquare, Coins } from "lucide-react";
import { Content } from "next/font/google";
import { ContentLayout } from "@/components/admin-panel/content-layout";

const tools = [
  {
    name: "Visualize",
    description:
      "Visualize your orders data and gain insights about you customers with our AI-powered visual tool.",
    icon: Eye,
    href: "/tools/visuals",
    color: "text-blue-500",
  },
  {
    name: "Chat",
    description:
      "Engage in intelligent conversations and get instant answers related to your orders with our AI chatbot.",
    icon: MessageSquare,
    href: "/tools/chat",
    color: "text-green-500",
  },
  {
    name: "Optimization",
    description:
      "Optimize your order fulfillment process with AI-driven insights and recommendations.",
    icon: Coins,
    href: "/tools/optimize",
    color: "text-yellow-500",
  },
];

export default function AIToolsPage() {
  return (
    <ContentLayout title="AI Tools">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.name} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`${tool.color} p-2 rounded-full bg-muted`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{tool.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={tool.href}>{tool.name}</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </ContentLayout>
  );
}
