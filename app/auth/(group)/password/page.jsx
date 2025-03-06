'use client'

import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import Arrow from "@/public/arrow.png";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";


const Password = function () {
  const router = useRouter();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ });

  const handlePasswordSubmit = (data) => {
    setIsSubmitted(true);
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitted) {
      router.push("../auth/2FA-auth-login"); 
    }
  }, [isSubmitted, router]);

  return (
    <div className="flex flex-col w-full mx-auto">
      <h1 className="text-2xl font-semibold pb-[30px]">Sign in to Optimus Tech Aid</h1> 

      <form onSubmit={handleSubmit(handlePasswordSubmit)}>
        <div className="flex flex-col pb-[20px]">
          <label className="pb-[10px] flex">Sign in as 
            <div className=" ml-2 bg-primaryBlue text-white rounded-md">i@optimusbank.com
            </div>
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
          <img src={Arrow.src} className="w-[70px] h-[70px]" alt="arrow"/>
          </Link>

          <Button className="ml-5 w-[460px]" type="Submit" disabled={!isValid}>Confirm</Button>
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