'use client'

import Button from "@/components/button";
import Input from "@/components/input";
import { useRouter } from "next/navigation";

const Register = function () {
  const router = useRouter();
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      router.push('/confirmation');
    };

  return (
    <div className="flex flex-col justify-center w-full p-5">
      <h1 className="text-2xl font-bold pb-[10px]">Register Individual Account!</h1>
      <p className="pb-[20px] text-borderStroke">For the purpose of industry regulation, your 
        <br/>details are required.
      </p>

      <div className="">
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col pb-[20px]">
          <label className="pb-[5px] text-gray200">Your Fullname</label>
          <Input className="" 
            type="text" 
            placeholder="Enter Your Name" 
            required/>
        </div>

        <div className="flex flex-col pb-[20px]">
          <label className="pb-[5px] text-gray200">Email Address</label>
          <Input className="" type="email" placeholder="Email Address" required/>
        </div>

        <div className="flex flex-col pb-[20px]">
          <label className="pb-[5px] text-gray200">Create Password</label>
          <Input className="" type="password" placeholder="Password" required/>
        </div>

        <div className="flex flex-col pb-[20px]">
          <label className="pb-[5px] text-gray200">Re-enter Password</label>
          <Input className="" type="password" placeholder="Password" required/>
        </div>

        <div className="pb-[20px]">
          <label className="flex flex-col pb-[5px] text-gray200">Department</label>
          <select 
          className="border-borderStroke border-2 p-3 rounded-md  focus:border-blue-500 focus:outline-none hover:shadow-md w-[100%]" required>
              <option value="">--Department--</option>
              <option value="Technology">Technology</option>
              <option value="Legal">Legal</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Administration">Administration</option>
              <option value="Digital banking">Digital banking</option>
              <option value="Treasury">Treasury</option>
          </select>
        </div>

        <div className="pb-[30px] ">
          <label htmlFor="Terms and Conditions" className="text-gray200">
            <input required type="checkbox" 
            className="h-5 w-5 cursor-pointer hover:shadow-md border border-slate-300"  
            id="Terms and Conditions"/>
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
