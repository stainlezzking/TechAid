import DashboardClient from "@/app/(user)/dashboardClient";
import { fetchGet } from "@/lib/server";
import ErrorComponent from "@/components/error";

import Box from "@/components/box";
import Link from "next/link";
import { redirect } from "next/navigation";

const UserDashboard = async ({ session }) => {
  const response = await fetchGet("/ticket/mytickets");

  if (response.unauthorized) {
    return redirect("/logout");
  }

  if (!response.success) {
    return <ErrorComponent message={response.message} />;
  }

  const tickets = response.data || [];

  // Categorize tickets
  const closedTickets = tickets.filter((ticket) => ticket.status === "resolved");
  const inProgressTickets = tickets.filter((ticket) => ticket.status === "open" || ticket.status === "in-progress");

  return (
    <div className="">
      <div className="flex items-center justify-between pb-[20px] ">
        <p className="font-medium text-xl">Welcome, {session.user.fullname.split(" ")[0]}</p>
        <Link href="/ticket" className="bg-primaryBlue hover:bg-primaryBlue/70 font-medium text-white rounded-md block px-2 text-center py-[12px]">
          Create a new request
        </Link>
      </div>
      <div className="flex gap-8 pb-[30px] justify-between">
        <Box className="w-[250px] h-[181px] space-y-[17px] px-[20px] ">
          <span className="text-[22px]/[28px]">Tickets Raised </span>
          <p className="font-bold text-[36px] py-[3px]">{tickets.length}</p>
        </Box>
        <Box className="w-[250px] h-[181px] space-y-[17px] px-[20px] ">
          <span className="text-[22px]/[28px]">Closed </span>
          <p className="font-bold text-[36px] py-[3px]">{closedTickets.length}</p>
        </Box>
        <Box className="w-[250px] h-[181px] space-y-[17px] px-[20px] ">
          <span className="text-[22px]/[28px]">In Progress </span>
          <p className="font-bold text-[36px] py-[3px]">{inProgressTickets.length}</p>
        </Box>
      </div>
      <DashboardClient tickets={tickets} />
    </div>
  );
};

export default UserDashboard;
