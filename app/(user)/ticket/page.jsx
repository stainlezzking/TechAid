"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Box from "@/components/box";
import Input from "@/components/input";
import Button from "@/components/button";
import Phone from "@/public/phone.png";
import Email from "@/public/email.png";

const Ticket = function() {
    const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

    return (
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[26px] xl:max-w-[1200px]">
                <form>
                    <div className="pb-[22px]">
                        <Box className="pl-[60px] pr-[94px] py-[24px] w-full">
                            <div className="font-medium">
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
                        <Box className="pl-[70px] pr-[97px] py-[25px]">
                        <div className="flex flex-col">
                                <label className="pb-[17px]">Title:</label>
                                <Input 
                                    className="py-[16px] border-none shadow-md"
                                    type="text" 
                                    placeholder="I have isssues logging into my computer">
                                </Input>

                                <label className="pt-[35px] pb-[15px]">Description:</label>
                                <textarea className="rounded-lg shadow-md px-[5px]" placeholder="Describe your issue in detail"></textarea>

                                <div className="flex pt-[35px] pb-[35px] justify-between">
                                    <div>
                                        <span className="pr-[10px]">Select Category:</span>
                                        <select className="px-[20px] py-[5px] rounded-md shadow-md">
                                            <option>-----None-----</option>
                                        </select>
                                    </div>
                                   <div>
                                        <span className="pr-[10px]">Select Priority Level:</span>
                                        <select className="px-[20px] py-[5px] rounded-md shadow-md">
                                            <option value="">-----None-----</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                        </select>
                                   </div>
                                </div>

                                <div className="flex flex-col">
                                    <span className="font-semibold">Preferred Contact method</span>
                                    <span className="pb-[10px]">How do you want us to connect with you?</span>
                                    <div className="flex justify-between">
                                        <div className="flex gap-[44px]">
                                            <label 
                                                className={`flex px-[20px] py-[5px] rounded-md cursor-pointer transition-all duration-200 ${
                                                    selectedValue === 'Phone/Teams' ? 'bg-primaryBlue text-white' : 'bg-white shadow-md rounded-b-lg'
                                                  }`}
                                                // className="flex shadow-md rounded-b-lg px-[20px] py-[5px] cursor-pointer 
                                                // ${selectedValue === 'Phone/Teams call' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-300'}"
                                                htmlFor="phone/teams call">
                                                <img className="pr-[5px]" src={Phone.src} alt="phone"/>
                                                Phone/Teams Call
                                            </label>
                                            <input 
                                                className="absolute opacity-0"
                                                type="radio" 
                                                id="phone/teams call" 
                                                name="Contact"
                                                value="Phone/Teams"
                                                onChange={handleChange}
                                                checked={selectedValue === 'Phone/Teams call'}/>

                                            <label 
                                                className={`flex px-[20px] py-[5px] rounded-md cursor-pointer transition-all duration-200 ${
                                                    selectedValue === 'Email/Teams' ? 'bg-primaryBlue text-white' : 'bg-white shadow-md rounded-b-lg'
                                                  }`}
                                                // className="flex shadow-md rounded-b-lg px-[20px] py-[5px] cursor-pointer" 
                                                htmlFor="email/teams chat">
                                                <img className="pr-[5px]" src={Email.src} alt="email"/>
                                                Email/Teams Chat
                                            </label>
                                            <input 
                                                className="absolute opacity-0"
                                                type="radio" 
                                                id="email/teams chat" 
                                                name="Contact"
                                                value="Email/Teams"
                                                onChange={handleChange}
                                                checked={selectedValue === 'Email/Teams chat'}/>
                                        </div>
                                        <div>
                                            <Button className="px-[20px] py-[5px]">Submit</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Ticket