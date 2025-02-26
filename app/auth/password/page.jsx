'use client'

import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Password = function () {
  const router = useRouter();

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    router.push('../../home');
  };

  return (
    <div className="flex flex-col w-full p-5">
      <h1 className="text-2xl font-semibold pb-[30px]">Sign in to Optimus Tech Aid</h1> 

      <form onSubmit={handlePasswordSubmit}>
      <div className="flex flex-col pb-[20px]">
          <label className="pb-[10px] flex">Sign in as 
            <div className=" ml-2 bg-primaryBlue text-white rounded-md">i@optimusbank.com
            </div>
          </label>
          <Input className="" type="password" placeholder="Password" required/>
      </div>


      <div className="pb-[20px]">
        Forget Password?
          <Link href="">
            <span className="text-primaryBlue ml-2">Click Here</span>
          </Link> 
      </div>
 
      <div className="flex">
            <Link href="../auth/login">
            <img src="/arrow.png" className="w-[70px] h-[70px]" alt="arrow"/>
            </Link>

            <Button className="ml-5 w-[460px]" onClick={handlePasswordSubmit}>Confirm</Button>
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