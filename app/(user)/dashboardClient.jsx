"use client";
import DefaultSelect from "@/components/form/defaultSelect";
import TicketPreview from "@/components/ticketpreview";
import { priorityOptions, sortingOptions, statusOptions } from "@/lib/datas";
const DashboardClient = () => {
  const tickets = [
    { title: "Login Issue", id: "ticket_001", priority: "High", createdAt: new Date("2025-03-01T10:30:00Z"), status: "open" },
    { title: "Network Downtime", id: "ticket_002", priority: "Critical", createdAt: new Date("2025-03-02T12:15:00Z"), status: "in-progress" },
    { title: "Software Update Request", id: "ticket_003", priority: "Medium", createdAt: new Date("2025-03-03T08:45:00Z"), status: "open" },
    { title: "Printer Not Working", id: "ticket_004", priority: "Low", createdAt: new Date("2025-03-04T14:20:00Z"), status: "closed" },
  ];
  return (
    <>
      <div className="flex items-center justify-between pb-[30px] ">
        <p className="text-l">Active Tickets</p>
        <div className=" flex gap-7">
          <DefaultSelect options={statusOptions} />
          <DefaultSelect options={priorityOptions} />
          <DefaultSelect options={sortingOptions} />
        </div>
      </div>

      <div className="flex justify-between gap-y-[16px] gap-x-[32px] flex-wrap">
        {tickets.map(({ title, id, priority, createdAt, status }) => (
          <TicketPreview title={title} key={id} priority={priority} createdAt={createdAt} status={status} />
        ))}
      </div>
    </>
  );
};

export default DashboardClient;
