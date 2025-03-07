"use client"

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Box from "@/components/box";
import Button from "@/components/button";

const ClosedView = function() {
    const router = useRouter();
        const handleFeedback = () => {
            router.push('/feedback')
        };

    return(
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[74px] pb-[43px] xl:max-w-[1200px]">
                <div className="border-b border-black w-full ">
                    Desktop not turning on
                </div>
                <div className="flex justify-between py-[15px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <span className="font-extralight">Ticket Number</span>
                            <span className="font-semibold">25020100004</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extralight">Assigned to</span>
                            <span className="font-semibold">David Eberechukewu</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <span className="font-extralight">Phone Number</span>
                            <span className="font-semibold">0905-909-3724</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extralight">Submitted</span>
                            <span className="font-semibold">Feb 01, 2025 09:38</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <span className="font-extralight">Status</span>
                            <span>Closed</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extralight">Criticality</span>
                            <span>Medium</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <span className="font-extralight">Description</span>
                            <span>My Desktop does not seem to work</span>
                        </div>
                    </div>
                </div>
                <div className="border-b border-black w-full">
                    In-App Messages
                </div>
                <div className="pt-[20px]">
                <Box className="flex flex-col p-[24px]">
                    <span className="font-bold pb-[8px]">Note from: David Eberechukwu</span>
                    <span className="pb-[20px]">Thank you for your time.</span>
                    <span>Do have a great day</span>
                </Box>
                </div>
                <div className="pt-[16px]">
                <Box className="flex flex-col p-[24px]">
                    <span className="font-bold pb-[8px]">Note From: You</span>
                    <span className="pb-[20px]">Thanks David for picking up this ticket.</span>
                    <span>Oh yes, thank you. It wasn't properly plugged in the monitor itself. Thank you, you can close the ticket.</span>
                </Box>
                </div>
                <div className="pt-[18px]">
                <Box className="flex flex-col p-[24px]">
                    <span className="font-bold pb-[8px]">Note From: David Eberechukwu</span>
                    <span className="pb-[20px]">Hello Ezemandu,</span>
                    <span>This is David and I will be working with you on this ticket. Can you confirm that the power cable is properly plugged to the computer and to the socket outlet.</span>
                </Box>
                </div>
                <div className="py-[18px]">
                    <Button 
                        className="px-[12px] py-[6px] w-[150px] ml-auto" 
                        onClick={handleFeedback}
                    >
                        Give Feedback
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ClosedView;