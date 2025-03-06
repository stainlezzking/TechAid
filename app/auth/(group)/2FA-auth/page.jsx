"use client";

import Button from "@/components/button";
import Arrow from "@/public/arrow.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Verification = function () {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
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
  const isOtpValid = otp.every((digit) => /^[0-9]$/.test(digit));
  const isAnyFieldEmpty = otp.some((digit) => digit === "");
  const isFormValid = isOtpValid && !isAnyFieldEmpty;

  const handleCodeSubmit = () => {
    console.log(otp);
    if (isFormValid) {
      router.push("../../confirmation");
    } else {
      setErrorMessage(isAnyFieldEmpty ? "Please fill out all OTP fields." : "Only numeric values are allowed in OTP fields.");
    }
  };

  return (
    <div className="flex flex-col w-full p-5">
      <div className="font-bold">Scan to Enable Two-Step Verification</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="pt-[31px] pb-[19px]">
          <div className="flex space-x-2">
            {otp.map((digit, index) => (
              <div key={index}>
                <input
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center text-xl bg-gray100 rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
        <div className="flex">
          <Link href="/auth">
            <img src={Arrow.src} className="w-[70px] h-[70px]" alt="arrow" />
          </Link>
          <Button className="ml-5 w-[50%]" disabled={!isFormValid} type="button" onClick={handleCodeSubmit}>
            Confirm
          </Button>
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

export default Verification;
