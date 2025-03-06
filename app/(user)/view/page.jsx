<<<<<<< HEAD
import Navbar from "@/components/Navbar";

const Ticket2 = function() {
    return(
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[112px] pb-[43px] xl:max-w-[1200px]">
                <div className="border-b border-black w-full ">
                    Password reset not working
                </div>
                <div className="flex justify-between pt-[31px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <span className="font-extralight">Ticket Number</span>
                            <span className="font-semibold">#347343</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extralight">Created by</span>
                            <span className="font-semibold">Password reset not working</span>
                        </div>
                    </div>
                </div>
=======
"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Box from "@/components/box";
import Button from "@/components/button";

const View = function() {
    const [isOpen, setIsOpen] = useState(false);

    const addMessage = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[74px] pb-[43px] xl:max-w-[1200px]">
                <div className="border-b border-black w-full ">
                    Can't Receive or Send Email
                </div>
                <div className="flex justify-between py-[15px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <span className="font-extralight">Ticket Number</span>
                            <span className="font-semibold">250211000023</span>
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
                            <span className="font-semibold">Feb 11, 2025 08:00</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <span className="font-extralight">Status</span>
                            <span>Troubleshooting</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extralight">Severity</span>
                            <span>A</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <span className="font-extralight">Description</span>
                            <span>I have not been able to send and <br/> receive emails since yesterday</span>
                        </div>
                        <div className="flex flex-col">
                            <span>Can you help me check what is <br/> happening?</span>
                        </div>
                    </div>
                </div>
                <div className="border-b border-black w-full">
                    In-App Messages
                </div>
                <div className="pt-[20px]">
                <Box className="flex flex-col p-[24px]">
                    <span className="font-bold pb-[8px]">Email from David.Eberechukwu@optimusbank.com</span>
                    <span>Hello Ezemandu,</span>
                    <span>I trust you are doing great.</span>
                    <span>I just helped you renew your subscription. Can you confirm if you can see this mail?</span>
                </Box>
                </div>
                <div className="pt-[16px]">
                <Box className="flex flex-col p-[24px]">
                    <span className="font-bold pb-[8px]">Note From: You</span>
                    <span className="pb-[20px]">Thanks David for picking up this ticket.</span>
                    <span>Can you help me check what is wrong with my mail? I have been unable to send or receive mails since yesterday.</span>
                </Box>
                </div>
                <div className="pt-[18px]">
                <Box className="flex flex-col p-[24px]">
                    <span className="font-bold pb-[8px]">Note From: David Eberechukwu</span>
                    <span className="pb-[20px]">Hello Ezemandu,</span>
                    <span>This is David and I will be working with you on this ticket. Please give me a few minutes to check on your account.</span>
                </Box>
                </div>
                <div className="py-[18px]">
                    <Button 
                        className="p-[12px] w-[20%] ml-auto" 
                        onClick={addMessage}
                    >
                        Add Message
                    </Button>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white py-[25px] px-[41px] rounded-lg shadow-lg max-w-sm w-full">
                            <h2 className="text-xl font-semibold mb-4">Leave A Message</h2>
                            <textarea className="border border-borderStroke p-2 rounded-lg min-w-full h-40"></textarea>
                            <Button
                                onClick={addMessage}
                                className="mt-4 ml-auto px-4 py-2 w-[40%]"
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                )}
>>>>>>> frontend-v1
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default Ticket2
=======
export default View
>>>>>>> frontend-v1
