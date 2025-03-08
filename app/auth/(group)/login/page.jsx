"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useAuth } from "@/context/authenticationApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = function () {
  const router = useRouter();
  const { isNewUserState, loginState } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ defaultValues: loginState[0] });

  const handleEmailSubmit = (data) => {
    isNewUserState[1](false);
    loginState[1](data);
    router.push("/auth/password");
    return;
  };

  return (
    <div className="flex flex-col w-full mx-auto">
      <h1 className="text-2xl font-semibold pb-[30px]">Sign in to Optimus Tech Aid</h1>

      <form onSubmit={handleSubmit(handleEmailSubmit)}>
        <div className="flex flex-col pb-[20px]">
          <Input
            className=""
            type="email"
            placeholder="@ Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
                message: "Email must end with @gmail.com",
              },
            })}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div className=" flex items-center justify-center pb-[20px] text-gray200">
          Forget Password?
          <Link href="">
            <span className="text-primaryBlue ml-2">Click Here</span>
          </Link>
        </div>

        <Button className="py-3" type="submit" disabled={!isValid}>
          {!isSubmitting ? "Continue" : "Validating..."}
        </Button>
      </form>

      <div className="flex items-center justify-center pt-[20px] text-gray200">
        Don't have an account?
        <Link href="/auth">
          <span className="text-primaryBlue ml-2">Register</span>
        </Link>
      </div>

      <div className="flex items-center justify-center pt-[20px] text-gray200">
        Questions? Email us at
        <Link href="">
          <span className="text-primaryBlue ml-2">support@optimusbank.com</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
