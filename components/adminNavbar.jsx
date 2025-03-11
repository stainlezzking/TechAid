import Link from "next/link";
import Logo from "@/public/logo.png";
import Notification from "@/public/notification.png";
import Profile from "@/public/profile-pic.png";

const AdminNavbar = function () {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Link href="/admin/dashboard">
          <img height="50px" width="50px" src={Logo.src} alt="logo" />
        </Link>
      </div>

      <div className="flex items-center justify-between gap-[28px]">
        <div className="font-semibold">
          <Link href="/admin/dashboard">Home</Link>
        </div>

        <div className="font-semibold">
          <Link href="/admin/news">News and Insights</Link>
        </div>

        <div className="font-semibold">
          <Link href="/admin/manage-teams">Manage Teams</Link>
        </div>

        <div className="font-semibold">
          <Link href="/admin/reports-and-performance">
            Reports and Performance
          </Link>
        </div>

        <div className="font-semibold">
          <Link href="/admin/support-history">Support History</Link>
        </div>

        <div>
          <Link href="/">
            <img width="15px" src={Notification.src} alt="notification" />
          </Link>
        </div>

        <div>
          <Link href={`/admin/profile`}>
            <img
              className="rounded-full"
              width="40px"
              src={Profile.src}
              alt="prof-pic"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
