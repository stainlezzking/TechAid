"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Button from "@/components/button";
import Table from "@/components/table";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import Filter from "@/public/filter.png";
import {headers, data} from "@/utils/userhistory";


const History = function() {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage]= useState(7);
    
    const router = useRouter();
    const handleTicket = () => {
        router.push('/ticket')
    };

    return(
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[37px] pb-[64px] xl:max-w-[1200px]">
                <div className="bg-[#F4F7FC] rounded-t-xl">
                    <div className="flex items-center justify-between py-[15px]">
                        <div className="flex items-center gap-[16px]">
                            <img src={Filter.src}/>
                            <Search>Search</Search>
                            <select className="border border-borderStroke rounded-md px-[12px] py-[6px]">
                                <option value="">Sort By</option>
                                <option value="date">date</option>
                                <option value="Status">Status</option>
                                <option value="Priority Level">Priority Level</option>
                                <option value="Category">Category</option>
                            </select>
                        </div>
                        <div className="pr-[20px]">
                            <Button className="px-[12px] py-[6px]" onClick={handleTicket}>+ Add Complaint</Button>
                        </div>
                    </div>
                </div>

                <Table
                    headers={headers}
                    data={data}
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                ></Table>
                
                <div className="flex justify-between font-medium px-[20px] py-[13px] bg-[#F4F7FC]">
                    <div>
                        1-{rowsPerPage}
                    </div>
                    <div className="flex gap-[20px]">
                        <div>
                            <span>Rows per Page: </span>
                            <select value={rowsPerPage} onChange={(e)=> setRowsPerPage(e.currentTarget.value)}>
                                <option value="7">7</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <div>
                            <Pagination active={currentPage} lastPage={Math.ceil(data.length/rowsPerPage)} changeActive={setCurrentPage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History