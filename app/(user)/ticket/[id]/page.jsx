import authOptions from "@/auth";
import ErrorComponent from "@/components/error";
import { fetchGet } from "@/lib/server";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ClientTicketPage from "./clientVersion";
import UserTicket from "@/components/dashboard/ticket/userTicket";
import SupportTicketRender from "@/components/dashboard/ticket/ssTicket";

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
      <div className="mx-auto pb-[43px] xl:max-w-[1200px]">
        {session.user.role == "user" ? <UserTicket ticket={ticket} /> : <SupportTicketRender ticket={ticket} />}
        <ClientTicketPage id={id} notes={ticket.notes} userId={session.user.id} status={ticket.status} />
      </div>
    </div>
  );
};

export default View;
