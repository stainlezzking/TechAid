"use client";

import { useState } from "react";
import { TicketRow } from "@/components/admin/TicketRow";
import Pagination from "@/components/pagination";
import Box from "@/components/box";
import Link from "next/link";
import Switch from "react-switch";
import Icon from "@/public/admin/icon.svg";

// Sample ticket data for the admin dashboard
const tickets = [
  {
    id: 25021,
    name: "Faith Bernard",
    description: "Cant Receive or Send email",
    status: "Troubleshooting",
    date: "2025-02-11",
    engineer: "David Eberechukwu",
  },
  {
    id: 25012,
    name: "Ademola Adeyemo",
    description: "My phone is not turning on",
    status: "Closed",
    date: "2025-01-23",
    engineer: "Olawale Isijola",
  },
  {
    id: 25011,
    name: "Nneka Chikwe",
    description: "I have network issues",
    status: "Out of Support",
    date: "2025-01-13",
    engineer: "Oladepo Adebola",
  },
  {
    id: 25031,
    name: "Dorcas Olarewaju",
    description: "I need a new Display Cable",
    status: "Unassigned",
    date: "2025-03-15",
    engineer: "Gabriel Olayiwole",
  },
  {
    id: 25030,
    name: "Habeeb Danjuma",
    description: "Help reset password",
    status: "Troubleshooting",
    date: "2025-03-01",
    engineer: "Oladepo Adebola",
  },
  {
    id: 25015,
    name: "Nneka Chikwe",
    description: "I have network issues",
    status: "Out of Support",
    date: "2025-01-13",
    engineer: "Oladepo Adebola",
  },
  {
    id: 25035,
    name: "Dorcas Olarewaju",
    description: "I need a new Display Cable",
    status: "Unassigned",
    date: "2025-03-15",
    engineer: "Gabriel Olayiwole",
  },
  {
    id: 25033,
    name: "Habeeb Danjuma",
    description: "Help reset password",
    status: "Troubleshooting",
    date: "2025-03-01",
    engineer: "Oladepo Adebola",
  },
];

// Sample ticket data for Survey Feedback
const surveyTickets = [
  {
    id: 25021,
    name: "Gabriel Olayiwole",
    description: "Shared mailbox is missing",
    status: "Closed",
    date: "2025-02-11",
    ratings: "★★★★★",
  },
  {
    id: 25012,
    name: "Samson Raymond",
    description: "Cannot find any of my saved documents",
    status: "Closed",
    date: "2025-02-23",
    ratings: "★★★★★",
  },
  {
    id: 25011,
    name: "Chibuzor Emmanuel",
    description: "Where can i save my files",
    status: "Closed",
    date: "2025-02-13",
    ratings: "★★★★★",
  },
  {
    id: 25031,
    name: "Priscilla Onome",
    description: "Charger not working",
    status: "Closed",
    date: "2025-02-15",
    ratings: "★★★★☆",
  },
  {
    id: 25030,
    name: "Ibrahim Akintokunbo",
    description: "Monitor issues",
    status: "Closed",
    date: "2025-02-01",
    ratings: "★★★☆☆",
  },
];

// Sample ticket data for the queue
const queueTickets = [
  {
    id: 25031,
    name: "Dorcas Olarewaju",
    description: "I need a new Display Cable",
    status: "Unassigned",
    date: "2025-03-01",
    engineer: null,
  },
  {
    id: 25032,
    name: "Habeeb Danjuma",
    description: "Help reset password",
    status: "Unassigned",
    date: "2025-03-01",
    engineer: null,
  },
  {
    id: 25033,
    name: "Dorcas Olarewaju",
    description: "I need a new Display Cable",
    status: "Unassigned",
    date: "2025-03-15",
    engineer: null,
  },
  {
    id: 25034,
    name: "Habeeb Danjuma",
    description: "Help reset password",
    status: "Unassigned",
    date: "2025-03-15",
    engineer: null,
  },
  {
    id: 25015,
    name: "Ademola Adeyemo",
    description: "My phone is not turning on",
    status: "Unassigned",
    date: "2025-03-15",
    engineer: null,
  },
  {
    id: 25016,
    name: "Nneka Chikwe",
    description: "I have network issues",
    status: "Out of Support",
    date: "2025-01-13",
    engineer: "Olawale Isijiola",
  },
  {
    id: 25017,
    name: "Ademola Adeyemo",
    description: "My phone is not turning on",
    status: "Closed",
    date: "2025-01-23",
    engineer: "Oladepo Adebola",
  },
  {
    id: 25028,
    name: "Faith Bernard",
    description: "Can't Receive or Send email",
    status: "Troubleshooting",
    date: "2025-02-11",
    ratings: "David Eberechukwu",
  },
];

