import { format } from "date-fns";

const UserTicket = ({ ticket }) => {
  return (
    <>
      <div className="border-b border-black w-full ">{ticket.title}</div>
      <div className="flex justify-between py-[15px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col">
            <span className="font-extralight">Ticket Number</span>
            <span className="font-semibold text-[#061B2E]">{ticket.displayId}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extralight">Assigned to</span>
            <span className="font-semibold text-[#061B2E]">{ticket.assignedTo.fullname}</span>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col">
            <span className="font-extralight">Phone Number</span>
            <span className="font-semibold text-[#061B2E]">0905-909-3724</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extralight">Submitted</span>
            <span className="font-semibold text-[#061B2E]">{format(ticket.createdAt, "MMM dd, yyyy HH:mm")}</span>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col">
            <span className="font-extralight">Status</span>
            <span className="text-[#061B2E]">{ticket.status}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extralight">Criticality</span>
            <span className="text-[#061B2E]">{ticket.priority}</span>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] max-w-[298px]">
          <div className="flex flex-col">
            <span className="font-extralight">Description</span>
            <span className="text-[#061B2E]" tyle={{ whiteSpace: "pre-line" }}>
              {ticket.description}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTicket;
