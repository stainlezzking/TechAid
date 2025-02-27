import Navbar from "@/components/Navbar";
import Box from "@/components/box";
import Input from "@/components/input";

const Ticket = function() {
    return (
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[26px] xl:max-w-[1200px]">
                <form>
                    <div className="pb-[22px]">
                        <Box className="pl-[60px] pr-[94px] py-[24px] w-full">
                            <div className="font-medium pb-[10px]">
                                Frequently encountered issues
                            </div>
                            <div className="flex flex-col">
                                <label className="font-extralight pb-[10px]">Tell us about your problem so we can get you the right help and support</label>
                                <Input 
                                    className="py-[16px] border-none"
                                    type="text" 
                                    placeholder="Example: I have isssues logging into my computer">
                                </Input>
                            </div>
                        </Box>
                    </div>
                    <div>
                        <Box className="pl-[70px] pr-[97px] pt-[25px] pb-[36px]">
                        <div className="flex flex-col">
                                <label className="pb-[17px]">Title:</label>
                                
                                <Input 
                                    className="py-[16px] border-none shadow-md"
                                    type="text" 
                                    placeholder="I have isssues logging into my computer">
                                </Input>
                            </div>
                        </Box>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Ticket