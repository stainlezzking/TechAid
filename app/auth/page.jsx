"use client";

import Button from "@/components/button";
import SelectForm from "@/components/form/selectForm";
import Input from "@/components/input";
import { userDepartments } from "@/utils/data";
import { useRouter } from "next/navigation";

const Register = function () {
  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push("/confirmation");
  };

  return (
    <div className="flex flex-col justify-center w-full mx-auto">
      <h1 className="text-2xl text-[30px] font-bold pb-[5px]">Register Individual Account!</h1>
      <p className="pb-[40px] w-[411px] text-[18px] text-borderStroke">For the purpose of industry regulation, your details are required.</p>

      <div className="">
        <form onSubmit={handleFormSubmit} className="max-w-[426px] space-y-[24px]">
          <div className="flex flex-col">
            <label className="pb-[5px] text-gray200">Your Fullname</label>
            <Input type="text" placeholder="Enter Your Name" required />
          </div>

          <div className="flex flex-col">
            <label className="pb-[5px] text-gray200">Email Address</label>
            <Input type="email" placeholder="Email Address" required />
          </div>

          <div className="flex flex-col">
            <label className="pb-[5px] text-gray200">Create Password</label>
            <Input type="password" placeholder="Password" required />
          </div>

          <div>
            <label className="flex flex-col pb-[5px] text-gray200">Department</label>
            <SelectForm options={userDepartments} />
          </div>

          <div className="flex gap-x-[14px]">
            <input required type="checkbox" className="h-5 w-5 cursor-pointer hover:shadow-md border border-slate-300" id="Terms and Conditions" />
            <label htmlFor="Terms and Conditions" className="text-gray200">
              I agree to terms & conditions
            </label>
          </div>
          <Button className="">Register Account</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
