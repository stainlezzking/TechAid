import authOptions from "@/auth";
import Box from "@/components/box";
import ErrorComponent from "@/components/error";
import AddMessage from "@/components/addMessage";
import { fetchGet } from "@/lib/server";
import { format } from "date-fns";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ClientTicketPage from "./clientVersion";

const View = async function ({ params }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.token) {
    return redirect("/logout");
  }
  const { id } = await params;
  const response = await fetchGet("/ticket/" + id);

  if (response.unauthorized) {
    return redirect("/logout");
  }
  if (!response.success) {
    return <ErrorComponent message={response.message} />;
  }
  if (!response.data) {
    return <ErrorComponent message={"Ticket Not Found"} />;
  }
  const { data: ticket } = response;
  return (
    <div className="mx-[31px]">
      <div className="mx-auto pt-[40px] pb-[43px] xl:max-w-[1200px]">
        <div className="border-b border-black w-full ">{ticket.title}</div>
        <div className="flex justify-between py-[15px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col">
              <span className="font-extralight">Ticket Number</span>
              <span className="font-semibold text-[#061B2E]">{format(new Date(), "yyMMdd") + ticket._id.replace(/[^0-9]/g, "").substring(0, 4)}</span>
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
        <ClientTicketPage id={id} notes={ticket.notes} userId={session.user.id} />
      </div>
    </div>
  );
};

export default View;
