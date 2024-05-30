"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();

  return (
    <main className="min-h-screen h-full w-full flex items-center justify-center">
      {user ? (
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <Link href="/auth/sign-in">
          <Button>Sign In</Button>
        </Link>
      )}
    </main>
  );
}
