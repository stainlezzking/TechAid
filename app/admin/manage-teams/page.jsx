"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/Card";
import { TicketRow } from "@/components/TicketRow";


const teamMembers = [
  {
    id: 42323,
    name: "Ann Culhane",
    role: "Software Engineer",
    status: "Offline",
    tickets: 15,
  },
  {
    id: 42324,
    name: "John Doe",
    role: "System Administrator",
    status: "Busy",
    tickets: 12,
  },
  {
    id: 42325,
    name: "Jane Smith",
    role: "Network Engineer",
    status: "Active",
    tickets: 18,
  },
  {
    id: 42326,
    name: "Robert Brown",
    role: "Backend Developer",
    status: "Busy",
    tickets: 9,
  },
  {
    id: 42327,
    name: "Emily Davis",
    role: "Auditor",
    status: "Active",
    tickets: 7,
  },
  {
    id: 42327,
    name: "Emily Davis",
    role: "Auditor",
    status: "Leave",
    tickets: 7,
  },
];

const groups = [
  {
    id: 101,
    name: "IT Operations",
    teamLead: "Adeola Okafor",
    membersCount: 12,
  },
  {
    id: 102,
    name: "IT Infrastructure",
    teamLead: "Chinedu Obi",
    membersCount: 15,
  },
  {
    id: 103,
    name: "Business Solutions",
    teamLead: "Funmi Adeyemi",
    membersCount: 8,
  },
  {
    id: 104,
    name: "Service Management",
    teamLead: "Tunde Adebayo",
    membersCount: 6,
  },
  { id: 105, name: "IT Governance", teamLead: "Ngozi Eze", membersCount: 10 },
];

export default function AdminDashboard() {
  const [isGroups, setIsGroups] = useState(false);

  //   const filteredRequests = requests.filter(req =>
  //     req.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  const displayedTickets = isGroups ? groups : teamMembers;
  const displayedColumns = isGroups
    ? ["id", "name", "team lead", "membersCount"]
    : ["id", "name", "role", "status", "tickets"];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <br />
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 ${
            isGroups ? "text-gray-500" : "font-semibold border-b-2 border-black"
          }`}
          onClick={() => setIsGroups(false)}
        >
          Team Members
        </button>
        <button
          className={`px-4 py-2 ${
            isGroups ? "font-semibold border-b-2 border-black" : "text-gray-500"
          }`}
          onClick={() => setIsGroups(true)}
        >
          Groups
        </button>
      </div>
      <div className="bg-[#F4F7FC] shadow-md rounded-lg">
        <div className="p-4 mb-6 flex items-center gap-5">
          <button className="border p-2 rounded bg-gray-200">
            <img src="/icon.svg" alt="Filter" className="w-4 h-4" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded flex-1"
          />
          <select className="border p-2 rounded bg-gray-200">
            <option>Sort by</option>
          </select>
        </div>
        <table className="w-full bg-white overflow-hidden">
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


                {displayedTickets.map((ticket) => (
                    <TicketRow key={ticket.id} ticket={ticket} option={isGroups ? 2 : 1} />
                ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-4 mt-4">
          <span>1 - 10</span>
          <div className="flex items-center gap-2">
            <span>
              Rows per page:{" "}
              <select>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>50</option>
              </select>
            </span>
            <button className="border border-[#868FA0] bg-white p-2 rounded bg-gray-200 h-10 w-10">
              &lt;
            </button>
            <span>1/1</span>
            <button className="border border-[#868FA0] bg-white p-2 rounded bg-gray-200 h-10 w-10">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
