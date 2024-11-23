"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function InitPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <Button onClick={() => router.push("/dashboard")}>
          Go To DashBoard
        </Button>
      </div>
    </div>
  );
}
