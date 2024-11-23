"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CopyInput from "@/components/copy-input";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ConnectStorePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [apiDetails, setApiDetails] = useState<{
    channelId: string;
    apiKey: string;
    storeName: string;
  } | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/custom/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeName, storeUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed To Connect To Channel");
      }

      const data = await response.json();
      setApiDetails(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContentLayout title="Custom Website">
      <div className="max-w-4xl mx-auto p-6 items-center justify-center">
        {!apiDetails ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Store Name</label>
              <Input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="border p-2 w-full rounded"
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
                placeholder="https://yourstore.com"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 rounded disabled:opacity-50"
            >
              {isLoading ? "Generating..." : "Get API Key"}
            </Button>
          </form>
        ) : (
          <div className="p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Your API Keys</h2>
            <div className="space-y-4">
              <div>
                <CopyInput
                  value={apiDetails.channelId}
                  label="Channel ID"
                ></CopyInput>
              </div>
              <div>
                <CopyInput
                  value={apiDetails.apiKey}
                  label="API Key"
                ></CopyInput>
              </div>
              <Button onClick={() => router.push("/orders/custom")}>
                Done
              </Button>
              <div className="p-4 rounded border mt-4">
                <ol className=" flex flex-col items-start justify-start gap-3">
                  <li className="text-sm">
                    - Save these credentials securely, the API key will not be
                    shown again
                  </li>
                  <li className="text-sm">
                    - You can use this to send orders from your website
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </ContentLayout>
  );
}
