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

async function updateOrder(orderId: string) {
  db.order.update({
    where: { id: orderId },
    data: { orderStatus: "SHIPPED" },
  });
}

export default async function ShipOrderPage({
  params,
}: {
  params: { orderId: string };
}) {
  const order = await getOrder(params.orderId);
  return (
    <ContentLayout title="Ship Order">
      <div className=" min-h-screen w-full mx-auto">
        <ShipOrderForm order={order} />
      </div>
    </ContentLayout>
  );
}
