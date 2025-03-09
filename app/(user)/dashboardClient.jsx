"use client";
import DefaultSelect from "@/components/form/defaultSelect";
import TicketPreview from "@/components/ticketpreview";
import { priorityOptions, sortingOptions, statusOptions } from "@/lib/datas";
import { useState, useMemo } from "react";
import { compareDesc, parseISO } from "date-fns";

const DashboardClient = ({ tickets: ticks }) => {
  console.log(ticks);
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("Last updated");

  const filteredTickets = useMemo(() => {
    let filtered = [...ticks];

    if (statusFilter !== "all") {
      filtered = filtered.filter((ticket) => ticket.status === statusFilter.toLowerCase());
    }

    if (priorityFilter !== "all") {
      filtered = filtered.filter((ticket) => ticket.priority.toLowerCase() === priorityFilter.toLowerCase());
    }

    if (sortBy === "Last updated") {
      filtered.sort((a, b) => compareDesc(parseISO(a.updatedAt), parseISO(b.updatedAt)));
    } else if (sortBy === "Last created") {
      filtered.sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)));
    }

    return filtered;
  }, [statusFilter, priorityFilter, sortBy]);

  return (
    <>
      <div className="flex items-center justify-between pb-[30px]">
        <p className="text-lg font-medium">Active Tickets</p>
        <div className="flex gap-7">
          <DefaultSelect options={statusOptions} onChange={(e) => setStatusFilter(e.target.value)} />
          <DefaultSelect options={priorityOptions} onChange={(e) => setPriorityFilter(e.target.value)} />
          <DefaultSelect options={sortingOptions} onChange={(e) => setSortBy(e.target.value)} />
        </div>
      </div>

      <div className="flex justify-between gap-y-[16px] gap-x-[32px] flex-wrap">
        {filteredTickets.length ? (
          filteredTickets.map(({ title, _id, priority, createdAt, updatedAt, status }) => (
            <TicketPreview title={title} _id={_id} key={_id} priority={priority} createdAt={createdAt} updatedAt={updatedAt} status={status} />
          ))
        ) : (
          <div className="flex items-center justify-center h-1/3 space-y-3 flex-col w-full py-5">
            <h1>You don't have any tickets...</h1>
            <svg className="w-20" viewBox="0 0 24 24" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardClient;
