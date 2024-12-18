"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/use-current-user";
import { useEffect, useState } from "react";
import { Platform } from "@prisma/client";
import { getIntegratedChannels } from "@/hooks/integrations";

const channels = [
  {
    name: "Shopify",
    description:
      "Integrate your Shopify store to sync products, orders, and customers.",
    icon: "/shopify-logo.png?height=40&width=40",
    platform: Platform.SHOPIFY,
    onClick: "/dashboard/shopify",
  },
  {
    name: "Custom Website",
    description:
      "Use our API to integrate sales from your custom-built website.",
    icon: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1732131882/16646018_rgbuhm.jpg?height=40&width=40",
    platform: Platform.CUSTOM,
    onClick: "/dashboard/custom",
  },
  {
    name: "eBay",
    description:
      "Connect your eBay account to manage listings and orders in one place.",
    icon: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1732131597/pngwing.com_3_mxpikp.png?height=40&width=40",
    platform: Platform.EBAY,
    onClick: "/dashboard/ebay",
  },
];

export default function IntegrateChannelsPage() {
  const router = useRouter();
  const user = useCurrentUser();
  const [integratedChannels, setIntegratedChannels] = useState<Platform[]>([]);

  useEffect(() => {
    async function fetchChannels() {
      if (user?.id) {
        const channels = await getIntegratedChannels(user.id);
        setIntegratedChannels(channels);
      }
    }
    fetchChannels();
  }, [user?.id]);

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
              <Button
                onClick={() => router.push(channel.onClick)}
                disabled={integratedChannels.includes(channel.platform)}
                className="w-full disabled:bg-green-500"
              >
                {integratedChannels.includes(channel.platform)
                  ? "Connected"
                  : "Integrate"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
