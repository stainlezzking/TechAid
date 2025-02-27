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
                        <Box className="pl-[60px] pr-[94px] py-[24px]">
                            <div className="font-medium">
                                Frequently encountered issues
                            </div>
                            <Input type="text" placeholder="Example: I have isssues logging into my computer"></Input>
                        </Box>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Ticket