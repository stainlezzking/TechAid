import authOptions from "@/auth";
import TechDashboard from "@/components/dashboard/home/supportdashboard";
import UserDashboard from "@/components/dashboard/home/userdashboard";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
const Home = async function () {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.token) {
    return redirect("/logout");
  }

  if (session.user.role == "user") {
    return <UserDashboard session={session} />;
  }
  if (session.user.role == "support") {
    return <TechDashboard session={session} />;
  }
};

export default Home;
