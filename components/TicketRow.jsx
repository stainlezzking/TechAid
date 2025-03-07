import React from "react";

const statusStyles = {
  Open: "text-green-700 bg-green-100 px-3 py-1 rounded-full font-medium",
  Rejected: "text-red-700 bg-red-100 px-3 py-1 rounded-full font-medium",
  Closed: "text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full font-medium",
  Overdue: "text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full font-medium",
  Offline: "text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full font-medium",
  Busy: "text-red-700 bg-red-100 px-3 py-1 rounded-full font-medium",
  Active: "text-green-700 bg-green-100 px-3 py-1 rounded-full font-medium",
  Leave: "text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full font-medium",
};

export const TicketRow = ({ ticket, option = 0 }) => {
  const columns = Object.keys(ticket);

  return (
    <tr className="even:bg-[#EEEEEE] ">
      <td className="p-2">
        <input type="checkbox" />
      </td>
      {columns.map((col) => (
        <td key={col} className="p-2">
          {col.toLowerCase() === "status" ? (
            <span
              className={`text-sm font-medium ${
                statusStyles[ticket[col]] ||
                "bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
              }`}
            >
              {ticket[col]}
            </span>
          ) : col.toLowerCase() === "ratings" ? (
            <span
              dangerouslySetInnerHTML={{
                __html: ticket[col].replace(/★/g, "&#9733;"),
              }}
            ></span>
          ) : (
            ticket[col]
          )}
        </td>
      ))}
      {option === 1 ? (
        <td className="p-2 text-blue-600 cursor-pointer">
          <a href="#" className="hover:underline">
            Edit Role / Change Department
          </a>
        </td>
      ) : option === 2 ? (
        <td className="p-2 text-blue-600 cursor-pointer">
          <a href="#" className="hover:underline">
            Edit / Manage
          </a>
        </td>
      ) : null}
      {option == 2 ? <td className="p-2 text-blue-600 cursor-pointer">+</td>: null}
    </tr>
  );
};
