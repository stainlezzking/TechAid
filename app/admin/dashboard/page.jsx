"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/Card";
import { TicketRow } from "@/components/TicketRow";

const tickets = [
  {
    id: 25021,
    name: "Faith Bernard",
    description: "Cant Receive or Send email",
    status: "Newly Assigned",
    date: "2025-02-11",
    severity: "A",
  },
  {
    id: 25012,
    name: "Ademola Adeyemo",
    description: "My phone is not turning on",
    status: "Out of Support",
    date: "2025-01-23",
    severity: "C",
  },
  {
    id: 25011,
    name: "Nneka Chikwe",
    description: "I have network issues",
    status: "Ready for closure",
    date: "2025-01-13",
    severity: "C",
  },
  {
    id: 25031,
    name: "Dorcas Olarewaju",
    description: "I need a new Display Cable",
    status: "Pending Staff",
    date: "2025-03-15",
    severity: "C",
  },
  {
    id: 25030,
    name: "Habeeb Danjuma",
    description: "Help reset password",
    status: "Troubleshooting",
    date: "2025-03-01",
    severity: "C",
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

export default function AdminDashboard() {

  const [isSurvey, setisSurvey] = useState(false);

  const displayedTickets = isSurvey ? surveyTickets : tickets;
  const displayedColumns = isSurvey
    ? ["id", "name", "description", "status", "date", "ratings"]
    : ["id", "name", "description", "status", "date", "severity"];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <br />
      <div className="flex justify-between items-center mb-6">
        <select
          className="text-2xl font-bold  rounded p-2"
          value={isSurvey ? "survey" : "admin"}
          onChange={(e) => setisSurvey(e.target.value === "survey")}
        >
          <option value="admin">Admin Dashboard</option>
          <option value="survey">Survey Dashboard</option>
        </select>

        <button className="bg-primaryBlue text-white px-4 py-2 rounded-xl">
          Create Ticket Request
        </button>
      </div>

      <div className="bg-[#F4F7FC] shadow-md rounded-lg">
        <div className="p-4 mb-6 flex items-center gap-2">
          <span className="font-semibold">Recent Activity Feed</span>
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
                <th key={col} className="p-2 capitalize">{col.replace("_", " ")}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          {displayedTickets.map((ticket) => (
              <TicketRow key={ticket.id} ticket={ticket} isSurvey={isSurvey}/>
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

      <div className="grid grid-cols-4 gap-4 mt-6">
        <Card title="Assigned Tickets" value={250} />
        <Card title="Tickets Solved" value={220} />
        <Card title="Unresolved Tickets" value={230} />
        <Card title="Average Handling Time" value="8hrs 43m" />
      </div>
    </div>
  );
}
