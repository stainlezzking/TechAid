import Navbar from "@/components/Navbar";
import Box from "@/components/box";

const Notification = function() {
    return(
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[52px] xl:max-w-[1200px]">
                <div className="border-b border-black w-full ">
                    Notifications
                </div>
                <div className="pt-[41px] pb-[121px]">
                    <Box className="p-[16px]">
                        <span>#5986  . Now</span>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Notification;