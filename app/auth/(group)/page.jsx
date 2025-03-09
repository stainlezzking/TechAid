"use client";

import Button from "@/components/button";
import SelectForm from "@/components/form/selectForm";
import Input from "@/components/input";
import { userDepartments } from "@/utils/data";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "@/context/authenticationApi";
import { toast } from "sonner";
import Link from "next/link";

const Register = function () {
  const router = useRouter();
  const { signupState, UserDataState, isNewUserState } = useAuth();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: signupState[0] });

  // Handle form submission
  const handleFormSubmit = async (data) => {
    signupState[1](data);
    isNewUserState[1](true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/credentials`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((d) => d.json());

    const errRes = response.error;
    if (!response.success) {
      if (typeof errRes != "object") return toast(response.message, { position: "top-right" });
      response.error.forEach((err) => {
        toast(err, {
          position: "top-right",
        });
      });
      return;
    }
    if (!response.data) {
      // if the server does not send any data down.
      toast("Please reload the page and try again..");
      setTimeout(() => {
        window.location.href = window.location.href;
      }, 3000);
    }
    UserDataState[1]({ data: response.data, qrcodeURL: response.qrcodeURL });
    router.push("/auth/auth-app");
  };

  return (
    <div className="flex flex-col justify-center w-full mx-auto">
      <h1 className="text-2xl text-[30px] font-bold pb-[5px]">Register Individual Account!</h1>
      <p className="pb-[40px] w-[411px] text-[18px] text-borderStroke">For the purpose of industry regulation, your details are required.</p>

      <div className="">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-[426px] space-y-[24px]">
          {/* Full Name Field */}
          <div className="flex flex-col">
            <label className="pb-[5px] text-gray200">Your Fullname</label>
            <Input type="text" placeholder="Enter Your Name" {...register("fullname", { required: "Full name is required" })} />
            {errors.fullname && <span className="text-red-500 text-sm">{errors.fullname.message}</span>}
          </div>

          {/* Email field */}
          <div className="flex flex-col">
            <label className="pb-[5px] text-gray200">Email Address</label>
            <Input
              type="email"
              placeholder="Email Address"
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

          {/* Password Field */}
          <div className="flex flex-col">
            <label className="pb-[5px] text-gray200">Create Password</label>
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

          {/* Department Field */}
          <div>
            <Controller
              control={control}
              name="department"
              render={({ field }) => <SelectForm {...field} options={userDepartments} />}
              rules={{ required: "Department is required" }}
            />

            {errors.department && <span className="text-red-500 text-sm">{errors.department.message}</span>}
          </div>

          {/* Terms and Conditions */}
          <div className="flex flex-col">
            <div className="flex gap-x-[14px]">
              <input
                type="checkbox"
                id="Terms and Conditions"
                className="h-5 w-5 cursor-pointer hover:shadow-md border border-slate-300"
                {...register("terms", { required: "You must agree to the terms and conditions" })}
              />
              <label htmlFor="Terms and Conditions" className="text-gray200">
                I agree to terms & conditions
              </label>
            </div>
            {errors.terms && <span className="text-red-500 text-sm">{errors.terms.message}</span>}
          </div>

          <Button type="submit">{!isSubmitting ? " Register Account" : "Submitting..."}</Button>
          <div className="flex items-center justify-center pt-[10px] text-gray200">
            Already have an account?
            <Link href="/auth/login">
              <span className="text-primaryBlue ml-2">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
