"use client";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    signOut({ redirect: false }).then(() => {
      router.push("/auth/login");
    });
  }, []);

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">Your session has expired!</p>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Login You out... please log back in</p>
        <div className="mt-10 flex items-center justify-center gap-x-6"></div>
      </div>
    </main>
  );
}
