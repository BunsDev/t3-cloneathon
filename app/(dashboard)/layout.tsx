"use client";

import type React from "react";
import { ConvexClientProvider } from "./convex-provider";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

import { ClerkProvider, SignInButton } from "@clerk/nextjs";

import TopNav from "./TopNav";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/loading-spinner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
        <AuthLoading>
          <div className="flex justify-center items-center min-h-screen">
            <LoadingSpinner />
          </div>
        </AuthLoading>
        <Unauthenticated>
          <div className="flex justify-center items-center min-h-screen">
            <SignInButton>
              <Button className="bg-white text-black">
                Sign In With GitHub
              </Button>
            </SignInButton>
          </div>
        </Unauthenticated>
        <Authenticated>
          <div className="flex flex-col min-h-screen bg-black">
            <TopNav />
            {children}
          </div>
        </Authenticated>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
