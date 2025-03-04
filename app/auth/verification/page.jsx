"use client"

import Button from "@/components/button";
import Arrow from "@/public/arrow.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Verification = function () {
      const router = useRouter();
      const [otp, setOtp] = useState(["", "", "", "", "", ""]);

      const handleChange = (e, index) => {
            const value = e.target.value;
            if (value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            }

            if (value.length === 1 && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
              }
            };
          
            const handleKeyDown = (e, index) => {
              
              if (e.key === "Backspace" && otp[index] === "" && index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
              }
            };    
        
      const handleCodeSubmit = (e) => {
        e.preventDefault();
        router.push('../../confirmation');
      };

    return(
        <div className="flex flex-col w-full p-5">
            <div className="font-bold">
                A verification code has been sent to your account
            </div>
            <form onSubmit={handleCodeSubmit}>
                <div className="pt-[31px] pb-[19px]">
                    <div className="flex space-x-2">
                        {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-input-${index}`}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-12 h-12 text-center text-xl bg-gray100 rounded-md shadow-md"
                            required
                        />
                        ))}
                    </div>
                </div>
                <div className="flex">
                    <Link href="/auth">
                    <img src={Arrow.src} className="w-[70px] h-[70px]" alt="arrow"/>
                    </Link>
                    <Button className="ml-5 w-[50%]" onCSubmit={handleCodeSubmit}>Confirm</Button>
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
}

export default Verification;