"use client";

import Button from "@/components/button";
import { FetchPost } from "@/lib/utils";
import Arrow from "@/public/arrow.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { InputOtp } from "@heroui/input-otp";
import { useAuth } from "@/context/authenticationApi";
import { signIn } from "next-auth/react";

const Verification = function () {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [otp, setOtp] = useState("");
  const { isNewUserState, UserDataState } = useAuth();

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
    setIsSubmitting(true);
    const path = isNewUserState[0] ? "/auth/register" : "/auth/2FA/login_validation";

    const response = await FetchPost(path, { data: UserDataState[0].data, code: otp });
    if (!response.success && response.redirect) {
      UserDataState[1](null);
      setIsSubmitting(false);
      setTimeout(() => {
        const path = isNewUserState[0] ? "/auth" : "/auth/login";
        router.push(path);
      }, 3000);
      return;
    }
    if (!response.success) {
      setIsSubmitting(false);
      return toast.warning(response.message);
    }

    const { user, token } = response;

    const result = await signIn("credentials", {
      user: JSON.stringify(user),
      token,
      redirect: false,
    });

    setIsSubmitting(false);

    if (result?.error) {
      toast.warning(result.error);
      return;
    }
    router.push("/");
    // i want to authenticate this user
  };

  return (
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
              segment: "w-12 h-12 text-center text-xl bg-gray100 rounded-md shadow-md",
            }}
          />
        </div>
        <div className="flex">
          <Link href={isNewUserState[0] ? "/auth" : "/auth/login"}>
            <img src={Arrow.src} className="w-[70px] h-[70px]" alt="arrow" />
          </Link>
          <Button className="ml-5 w-[50%]" type="button" onClick={handleCodeSubmit}>
            {!submitting ? "Confirm" : "Submitting..."}
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
  );
};

export default Verification;
