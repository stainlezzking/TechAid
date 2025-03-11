import Box from "@/components/box";

const Ticket = function () {
    return (
        <div className="mx-[31px]">
            <div className="pt-[22px] pb-[58px] xl:max-w-[1200px] mx-auto">
                <Box>
                    <div className="flex flex-col">
                        <div className="flex justify-between pb-[10px]">
                            <div className="font-medium text-2xl pl-[20px] pt-[18px]">
                                Can't Receive or Send email
                            </div>
                            <div className="flex">
                                <div className="pr-[44px] pt-[22px] font-medium">250211000023</div>
                                <div className="pr-[11px] pt-[22px] font-medium">Severity - High</div>
                                <div className="flex flex-col pr-[59px] font-medium">
                                    <div className="text-borderActive pt-[14px]">David Eberechukwu</div>
                                    <div>Assigned to</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex pl-[20px] gap-[15px] ">
                            <div className="flex flex-1 flex-wrap items-center justify-between p-[10px] text-sm">
                                <div>Summary</div>
                                <div>Details</div>
                                <div>Attachments</div>
                                <div>Survey Feedbacks(0)</div>
                                <div>Assign</div>
                                <div>Close Ticket</div>
                            </div>
                            <div className=" pr-[47px] pb-[21px] text-sm">
                                <label>Status:</label>
                                <select>
                                    <option>Open</option>
                                    <option>In Progress</option>
                                    <option>Closed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </Box>
                <div className="flex pt-[23px] gap-[20px]">
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
                <div className="pt-[23px]">
                    <Box className="px-[40px] pt-[34px]">
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
            </div>
        </div>
    );
}

export default Ticket;