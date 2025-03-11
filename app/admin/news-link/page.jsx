import AdminNavbar from "@/components/adminNavbar";

const NewsExpand = function () {
    return (
        <div className="mx-[31px]">
            <AdminNavbar/>
            <div className="mx-auto pt-[104px] xl:max-w-[1200px]">
                <h1 className="font-semibold text-xl pb-[8px]">Troubleshooting Login Issues</h1>
                <div className="flex justify-between pb-[32px]">
                    <span>By Victoria Adeleke</span>
                    <span>19 Feburary 2025</span>
                </div>
                <div className="py-[31px]">
                    When users encounter problems signing in, it is important to systematically eliminate
                    potential causes. Start by confirming that the credentials entered are correct. Common 
                    issues includeincorrect passwords, browser caching problems, and intermittent network errors.
                </div>
                <div className="font-semibold pb-[10px]">Steps to Resolve:</div>
                <div>
                    <ul className="ml-[20px] list-disc">
                        <li className="pb-[15px]">
                            <span className="font-semibold">Verify credentials: </span>
                            <span>Double-check that your username and password are enter correctly, ensure the Caps Lock key is off.</span>
                        </li>
                        <li className="pb-[15px]">
                            <span className="font-semibold">Clear Browser Cache: </span>
                            <span>Old or corrupted cache files may prevent proper login. Clear your browser's cache and cookies, then try again.</span>
                        </li>
                        <li className="pb-[15px]">
                            <span className="font-semibold">Use a Private Window: </span>
                            <span>Open an incognito or private browsing session to rule out browser extensions or settings interfering with the login process.</span>
                        </li>
                        <li className="pb-[15px]">
                            <span className="font-semibold">Reset Your Password: </span>
                            <span>If you suspect the password might be incorrect, use the "Forgot Password" option to initiate a reset process.</span>
                        </li>
                        <li>
                            <span className="font-semibold">Check Network Connection: </span>
                            <span>Confirm that your internet connection is stable; if you are using Wi-Fi, try switching to a wired connection or restarting your router.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NewsExpand;