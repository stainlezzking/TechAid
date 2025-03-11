import { getServerSession } from "next-auth";
import HistoryClient from "./client";
import authOptions from "@/auth";

const History = async function () {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.token) {
    return redirect("/logout");
  }

  const path = session.user.role == "user" ? "/ticket/mytickets" : "/ticket/assigned";
  return <HistoryClient path={path} user={session.user} />;
};

export default History;
