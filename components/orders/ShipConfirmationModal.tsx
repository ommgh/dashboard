import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface ShipConfirmationModalProps {
  open: boolean;
  onClose: () => void;
}

export function ShipConfirmationModal({
  open,
  onClose,
}: ShipConfirmationModalProps) {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/orders");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-center">
            Order Sent Successfully
          </DialogTitle>
          <DialogDescription className="text-center">
            Your order has been sent to AMAZON MCF for processing
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button onClick={handleReturn}>Return to Orders</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
