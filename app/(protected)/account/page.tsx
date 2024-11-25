"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function AccountPage() {
  const session = useSession();
  const name = session.data?.user.name || "";
  const email = session.data?.user.email || "";

  const handleSignOut = () => {
    signOut();
  };

  return (
    <ContentLayout title="Account">
      <div className="container mx-auto p-4">
        <div className="max-w-md space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-muted-foreground">{email}</p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
