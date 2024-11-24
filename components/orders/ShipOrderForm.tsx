"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShipConfirmationModal } from "@/components/orders/ShipConfirmationModal";
import { Loader2 } from "lucide-react";

interface Order {
  orderData: any; // Define the structure of orderData as needed
}

export function ShipOrderForm({ order }: { order: Order }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShipToAmazon = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowModal(true);
  };

  return (
    <>
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Order Details</h2>
            <pre className="p-4 rounded-lg overflow-auto">
              {JSON.stringify(order.orderData, null, 2)}
            </pre>
          </div>

          <Button
            onClick={handleShipToAmazon}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending to Amazon MCF...
              </>
            ) : (
              "Send to Amazon MCF"
            )}
          </Button>
        </div>
      </Card>

      <ShipConfirmationModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
