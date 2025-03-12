"use client";

import { useState } from "react";
import Box from "@/components/box";
import Button from "@/components/button";
import Confirmation from "@/public/confirmation.png";
import FilledStar from "@/public/filled-star.jpg";
import EmptyStar from "@/public/Empty-star.png";
import { usePathname } from "next/navigation";
import { FetchAuthPost } from "@/lib/server";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const Feedback = function () {
  const [rating, setRating] = useState(0);
  const [submitting, setIsSubmitting] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleStarClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleSubmit = async () => {
    if (!rating) {
      toast("please leave atleast one star, it can't be that bad");
      return;
    }
    setIsSubmitting(true);
    const response = await FetchAuthPost("/ticket/feedback", { _id: pathname.split("/")[pathname.split("/").length - 1], rating });
    if (response.unauthorized) {
      await signOut();
      return;
    }
    setIsSubmitting(false);
    if (!response.success) {
      toast.error(response.message);
      return;
    }
    setIsSubmitting(false);
    setIsOpen(true);
  };

  return (
    <div className="mx-[31px]">
      <div className="mx-auto pt-[74px] pb-[43px] xl:max-w-[1200px]">
        <div className="border-b border-black w-full ">Survey Feedback</div>
        <div className="mt-[46px] ml-[27px]">
          <Box
            className="grow shrink-0 
                 pt-[32px] pl-[36.5px] pb-[21px]"
          >
            <div className="pb-[49px]">Your ticket has been closed</div>
            <div>Tell us about your experience working with the technical support Engineer</div>
            <div className="flex justify-center pt-[53px] gap-[10px]">
              {[1, 2, 3, 4, 5].map((value) => (
                <img
                  key={value}
                  src={value <= rating ? FilledStar.src : EmptyStar.src}
                  alt={`star-${value}`}
                  onClick={() => handleStarClick(value)}
                  className="cursor-pointer w-[30px] h-[30px] transition-all duration-200 hover:scale-110"
                />
              ))}
            </div>
            <div className="pt-[27px] pb-21px] pr-[28px]">
              <Button className="ml-auto px-[12px] py-[6px]" onClick={handleSubmit}>
                {submitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </Box>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex flex-col items-center justify-center bg-white py-[25px] px-[41px] rounded-lg shadow-lg max-w-xl w-full">
            <img className="w-[120px] pb-[40px]" src={Confirmation.src} alt="confirmation" />
            <span className="text-xl font-semibold pb-[80px] text-center">Feedback Submitted Successfully</span>

            <a href="/" className="bg-primaryBlue hover:bg-primaryBlue/70 font-medium text-white rounded-md block text-center px-4 py-2 w-[40%]">
              Home
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
