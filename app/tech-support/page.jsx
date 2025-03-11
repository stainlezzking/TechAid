"use client";

import { useState } from "react";
import TechNavbar from "@/components/techNavbar";
import Button from "@/components/button";
import Search from "@/components/search";
import Box from "@/components/box";
import Pagination from "@/components/pagination";
import newTable from "@/components/newTable";
import Filter from "@/public/filter.png";

const TechHome = function () {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  // const headers =[{label:"Id", key:"id"}, {label: "Name", key: "name"}, {label: "Description", key: "description", isLink: true, linkUrl : (row) => `/view`}, {label: "Status", key: "status"}, {label: "Date Opened", key: "dateOpened"}, {label: "Criticality", key: "criticality"}]
  const headers = [
    "Id",
    "Name",
    "Description",
    "Status",
    "Date Opened",
    "Criticality",
  ];

  const data = [
    {
      id: 25021,
      name: "Faith Bernard",
      description: "Can't Receive or Send email",
      status: "Newly Assigned",
      dateOpened: "2025-02-11",
      criticality: "High",
    },
    {
      id: 25012,
      name: "Ademola Adeyemi",
      description: "my phone is not turning on",
      status: "Out of Support",
      dateOpened: "2025-01-23",
      criticality: "Low",
    },
    {
      id: 25011,
      name: "Nneka Chikwe",
      description: "I have network issues",
      status: "Ready for closure",
      dateOpened: "2025-01-13",
      criticality: "Medium",
    },
    {
      id: 25031,
      name: "Dorcas Olarewaju",
      description: "I need a new Display Cable",
      status: "Pending Staff",
      dateOpened: "2025-03-15",
      criticality: "Low",
    },
    {
      id: 25030,
      name: "Habeeb Danjuma",
      description: "Help reset password",
      status: "Troubleshooting",
      dateOpened: "2025-03-01",
      criticality: "Low",
    },
    {
      id: 25021,
      name: "Faith Bernard",
      description: "Can't Receive or Send email",
      status: "Newly Assigned",
      dateOpened: "2025-02-11",
      criticality: "High",
    },
    {
      id: 25012,
      name: "Ademola Adeyemi",
      description: "my phone is not turning on",
      status: "Out of Support",
      dateOpened: "2025-01-23",
      criticality: "Low",
    },
    {
      id: 25011,
      name: "Nneka Chikwe",
      description: "I have network issues",
      status: "Ready for closure",
      dateOpened: "2025-01-13",
      criticality: "Medium",
    },
    {
      id: 25031,
      name: "Dorcas Olarewaju",
      description: "I need a new Display Cable",
      status: "Pending Staff",
      dateOpened: "2025-03-15",
      criticality: "Low",
    },
    {
      id: 25030,
      name: "Habeeb Danjuma",
      description: "Help reset password",
      status: "Troubleshooting",
      dateOpened: "2025-03-01",
      criticality: "Low",
    },
    {
      id: 25021,
      name: "Faith Bernard",
      description: "Can't Receive or Send email",
      status: "Newly Assigned",
      dateOpened: "2025-02-11",
      criticality: "High",
    },
    {
      id: 25012,
      name: "Ademola Adeyemi",
      description: "my phone is not turning on",
      status: "Out of Support",
      dateOpened: "2025-01-23",
      criticality: "Low",
    },
    {
      id: 25011,
      name: "Nneka Chikwe",
      description: "I have network issues",
      status: "Ready for closure",
      dateOpened: "2025-01-13",
      criticality: "Medium",
    },
    {
      id: 25031,
      name: "Dorcas Olarewaju",
      description: "I need a new Display Cable",
      status: "Pending Staff",
      dateOpened: "2025-03-15",
      criticality: "Low",
    },
    {
      id: 25030,
      name: "Habeeb Danjuma",
      description: "Help reset password",
      status: "Troubleshooting",
      dateOpened: "2025-03-01",
      criticality: "Low",
    },
  ];

  return (
    <div className="mx-[31px]">
      <TechNavbar />
      <div className="p-[50px] pb-[58px] xl:max-w-[1200px] mx-auto">
        <div className="flex justify-between pb-[33px]">
          <select className="text-xl font-medium">
            <option value="Engineer">Engineer Dashboard</option>
            <option value="Survey">Survey Dashboard</option>
          </select>
          <Button className="p-[12px] w-[200px]">Create Ticket request</Button>
        </div>
        <div className="bg-[#F4F7FC] rounded-t-xl">
          <div className="flex items-center justify-between py-[15px]">
            <div className="flex items-center gap-[16px]">
              <span className="pl-[19px]">Assigned Tickets</span>
              <img src={Filter.src} />
              <Search>Search</Search>
            </div>
            <div className="pr-[115px]">
              <select className="border border-borderStroke rounded-md px-[12px] py-[6px]">
                <option value="">Sort By</option>
                <option value="date">date</option>
                <option value="Status">Status</option>
                <option value="Priority Level">Priority Level</option>
                <option value="Category">Category</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <newTable>
            headers={headers}
            data={data}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
          </newTable>
        </div>
        <div className="flex justify-between font-medium px-[20px] py-[13px] bg-[#F4F7FC]">
          <div>1-{rowsPerPage}</div>
          <div className="flex gap-[20px]">
            <div>
              <span>Rows per Page: </span>
              <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(e.currentTarget.value)}
              >
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
            <div>
              <Pagination
                active={currentPage}
                lastPage={Math.ceil(data.length / rowsPerPage)}
                changeActive={setCurrentPage}
              />
            </div>
          </div>
        </div>
        <div className="flex py-[58px] gap-[69px]">
          <Box className="flex flex-col grow shrink-0 aspect-[1] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Assigned</div>
            <div className="font-bold text-xl">250</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Total Solved</div>
            <div className="font-bold text-xl">200</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Survey Feedback</div>
            <div className="font-bold text-xl">140</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Total in Progress</div>
            <div className="font-bold text-xl">50</div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TechHome;
