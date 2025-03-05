import Navbar from "@/components/Navbar";
import Box from "@/components/box";
import image from "@/public/Image.png";
import icon from "@/public/icon_1.png";

const Profile = function() {
    return (
        <div className="mx-[31px]">
            <Navbar/>
            <div className="pt-[77px] xl:max-w-[1200px] mx-auto">
                <div className="pb-[75px]">
                <Box className="flex max-h-[200px]">
                    <div className="w-[100%] flex items-center justify-between p-[39px]">
                        <div className="flex items-center">
                            <div className="">
                            <img src={image.src} alt="picture"/>
                            </div>

                            <div className="pl-[40px]">
                            <p className="font-semibold">Ezemandu Chukwujike</p>
                            <p className="font-light text-sm">Database Administration <br/>chukwujike2000@optimusbank.com</p>
                            </div>
                        </div>

                        <div className="pl-[50px]">
                            <Box className=" flex py-[18px] px-[20px]">
                                <img className="px-[12px]" src ={icon.src} alt="icon"/>
                                Edit
                            </Box>
                        </div>
                    </div>
                </Box>
                </div>

                <div className="pb-[52px]">
                <Box className="max-h-[350px]">
                    <div className="flex items-center justify-between px-[34.5px] py-[32px]">
                        <div className="flex flex-col font-bold">
                            <span className="pb-[40px]">Role:</span>
                            <span className="pb-[40px]">Password:</span>
                            <span className="pb-[40px]">Availability:</span>
                            <span className="pb-[40px]">Created On:</span>
                            <span className="pb-[40px]">Updated on:</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="pb-[40px]">End-User</span>
                            <span className="pb-[40px]">**************</span>
                            <span className="pb-[40px]">
                                <select className="">
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                </select>
                            </span>
                            <span className="pb-[40px]">02 Jan, 2025</span>
                            <span className="pb-[40px]">02 Jan, 2025</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="pt-[51px] pb-[86px]">
                                <Box className=" flex py-[18px] px-[20px]">
                                    <img className="px-[12px]" src ={icon.src} alt="icon"/>
                                    Edit
                                </Box>
                            </div>
                            <span className="pb-[40px]">12:30PM WAT</span>
                            <span className="pb-[40px]">12:30PM WAT</span>
                        </div>
                    </div>
                </Box>
                </div>
                <button className="border border-borderActive px-[38px] py-[12px] rounded-lg ">
                    Logout
                </button>
            </div>
        </div>
    );  
}

export default Profile