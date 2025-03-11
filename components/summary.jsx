"use client";

import { useState } from "react";
import Box from "@/components/box";
import Button from "@/components/button";
import Plus from "@/public/plus.png";
import Refresh from "@/public/refresh.png";
import ThreeDots from "@/public/three-dots.png";

const Summary = function () {
    const [isOpen, setIsOpen] = useState(false);

    const addMessage = () => {
    setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="flex gap-[20px]">
                <Box className="flex-3 grow shrink-0 aspect-[1] h-[300px] pl-[24px] pr-[84px] pt-[34px]">
                    <div className="flex pb-[97px] gap-[83px]">
                        <div className="font-medium">Description</div>
                        <div className="bg-[#EEEEEE] pl-[20px] pb-[9px] w-[100%] rounded-sm">
                            I have not been able to send and receive emails since yesterday.<br/> Can you help me check what is happening?
                        </div>
                    </div>
                    <div className="flex gap-[106px] pb-[55px]">
                        <div className="font-medium">Email CC</div>
                        <div className="bg-[#EEEEEE] pl-[20px] pt-[6px] w-[100%] rounded-sm">
                            AdekolaGbenga@optimusbank.com
                        </div>
                    </div>
                </Box>
                <Box className="flex-1 grow shrink-0 aspect-[1] h-[300px] pl-[18px] pr-[27px]">
                    <div className="pt-[15px] font-medium">Primary Contact</div>
                    <div className="flex gap-[63px] pt-[19px] pb-[14px] text-sm">
                        <div>Name</div>
                        <div className="bg-[#EEEEEE] pl-[20px] w-[100%] rounded-sm">Faith Bernard</div>
                    </div>
                    <div className="flex gap-[30px] pb-[14px] text-sm">
                        <div>Phone Number</div>
                        <div className="bg-[#EEEEEE] pt-[10px] pl-[20px] w-[100%] rounded-sm">+234-9087564532</div>
                    </div>
                    <div className="flex gap-[63px] pb-[14px] text-sm">
                        <div>Email</div>
                        <div className="bg-[#EEEEEE] pl-[20px] w-[100%] rounded-sm">Faith.Bernard@optimusbank.com</div>
                    </div>
                    <div className="flex gap-[20px] text-sm">
                        <div>Contact Method</div>
                        <div className="bg-[#EEEEEE] pt-[10px] pl-[20px] w-[100%] rounded-sm">Phone/Teams Call</div>
                    </div>
                </Box>
            </div>
            <div className="py-[23px]">
                <Box className="px-[40px] pt-[10px] pb-[34px]">
                    <div className="flex items-center justify-end pr-[10px] pb-[34px] gap-[15px]">
                        <div>
                            <button className="p-1" onClick={addMessage}>
                                <img src={Plus.src} alt="plus"/>
                            </button>
                        </div>
                        <div>
                            <button className="p-1">
                                <img src={Refresh.src} alt="refresh"/>
                            </button>
                        </div>
                        <div>
                            <button className="p-1">
                                <img src={ThreeDots.src} alt="three-dots"/>
                            </button>
                        </div>
                    </div>
                    <Box className="flex flex-col pl-[20px] pr-[18px] pt-[20px] pb-[15px] mb-[17px]">
                        <div className="flex justify-between">
                            <span className="font-bold pb-[8px]">Email from: <span className="font-normal">You</span></span>
                            <span>11/02/2025 8:53am</span>
                        </div>
                        <span>Faith,</span>
                        <span>I trust you are doing great.</span>
                        <span>I just helped you renew your subscription. Can you confirm if you can see this mail?</span>
                    </Box>
                    <Box className="flex flex-col pl-[20px] pr-[18px] pt-[20px] pb-[15px] mb-[17px]">
                        <div className="flex justify-between">
                            <span className="font-bold pb-[8px]">Case Note from: <span className="font-normal">Faith Bernard</span></span>
                            <span>11/02/2025 8:45am</span>
                        </div>
                        <span className="pb-[8px]">Thanks David for picking up this ticket.</span>
                        <span>Can you help me check what is wrong with my mail? I have been unable to send or receive <br/> emails since yesterday</span>
                    </Box>
                    <Box className="flex flex-col pl-[20px] pr-[18px] pt-[20px] pb-[15px] mb-[17px]">
                        <div className="flex justify-between">
                            <span className="font-bold pb-[8px]">Case Note from: <span className="font-normal">You</span></span>
                            <span>11/02/2025 8:45am</span>
                        </div>
                        <span className="pb-[8px]">Hello Faith,</span>
                        <span>This is David, and I will be working with you on this ticket. Please, give me a few minutes <br/>to check on your account</span>
                    </Box>
                    <Box className="flex flex-col pl-[20px] pr-[18px] pt-[20px] pb-[15px] mb-[17px]">
                        <div className="flex justify-between">
                            <span className="font-bold pb-[8px]">Notification Tech Aid system</span>
                            <span>11/02/2025 8:30am</span>
                        </div>
                        <span className="pb-[8px]">A case with high severity has been assigned to you</span>
                        <span>Title: Can't Send or Receive Emails</span>
                    </Box>
                </Box>
            </div>
            
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white py-[25px] px-[41px] rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-semibold mb-4">Leave A Message</h2>
                        <textarea className="border border-borderStroke p-2 rounded-lg min-w-full h-40"></textarea>
                        <Button onClick={addMessage} className="mt-4 ml-auto px-4 py-2 w-[40%]">
                            Send
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Summary;