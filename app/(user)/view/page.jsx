import Navbar from "@/components/Navbar";
import Box from "@/components/box";
import Button from "@/components/button";

const View = function() {
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
                    <Button className="p-[12px] w-[20%] ml-auto">Add Message</Button>
                </div>
            </div>
        </div>
    );
}

export default View