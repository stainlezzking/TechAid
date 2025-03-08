"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import Arrow from "@/public/arrow.png";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/authenticationApi";
import { FetchPost } from "@/lib/utils";
import { toast } from "sonner";

const Password = function () {
  const router = useRouter();
  const { loginState, isNewUserState, UserDataState } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({});

  const handlePasswordSubmit = async (data) => {
    const email = loginState[0].email;
    const response = await FetchPost("/auth/login", { email, password: data.password });
    if (!response.success) {
      toast.warning(response.message, {
        position: "top-right",
      });
      return;
    }
    console.log("this is the response user ", response.user);
    loginState[1](response.user);
    UserDataState[1]({ data: response.user });
    return router.push("/auth/2FA-auth");
  };

  useEffect(() => {
    if (!loginState[0] || isNewUserState[0]) {
      router.push("/auth/login");
    }
  }, [loginState[0], router, isNewUserState[0]]);

  if (!loginState[0]) {
    return null;
  }

  return (
    <div className="flex flex-col w-full mx-auto">
      <h1 className="text-2xl font-semibold pb-[30px]">Sign in to Optimus Tech Aid</h1>

      <form onSubmit={handleSubmit(handlePasswordSubmit)}>
        <div className="flex flex-col pb-[20px]">
          <label className="pb-[10px] flex">
            Sign in as
            <div className=" ml-2 bg-primaryBlue text-white rounded-md">i@optimusbank.com</div>
          </label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        <div className="pb-[20px]">
          Forget Password?
          <Link href="">
            <span className="text-primaryBlue ml-2">Click Here</span>
          </Link>
        </div>

        <div className="flex">
          <Link href="../auth/login">
            <img src={Arrow.src} className="w-[70px] h-[70px]" alt="arrow" />
          </Link>

          <Button className="ml-5 w-[460px]" type="Submit">
            {!isSubmitting ? "Confirm" : "Submitting"}
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

export default Password;
