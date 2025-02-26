'use client'

import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = function () {
  const router = useRouter();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    router.push('../auth/password');
  };

  return (
    <div className="flex flex-col w-full p-5">
      <h1 className="text-2xl font-semibold pb-[30px]">Sign in to Optimus Tech Aid</h1> 

      <form onSubmit={handleEmailSubmit}>
        <div className="flex flex-col pb-[20px]">
          <Input className="" type="email" placeholder="@ Email Address" required/>
        </div>
        
        <div className=" flex items-center justify-center pb-[20px] text-gray200">
          Forget Password?
            <Link href="">
              <span className="text-primaryBlue ml-2">Click Here</span>
            </Link> 
        </div>

        <Button className="" type="submit">Continue</Button>
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