export default function AdminDashboard() {
  const [isShowing, setisShowing] = useState("admin");

  const displayedTickets =
    isShowing === "admin"
      ? tickets
      : isShowing == "survey"
      ? surveyTickets
      : queueTickets;
  const displayedColumns =
    isShowing === "admin"
      ? ["id", "name", "description", "status", "date", "engineer"]
      : isShowing == "survey"
      ? ["id", "name", "description", "status", "date", "ratings"]
      : ["id", "name", "description", "status", "date opened", "engineer"];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isQueue, setisQueue] = useState(true);

  return (
    <div className="mx-[31px] font-inter bg-gray-100">
      <div className="p-[50px] pb-[58px] xl:max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <select
            className="text-2xl font-bold  rounded p-2"
            // value={isSurvey ? "survey" : "admin"}
            onChange={(e) => setisShowing(e.target.value)}
          >
            <option value="admin">Admin Dashboard</option>
            <option value="survey">Survey Dashboard</option>
            <option value="queue">Queue</option>
          </select>
        </div>

        <div className="bg-[#F4F7FC] shadow-md rounded-lg">
          <div className="p-4 mb-6 flex items-center gap-2">
            <span className="font-semibold">Recent Activity Feed</span>
            <button className="border p-2 rounded bg-gray-200">
              <img src={Icon.src} alt="Filter" className="w-4 h-4" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded flex-1"
            />
            <select className="border p-2 rounded bg-gray-200">
              <option>Sort by</option>
            </select>

            {
              isShowing === "queue" ? (<div className="flex content-center gap-[10px] mx-[10px]">
              <span>Queue Auto Assign</span>
              <Switch
                checked={isQueue}
                onChange={(checked) => setisQueue(checked)}
                onColor="#00008B"
                offColor="#00008B"
                uncheckedIcon={false}
                checkedIcon={false}
              />
            </div>) : null
            }
            
          </div>

          <table className="w-full bg-white overflow-hidden ">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-2">
                  <input type="checkbox" />
                </th>
                {displayedColumns.map((col) => (
                  <th key={col} className="p-2 capitalize">
                    {col.replace("_", " ")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedTickets
                .slice(
                  currentPage * rowsPerPage - rowsPerPage,
                  currentPage * rowsPerPage
                )
                .map((ticket) => (
                  <TicketRow key={ticket.id} ticket={ticket} />
                ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center p-4 mt-4">
            <span>{currentPage * rowsPerPage - rowsPerPage + 1} - {currentPage * rowsPerPage}</span>
            <div className="flex items-center gap-2">
              <span>
                Rows per page:{" "}
                <select
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(e.currentTarget.value)}
                >
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </span>
              <div>
                <Pagination
                  active={currentPage}
                  lastPage={Math.ceil(displayedTickets.length / rowsPerPage)}
                  changeActive={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-10 mt-10">
          <div className="flex gap-10 ">
            <select className="border p-2 rounded bg-gray-200">
              <option value={""}>Open</option>
              <option value={""}>Closed</option>
              <option value={""}>Not Assigned</option>
            </select>
            <select className="border p-2 rounded bg-gray-200">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
            <select className="border p-2 rounded bg-gray-200">
              <option>All</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
            <select className="border p-2 rounded bg-gray-200">
              <option>Last Updated</option>
              <option>Last Created</option>
            </select>
          </div>
        </div>

        <div className="flex py-[40px] gap-[69px]">
          <Box className="flex flex-col grow shrink-0 aspect-[1] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Assigned</div>
            <div className="font-bold text-xl">250</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Total Solved</div>
            <div className="font-bold text-xl">200</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Unresolved Tickets</div>
            <div className="font-bold text-xl">140</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Average Handling Time</div>
            <div className="font-bold text-xl">8hrs 43m</div>
          </Box>
        </div>
      </div>
    </div>
  );
}
