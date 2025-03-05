"use client"

import Button from "@/components/button";
import QRcode from "@/public/QRCode.png";
import { useRouter } from "next/navigation";

const Authentication = function () {
    const router = useRouter(); 

    const handleNextClick = () => {
        router.push('../auth/2FA-auth'); 
    };

    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto">
            <h1 className="text-2xl font-bold pb-[49px]">Setup Authenticator App</h1> 
            <img src={QRcode.src} alt="QRcode"/>
            <span className="pt-[32px] pb-[44px]">Scan QR code using an Authenticator App</span>
            <Button className="w-[40%] p-[10px]" onClick={handleNextClick}>Next</Button>
        </div>
    );
}

export default Authentication