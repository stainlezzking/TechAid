import Link from "next/link";

const Navbar = function () {
  return (
    <div className="flex items-center justify-between p-[10px]">
      <div>
        <Link href="/home">
              < img height="50px" width="50px" src="logo.png" alt="logo"/>
        </Link>
      </div>
        
      <div className="flex items-center justify-between gap-12">
        <div className="font-semibold">
          <Link href="/home">
                Home
          </Link> 
        </div>
        
        <div className="">
          <Link href="/support">
                Support History
          </Link> 
        </div>

        <div>
          <Link href="/notification">
            <img width="15px" src="notification.png" alt="notification"/>
          </Link> 
        </div>
        
        <div>
          <Link href="/profile">
            <img className="rounded-full"  width="40px" src="profile-pic.png" alt="prof-pic"/>
          </Link>
        </div>
      </div>  
    </div>
  );
}

export default Navbar