import Navbar from "@/components/Navbar";
import Button from "@/components/button";
import Box from "@/components/box";
import Link from "next/link";

const Home = function () {
    return (
        <div className="mx-[31px]">
            <Navbar/>
            <div className="p-[50px] xl:max-w-[1200px] mx-auto">
                <div className="flex items-center justify-between pb-[20px] ">
                    <p className="font-medium text-xl">Welcome, Ezemandu</p>
                    <Link href = "/ticket">
                        <Button className='w-[200px] p-[12px]'>
                            Create a new request
                        </Button>
                    </Link>
                </div>
                <div className="flex gap-8 pb-[30px]">
                    <Box className="grow shrink-0 aspect-[1] max-h-[200px] p-[20px]">Tickets Raised <p className="font-bold text-2xl py-[3px]">10</p></Box>
                    <Box className="grow shrink-0 aspect-[1] max-h-[200px] p-[20px]">Closed <p className="font-bold text-2xl py-[3px]">7</p></Box>
                    <Box className="grow shrink-0 aspect-[1] max-h-[200px] p-[20px]">Not Assigned <p className="font-bold text-2xl py-[3px]">1</p></Box>
                    <Box className="grow shrink-0 aspect-[1] max-h-[200px] p-[20px]"> In Progress <p className="font-bold text-2xl py-[3px]">2</p></Box>
                </div>
                <div className="flex items-center justify-between pb-[30px] ">
                    <p className="text-l">Active Tickets</p>
                    <div className=" flex gap-7">
                    <select className="border border-black p-[5px] rounded-xl">
                        <option value="All">All</option>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                    </select>
                    <select className="border border-black p-[5px] rounded-xl">
                        <option value="Today">Today</option>
                        <option value="Last Week">Last week</option>
                        <option value="Last Month">Last Month</option>
                        <option value="Last Year">Last Year</option>
                    </select>
                    <select className="border border-black p-[5px] rounded-xl">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                    <select className="border border-black p-[5px] rounded-xl">
                        <option value="Last updated">Last updated</option>
                        <option value="Last created">Last created</option>
                        <option value="Last assigned">Last assigned</option>
                    </select>
                    </div>
                </div>
                
                <div className="flex justify-between pb-[30px] gap-8">
                    <Box className="grow shrink-0 aspect-[1] max-h-[160px] px-[9px] py-[19px] text-sm">
                    <Link href="/view">
                        <div className="flex items-center justify-between pb-[2px]">
                            <div>
                            #7364 <span className="ml-1"> My app is very buggy</span>
                            </div>
                            <div className="border border-[#4AF117] rounded-xl p-[15px]">
                                Open
                            </div>
                        </div>
                        <div className="flex flex-row justify-between font-light px-[31px] pb-[3px]">
                            <span>Submitted</span>
                            <span>Priority</span>
                        </div>
                        <div className="flex flex-row justify-between px-[31px]"> 
                            <span>Jan 22, 2025</span>
                            <span>Critical</span>
                        </div>
                    </Link>
                    </Box>
                    <Box className=" grow shrink-0 aspect-[1] max-h-[160px] px-[9px] py-[19px] text-sm">
                    <Link href="/view">
                        <div className="flex items-center justify-between pb-[10px]">
                            <div>
                            #7364 <span className="ml-1"> My app is very buggy</span>
                            </div>
                            <div className="border border-[#FF0000] rounded-xl p-[15px]">
                                Overdue
                            </div>
                        </div>
                        <div className="flex flex-row justify-between font-light px-[31px] pb-[3px]">
                            <span>Submitted</span>
                            <span>Priority</span>
                        </div>
                        <div className="flex flex-row justify-between px-[31px]"> 
                            <span>Jan 22, 2025</span>
                            <span>Critical</span>
                        </div>
                    </Link>
                    </Box>
                </div>

                <div className="flex flex-row justify-between gap-8 pb-[30px]">
                    <Box className="grow shrink-0 aspect-[1] max-h-[160px] px-[9px] py-[19px] text-sm">
                    <Link href="/view">
                        <div className="flex items-center justify-between pb-[10px]">
                            <div>
                            #7364 <span className="ml-1"> My app is very buggy</span>
                            </div>
                            <div className="border border-primaryBlue rounded-xl p-[15px]">
                                Not Assigned
                            </div>
                        </div>
                        <div className="flex flex-row justify-between font-light px-[31px] pb-[3px]">
                            <span>Submitted</span>
                            <span>Priority</span>
                        </div>
                        <div className="flex flex-row justify-between px-[31px]"> 
                            <span>Jan 22, 2025</span>
                            <span>Critical</span>
                        </div>
                    </Link>
                    </Box>
                    <Box className="grow shrink-0 aspect-[1] max-h-[160px] px-[9px] py-[19px] text-sm">
                    <Link href="/view">
                        <div className="flex items-center justify-between pb-[10px]">
                            <div>
                            #7364 <span className="ml-1"> My app is very buggy</span>
                            </div>
                            <div className="border border-black rounded-xl p-[15px]">
                                Closed
                            </div>
                        </div>
                        <div className="flex flex-row justify-between font-light px-[31px] pb-[3px]">
                            <span>Submitted</span>
                            <span>Priority</span>
                        </div>
                        <div className="flex flex-row justify-between px-[31px]"> 
                            <span>Jan 22, 2025</span>
                            <span>Critical</span>
                        </div>
                    </Link>
                    </Box>
                </div>
            </div>
            
        </div>
    ); 
}

export default Home;