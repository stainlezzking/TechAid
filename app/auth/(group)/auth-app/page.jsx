"use client";
import { useAuth } from "@/context/authenticationApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Authentication = function () {
  const router = useRouter();
  const { UserDataState } = useAuth();

  useEffect(() => {
    if (!UserDataState[0]) {
      router.push("/auth");
    }
  }, [UserDataState, router]);

  if (!UserDataState[0]) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <h1 className="text-2xl font-bold pb-[49px]">Scan to Enable Two-Step Verification</h1>
      <img src={UserDataState[0].qrcodeURL} alt="QRcode" />
      <span className="pt-[32px] pb-[44px]">Scan QR code using an Authenticator App</span>
      <Link href="/auth/2FA-auth" className="bg-primaryBlue hover:bg-primaryBlue/70 font-medium text-white rounded-md block w-[214px] text-center py-[12px]">
        Next
      </Link>
    </div>
  );
};

export default Authentication;
