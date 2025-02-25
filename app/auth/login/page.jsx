import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";

const Login = function () {
  return (
    <div className="flex flex-col w-full p-5">
      <h1 className="text-2xl font-semibold">Sign in to Optimus Tech Aid</h1> 

      <div className="flex items-center justify-center p-5">
        <Input className="w-[70%]" type="email" placeholder="@ Email Address" required/>
      </div>

      <div className=" flex items-center justify-center pb-[20px] text-gray200">
        Forget Password?
          <Link href="">
            <span className="text-primaryBlue ml-2">Click Here</span>
          </Link> 
      </div>
      <Button className="">Continue</Button>

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
