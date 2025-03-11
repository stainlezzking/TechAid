import { getServerSession } from "next-auth";
import authOptions from "@/auth";
import { redirect } from "next/navigation";

export default async function AuthGuard({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
