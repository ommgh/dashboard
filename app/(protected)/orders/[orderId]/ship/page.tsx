import { db } from "@/lib/db";
import { ShipOrderForm } from "@/components/orders/ShipOrderForm";
import { notFound } from "next/navigation";
import { ContentLayout } from "@/components/admin-panel/content-layout";

async function getOrder(orderId: string) {
  const order = await db.order.findUnique({
    where: { id: orderId },
  });

  if (!order) notFound();
  return order;
}

export default async function ShipOrderPage({
  params,
}: {
  params: { orderId: string };
}) {
  const order = await getOrder(params.orderId);

  return (
    <ContentLayout title="Ship Order">
      <div className=" h-[60vh] w-full mx-auto">
        <ShipOrderForm order={order} />
      </div>
    </ContentLayout>
  );
}
