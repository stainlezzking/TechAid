import AuthGuard from "@/components/AuthWrapper";
import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic";

export default function HomeLayout({ children }) {
  return (
    <AuthGuard>
      <div className="max-xl:mx-31px xl:max-w-[1300px] mx-auto">
        <Navbar />
        <div className=" min-h-[calc(100%-50px)] p-[50px] xl:max-w-[1200px] mx-auto">{children}</div>
        <div className="fixed bottom-0 right-0 left-0 min-w-screen h-[50px] bg-primaryBlue"></div>
      </div>
    </AuthGuard>
  );
}
