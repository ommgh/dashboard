"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SettingsPage = () => {
  const onClick = () => {
    signOut();
  };
  const router = useRouter();

  return (
    <div className="h-full w-full flex">
      <div className=" h-full w-full flex flex-col items-center justify-center gap-10">
        <Button onClick={onClick} className="mt-10">
          Logout
        </Button>
        <Button onClick={() => router.push("/dashboard")}>
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
