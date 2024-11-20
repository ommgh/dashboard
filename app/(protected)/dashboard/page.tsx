import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Globe, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";

const channels = [
  {
    name: "Shopify",
    description:
      "Integrate your Shopify store to sync products, orders, and customers.",
    icon: "/shopify-logo.png?height=40&width=40",
  },
  {
    name: "eBay",
    description:
      "Connect your eBay account to manage listings and orders in one place.",
    icon: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1732131597/pngwing.com_3_mxpikp.png?height=40&width=40",
  },
  {
    name: "WooCommerce",
    description:
      "Sync your WooCommerce store with our dashboard for seamless management.",
    icon: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1732131730/Woo-logo-white_cmz10r.png?height=40&width=40",
  },
  {
    name: "Custom Website",
    description:
      "Use our API to integrate sales from your custom-built website.",
    icon: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1732131882/16646018_rgbuhm.jpg?height=40&width=40",
  },
];

export default function IntegrateChannelsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Integrate Sales Channels</h1>
      <p className="text-muted-foreground mb-8">
        Connect your various sales channels to our dashboard for centralized
        management and reporting.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {channels.map((channel) => (
          <Card key={channel.name} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full`}>
                  <Image
                    src={channel.icon}
                    alt={`${channel.name} icon`}
                    width={40}
                    height={40}
                  />
                </div>
                <CardTitle>{channel.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{channel.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Integrate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
