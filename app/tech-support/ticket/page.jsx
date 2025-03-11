"use client";

import { useState } from "react";
import Box from "@/components/box";
import Summary from "@/components/summary";
import Details from "@/components/details";
import SurveyFeedbacks from "@/components/surveyfeedback";

const Ticket = function () {
  const [currentSection, setCurrentSection] = useState("Summary"); // Default section

  const handleButtonClick = (section) => {
    setCurrentSection(section); // Set the active section based on button click
  };

  const renderSection = () => {
    switch (currentSection) {
      case "Summary":
        return <Summary />;
      case "Details":
        return <Details />;
      case "Attachments":
        return <Attachments />;
      case "Survey Feedbacks":
        return <SurveyFeedbacks />;
      case "Assign":
        return <Assign />;
      case "Close Ticket":
        return <CloseTicket />;
      default:
        return <Summary />;
    }
  };

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
                                <button 
                                    onClick={() => handleButtonClick("Summary")}
                                    className={`${
                                        currentSection === "Summary" ? "border-b-2 border-primaryBlue" : ""
                                      }`}
                                    >
                                      Summary
                                </button>
                                <button 
                                  onClick={() => handleButtonClick("Details")}
                                  className={`${
                                    currentSection === "Details" ? "border-b-2 border-primaryBlue" : ""
                                  }`}
                                  >
                                    Details
                                </button>
                                <button>Attachments</button>
                                <button 
                                  onClick={() => handleButtonClick("Survey Feedbacks")}
                                  className={`${
                                    currentSection === "Survey Feedbacks" ? "border-b-2 border-primaryBlue" : ""
                                  }`}
                                  >
                                    Survey Feedbacks(0)
                                </button>
                                <button>Assign</button>
                                <button>Close Ticket</button>
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
                <div className="pt-[23px]">{renderSection()}</div>
            </div>
        </div>
    );
}

export default Ticket;