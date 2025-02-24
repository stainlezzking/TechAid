import Link from "next/link";

const Navbar = function () {
  return (
    <div className="navbar">
        <Link href="/home">
          <div className="nav-item">
          <img height="50px" width="50px" src="" alt="logo"/>
          </div>
        </Link>
        <ul className="navGuys">
            <Link href="/home">
              <li className="nav-item"><b>Home</b></li>
            </Link>
            <Link href="/support">
              <li className="nav-item"><b>Support History</b></li>
            </Link>
            <Link href="/notification">
            <img width="30px" src="notification.jpg" alt="notification"/>
            </Link>
            <Link href="/profile">
              <img className="rounded-full"  width="30px" src="prof-pic.jpg" alt="prof-pic"/>
            </Link>
        </ul>
    </div>
  );
}

export default Navbar