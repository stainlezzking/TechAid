'use client'

import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Login = function () {
  const router = useRouter();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ });

  const handleEmailSubmit = (data) => {
    setIsSubmitted(true);
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitted) {
      router.push("../auth/password"); 
    }
  }, [isSubmitted, router]); 

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

        <Button className="" type="submit" disabled={!isValid}>Continue</Button>
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
