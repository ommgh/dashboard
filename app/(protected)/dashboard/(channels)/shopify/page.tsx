"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ConnectStorePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [apiKey, setapiKey] = useState("");
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/shopify/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeName, storeUrl, apiKey }),
      });

      if (!response.ok) {
        throw new Error("Failed To Connect To Channel");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContentLayout title="Shopify">
      <div className="max-w-4xl mx-auto p-6 items-center justify-center">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Access Token</label>
            <Input
              type="string"
              value={apiKey}
              onChange={(e) => setapiKey(e.target.value)}
              className="border p-2 w-full rounded"
              placeholder="SH-XXXXX"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Store Name</label>
            <Input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="border p-2 w-full rounded"
              placeholder="Your Store Name"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Store URL</label>
            <Input
              type="url"
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
              className="border p-2 w-full rounded"
              placeholder="https://yourstorename.myshopify.com"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 rounded disabled:opacity-50"
          >
            {isLoading ? "Connecting..." : "Connect"}
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 rounded disabled:opacity-50"
            onClick={() => router.push("/orders")}
          >
            {isLoading ? "Fetching..." : "Go To Orders"}
          </Button>
        </form>
      </div>
    </ContentLayout>
  );
}
