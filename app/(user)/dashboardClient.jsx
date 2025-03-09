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
          <div className="bg-muted flex items-center justify-center h-[250px] space-y-3 flex-col w-full py-5">
            <h1>You don't have any tickets...</h1>
            <svg className="w-10" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M618.666667 490.666667H405.333333L149.333333 192h725.333334zM618.666667 810.666667l-213.333334 128V490.666667h213.333334zM885.333333 192h-746.666666C121.6 192 106.666667 177.066667 106.666667 160S121.6 128 138.666667 128h746.666666c17.066667 0 32 14.933333 32 32S902.4 192 885.333333 192z"
                  fill="#000000"
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
