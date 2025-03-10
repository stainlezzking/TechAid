import authOptions from "@/auth";
import AuthGuard from "@/components/AuthWrapper";
import Navbar from "@/components/Navbar";
import NavbarSession from "@/components/navbarsessionWrapper";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function HomeLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/login");
  }
  const { role } = session.user;
  console.log(role);
  return (
    <div className="max-xl:mx-31px xl:max-w-[1300px] mx-auto">
      <Navbar session={session} />
      <div className=" min-h-[calc(100%-50px)] p-[50px] xl:max-w-[1200px] mx-auto">{children}</div>

      <div
        className={`fixed bottom-0 right-0 left-0 min-w-screen h-[50px] ${
          role == "user" ? "bg-primaryBlue" : role == "support" ? "bg-[#3CA86C]" : "bg-[#DBC26F]"
        }`}
      ></div>
    </div>
  );
}
