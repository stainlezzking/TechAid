"use client";

import { useState } from "react";
import { TicketRow } from "@/components/TicketRow";
import Switch from "react-switch";
import AdminNavbar from "@/components/adminNavbar";
import Pagination from "@/components/pagination";


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
  {
    id: 42324,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet...",
    status: "Open",
    date: "2025-02-15",
    action: "View More",
  },
  {
    id: 42725,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet...",
    status: "Rejected",
    date: "2025-02-15",
    action: "View More",
  },
  {
    id: 42926,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet...",
    status: "Closed",
    date: "2025-02-15",
    action: "View More",
  },
  {
    id: 42627,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet...",
    status: "Overdue",
    date: "2025-02-15",
    action: "View More",
  },
  {
    id: 42228,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet...",
    status: "Open",
    date: "2025-02-15",
    action: "View More",
  },
];

const logs = [
  {
    id: 42323,
    name: "Ann Culhane",
    action: "Lorem ipsum dolor sit amet...",
    status: "Open",
    timestamp: "2025-02-15 10:00",
    updatedBy: "Ann Culhane",
  },
  {
    id: 42423,
    name: "Ann Culhane",
    action: "Lorem ipsum dolor sit amet...",
    status: "Rejected",
    timestamp: "2025-02-15 10:00",
    updatedBy: "Ann Culhane",
  },
  {
    id: 42523,
    name: "Ann Culhane",
    action: "Lorem ipsum dolor sit amet...",
    status: "Closed",
    timestamp: "2025-02-15 10:00",
    updatedBy: "Ann Culhane",
  },
  {
    id: 42623,
    name: "Ann Culhane",
    action: "Lorem ipsum dolor sit amet...",
    status: "Overdue",
    timestamp: "2025-02-15 10:00",
    updatedBy: "Ann Culhane",
  },
  {
    id: 42723,
    name: "Ann Culhane",
    action: "Lorem ipsum dolor sit amet...",
    status: "Open",
    timestamp: "2025-02-15 10:00",
    updatedBy: "Ann Culhane",
  },
];

export default function AdminDashboard() {
  const [raisedByMe, setRaisedByMe] = useState(false);
  const [isLogs, setIsLogs] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  //   const filteredRequests = requests.filter(req =>
  //     req.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  const displayedTickets = isLogs ? logs : requests;
  const displayedColumns = isLogs
    ? ["id", "name", "description", "status", "Timestamp", "Updated By"]
    : ["id", "name", "description", "status", "date opened", "Action"];
    const [rowsPerPage, setRowsPerPage]= useState(5);
    const handleChange = (e) => {
      setValue(e.target.value);
  };

  return (
    <div className="mx-[31px] font-inter bg-gray-100">
      <AdminNavbar />
      <div className="p-[50px] pb-[58px] xl:max-w-[1200px] mx-auto">
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 ${
              isLogs ? "text-gray-500" : "font-semibold border-b-2 border-black"
            }`}
            onClick={() => setIsLogs(false)}
          >
            Request History
          </button>
          <button
            className={`px-4 py-2 ${
              isLogs ? "font-semibold border-b-2 border-black" : "text-gray-500"
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
            <div className="flex content-center gap-[10px]">
              <span>All Requests</span>
              <Switch
                checked={raisedByMe}
                onChange={(checked) => setRaisedByMe(checked)}
                onColor="#00008B"
                offColor="#00008B"
                uncheckedIcon={false}
                checkedIcon={false}
              />
              <span>Raised by me</span>
            </div>

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
              {displayedTickets.slice(currentPage * rowsPerPage - rowsPerPage, currentPage * rowsPerPage).map((ticket) => (
                <TicketRow key={ticket.id} ticket={ticket} />
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center p-4 mt-4">
            <span>{currentPage * rowsPerPage - rowsPerPage + 1} - {currentPage * rowsPerPage}</span>
            <div className="flex items-center gap-2">
              <span>
                Rows per page:{" "}
                <select value={rowsPerPage} onChange={(e)=> setRowsPerPage(e.currentTarget.value)}>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </span>
             
              <div>
              <Pagination active={currentPage} lastPage={Math.ceil(displayedTickets.length/rowsPerPage)} changeActive={setCurrentPage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
