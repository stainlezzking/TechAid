import Box from "@/components/box";
import Link from "next/link";
import authOptions from "@/auth";
import { getServerSession } from "next-auth/next";

import DashboardClient from "./dashboardClient";
const Home = async function () {
  // console.log(session);
  const session = await getServerSession(authOptions);

  return (
    <div className="">
      <div className="flex items-center justify-between pb-[20px] ">
        <p className="font-medium text-xl">Welcome, Ola</p>
        <Link href="/ticket" className="bg-primaryBlue hover:bg-primaryBlue/70 font-medium text-white rounded-md block px-2 text-center py-[12px]">
          Create a new request
        </Link>
      </div>
      <div className="flex gap-8 pb-[30px] justify-between">
        <Box className="w-[250px] h-[181px] space-y-[17px] px-[20px] ">
          <span className="text-[22px]/[28px]">Tickets Raised </span>
          <p className="font-bold text-[36px] py-[3px]">10</p>
        </Box>
        <Box className="w-[250px] h-[181px] space-y-[17px] px-[20px] ">
          <span className="text-[22px]/[28px]">Closed </span>
          <p className="font-bold text-[36px] py-[3px]">7</p>
        </Box>
        <Box className="w-[250px] h-[181px] space-y-[17px] px-[20px] ">
          <span className="text-[22px]/[28px]">In Progress </span>
          <p className="font-bold text-[36px] py-[3px]">2</p>
        </Box>
      </div>
      <DashboardClient />
    </div>
  );
};

export default Home;
