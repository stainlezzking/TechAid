"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/Card";
import { TicketRow } from "@/components/TicketRow";
import Switch from "react-switch";

const requests = [
  {
    id: 42323,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet...",
    status: "Open",
    date: "2025-02-15",
    action: "View More",
  },
  {
    id: 42723,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet...",
    status: "Rejected",
    date: "2025-02-15",
    action: "View More",
  },
  {
    id: 42923,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet...",
    status: "Closed",
    date: "2025-02-15",
    action: "View More",
  },
  {
    id: 42623,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet...",
    status: "Overdue",
    date: "2025-02-15",
    action: "View More",
  },
  {
    id: 42223,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet...",
    status: "Open",
    date: "2025-02-15",
    action: "View More",
  },
];

const logs = [
    { id: 42323, name: 'Ann Culhane', action: 'Lorem ipsum dolor sit amet...', status: 'Open', timestamp: '2025-02-15 10:00', updatedBy: 'Ann Culhane' },
    { id: 42423, name: 'Ann Culhane', action: 'Lorem ipsum dolor sit amet...', status: 'Rejected', timestamp: '2025-02-15 10:00', updatedBy: 'Ann Culhane' },
    { id: 42523, name: 'Ann Culhane', action: 'Lorem ipsum dolor sit amet...', status: 'Closed', timestamp: '2025-02-15 10:00', updatedBy: 'Ann Culhane' },
    { id: 42623, name: 'Ann Culhane', action: 'Lorem ipsum dolor sit amet...', status: 'Overdue', timestamp: '2025-02-15 10:00', updatedBy: 'Ann Culhane' },
    { id: 42723, name: 'Ann Culhane', action: 'Lorem ipsum dolor sit amet...', status: 'Open', timestamp: '2025-02-15 10:00', updatedBy: 'Ann Culhane' },
  ];

export default function AdminDashboard() {
  const [raisedByMe, setRaisedByMe] = useState(false);
  const [isLogs, setIsLogs] = useState(false);

  //   const filteredRequests = requests.filter(req =>
  //     req.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  const displayedTickets = isLogs ? logs : requests;
  const displayedColumns = isLogs
    ? [
        "id",
        "name",
        "description",
        "status",
        "Timestamp",
        "Updated By",
      ]
    : [
        "id", 
        "name", 
        "description", 
        "status", 
        "date opened",
         "Action"
        ];

    
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <br />
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 ${
            isLogs
              ? "text-gray-500"
              : "font-semibold border-b-2 border-black"
          }`}
          onClick={() => setIsLogs(false)}
        >
          Request History
        </button>
        <button
          className={`px-4 py-2 ${
            isLogs
              ? "font-semibold border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setIsLogs(true)}
        >
          Logs
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
          <div className="flex content-center">
            <span>Raised by me</span>
            <Switch
              checked={raisedByMe}
              onChange={(checked) => setRaisedByMe(checked)}
              onColor="#00008B"
              offColor="#00008B"
            />
            <span>Raised by me</span>
          </div>

          <button className="bg-primaryBlue text-white px-4 py-2 rounded-xl">
            Create Ticket Request
          </button>
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
              <TicketRow key={ticket.id} ticket={ticket} />
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
