"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@/components/box";
import Input from "@/components/input";
import Button from "@/components/button";
import Phone from "@/public/phone.png";
import Email from "@/public/email.png";
import Confirmation from "@/public/confirmation.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FetchAuthPost } from "@/lib/server";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const Ticket = function () {
  const [selectedValue, setSelectedValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async function (data) {
    if (!selectedValue) return;
    const newTicket = { ...data, contactMethod: selectedValue };

    const response = await FetchAuthPost("/ticket/new", newTicket);

    if (response.unauthorized) {
      return signOut("/logout");
    }

    if (!response.success) {
      toast.error(response.message, {
        position: "top-right",
      });
      return;
    }
    toast.success("Successful", { position: "top-right" });
    setIsOpen(response.ticket._id);
  };

  return (
    <div className="mx-[31px]">
      <div className="mx-auto pt-[26px] xl:max-w-[1200px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-[22px]">
            <Box className="pl-[60px] pr-[94px] py-[24px] w-full">
              <div className="font-medium">Frequently encountered issues</div>
              <div className="flex flex-col">
                <label className="font-extralight pb-[10px]">Tell us about your problem so we can get you the right help and support</label>

                <Input className="py-[16px] border-none" type="text" placeholder="Example: I have issues logging into my computer"></Input>
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
                  placeholder="I have issues logging into my computer"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}

                <label className="pt-[35px] pb-[15px]">Description:</label>
                <textarea
                  className="rounded-lg shadow-md px-[5px]"
                  placeholder="Describe your issue in detail"
                  {...register("description", { required: "Description is required" })}
                />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                <div className="flex pt-[35px] pb-[35px] justify-between">
                  <div>
                    <span className="pr-[10px]">Select Category:</span>
                    <select className="px-[20px] py-[5px] rounded-md shadow-md" {...register("category", { required: "Category is required" })}>
                      <option value="">-----None-----</option>
                      <option value="Software">Software</option>
                      <option value="Hardware">Hardware</option>
                      <option value="Network">Network</option>
                    </select>
                    {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                  </div>
                  <div>
                    <span className="pr-[10px]">Select Priority Level:</span>
                    <select className="px-[20px] py-[5px] rounded-md shadow-md" {...register("priority", { required: "Priority is required" })}>
                      <option value="">-----None-----</option>
                      <option value="low">Low</option>
                      <option value="mid">Medium</option>
                      <option value="high">Critical</option>
                    </select>
                    {errors.priority && <p className="text-red-500">{errors.priority.message}</p>}
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold">Preferred Contact method</span>
                  <span className="pb-[20px]">How do you want us to connect with you?</span>
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="flex gap-[44px]">
                        <div className="relative">
                          <label
                            className={`flex px-[20px] py-[5px] relative rounded-md cursor-pointer transition-all duration-200 ${
                              selectedValue === "Phone/Teams" ? "bg-primaryBlue text-white" : "bg-white shadow-md rounded-b-lg"
                            }`}
                            htmlFor="phone/teams call"
                          >
                            <img className="pr-[5px]" src={Phone.src} alt="phone" />
                            Phone/Teams Call
                          </label>
                          <input
                            className="absolute top-0 left-0 opacity-0 w-full h-full z-20"
                            type="radio"
                            id="phone/teams call"
                            name="Contact"
                            value="Phone/Teams"
                            onChange={(e) => setSelectedValue(e.target.value)}
                            checked={selectedValue === "Phone/Teams"}
                          />
                        </div>
                        <div className="relative">
                          <label
                            className={`flex px-[20px] py-[5px] relative rounded-md cursor-pointer transition-all duration-200 ${
                              selectedValue === "Email/Teams" ? "bg-primaryBlue text-white" : "bg-white shadow-md rounded-b-lg"
                            }`}
                            htmlFor="email/teams chat"
                          >
                            <img className="pr-[5px]" src={Email.src} alt="email" />
                            Email/Teams Chat
                          </label>
                          <input
                            className="absolute top-0 left-0 opacity-0 w-full h-full z-20 "
                            type="radio"
                            id="email/teams chat"
                            name="Contact"
                            value="Email/Teams"
                            onChange={(e) => setSelectedValue(e.target.value)}
                            checked={selectedValue === "Email/Teams"}
                          />
                        </div>
                      </div>
                      {!selectedValue && <p className="text-red-500">Please Select a Preferred contact method</p>}
                    </div>
                    <div>
                      <Button className="px-[20px] py-[5px]" type="submit">
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </form>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col items-center justify-center bg-white py-[25px] px-[41px] rounded-lg shadow-lg max-w-xl w-full">
              <img className="w-[120px] pb-[40px]" src={Confirmation.src} alt="confirmation" />
              <span className="text-xl font-semibold pb-[80px] text-center">Your ticket with id 2502110002 has been successfully created.</span>

              <Link
                href={"/ticket/" + isOpen}
                className="bg-primaryBlue hover:bg-primaryBlue/70 font-medium text-white rounded-md block text-center px-4 py-2 w-[40%]"
              >
                Let's Start!
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticket;
