"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShipConfirmationModal } from "@/components/orders/ShipConfirmationModal";
import { Loader2 } from "lucide-react";

interface Order {
  orderData: any;
}

export function ShipOrderForm({ order }: { order: Order }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editableOrderData, setEditableOrderData] = useState(
    JSON.stringify(order.orderData, null, 2)
  );

  const handleShipToAmazon = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowModal(true);
  };

  const handleOrderDataChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableOrderData(e.target.value);
  };

  return (
    <>
      <Card className="p-6 min-h-screen w-full">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Order Details</h2>
            <textarea
              className=" min-h-[70vh] w-full p-4 rounded-lg border font-mono text-sm"
              value={editableOrderData}
              onChange={handleOrderDataChange}
            />
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
