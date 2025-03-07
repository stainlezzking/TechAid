import Navbar from "@/components/Navbar";
import Box from "@/components/box";
import Button from "@/components/button";
import Rating from "@/public/Rating.png";

const Feedback = function() {
    return (
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[74px] pb-[43px] xl:max-w-[1200px]">
            <div className="border-b border-black w-full ">
                    Survey Feedback
            </div>
            <div className="mt-[46px] ml-[27px]">
                <Box className="grow shrink-0 max-w-[600px] pt-[32px] pl-[36.5px] pb-[21px]">
                    <div className="pb-[49px]">
                        Your ticket has been closed
                    </div>
                    <div>
                        Tell us about your experience working with the technical support Engineer
                    </div>
                    <div className="flex justify-center pt-[53px]">
                        <img src={Rating.src} alt="rating"/>
                    </div>
                    <div className="pt-[27px] pb-21px] pr-[28px]"> 
                        <Button className="ml-auto px-[12px] py-[6px] w-[100px]">
                            Submit
                        </Button>
                    </div>
                </Box>
            </div>
            </div>
        </div>
    );
}

export default Feedback;