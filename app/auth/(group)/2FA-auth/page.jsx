"use client";

import Button from "@/components/button";
import { FetchPost } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { InputOtp } from "@heroui/input-otp";
import { useAuth } from "@/context/authenticationApi";
import { signIn } from "next-auth/react";
import Loader from "@/components/loading/loader";

const Verification = function () {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const {
    isNewUserState,
    UserDataState,
    loader: [loading, setLoading],
  } = useAuth();

  useEffect(() => {
    if (!UserDataState[0] && isNewUserState[0]) {
      router.push("/auth");
    }
    if (!UserDataState[0] && !isNewUserState[0]) {
      router.push("/auth/login");
    }
  }, [UserDataState[0], router, isNewUserState[0]]);

  if (!UserDataState[0]) {
    return null;
  }

  const handleCodeSubmit = async () => {
    setLoading(true);
    const path = isNewUserState[0] ? "/auth/register" : "/auth/2FA/login_validation";

    const response = await FetchPost(path, { data: UserDataState[0].data, code: otp });
    if (!response.success && response.redirect) {
      UserDataState[1](null);
      setLoading(false);
      setTimeout(() => {
        const path = isNewUserState[0] ? "/auth" : "/auth/login";
        router.push(path);
      }, 3000);
      return;
    }
    if (!response.success) {
      setLoading(false);
      return toast.warning(response.message, { position: "top-right" });
    }

    const { user, token } = response;

    const result = await signIn("credentials", {
      user: JSON.stringify(user),
      token,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      toast.warning(result.error);
      return;
    }
    router.push("/");
    // i want to authenticate this user
  };

  return (
    <>
      <Loader message="verifying details" />
      <div className="flex flex-col w-full p-5">
        <div className="font-bold">A verification code has been sent to your account</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="pt-[31px] pb-[19px]">
            <InputOtp
              length={6}
              value={otp}
              onValueChange={setOtp}
              errorMessage="Invalid OTP"
              classNames={{
                segmentWrapper: "flex space-x-2",
                segment: "w-14 h-14 text-center text-xl bg-gray100 rounded-md shadow-md",
              }}
            />
          </div>
          <div className="flex items-center gap-x-3">
            <Link href={isNewUserState[0] ? "/auth" : "/auth/login"} className="block p-3 bg-gray100 hover:bg-gray200 group rounded-[6px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10 19L3 12M3 12L10 5M3 12L21 12"
                  className="stroke-[#6B7280] group-hover:stroke-white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Button className="py-3 w-[50%]" type="button" onClick={handleCodeSubmit}>
              {!loading ? "Confirm" : "Submitting..."}
            </Button>
          </div>
        </form>
        <div className="pt-[20px]">
          Questions? Email us at
          <Link href="">
            <span className="text-primaryBlue ml-2">support@optimusbank.com</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Verification;
