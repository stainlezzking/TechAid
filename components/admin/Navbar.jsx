import Link from "next/link";
import Logo from "@/public/logo.png";
import Notification from "@/public/notification.png";
import Profile from "@/public/profile-pic.png";

const Navbar = function () {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Link href="/">
            < img height="50px" width="50px" src={Logo.src} alt="logo"/>
        </Link>
      </div>
        
      <div className="flex items-center justify-between gap-12">
        <div className="font-semibold">
          <Link href="/">
                Home
          </Link> 
        </div>

        <div className="font-semibold">
          <Link href="/news">
                News & Insights
          </Link> 
        </div>
        
        <div className="font-semibold">
          <Link href="/history">
                Support History
          </Link> 
        </div>

        <div>
          <Link href="/notification">
            <img width="15px" src={Notification.src} alt="notification"/>
          </Link> 
        </div>
        
        <div>
          <Link href="/profile">
            <img className="rounded-full"  width="40px" src={Profile.src} alt="prof-pic"/>
          </Link>
        </div>
      </div>  
    </div>
  );
}

export default Navbar;