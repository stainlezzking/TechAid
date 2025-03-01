"use client"

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Button from "@/components/button";
import Filter from "@/public/filter.png";
import Search from "@/public/search.png";

const History = function() {
    const data = [
        {id:42323, name: 'Ann Culhane', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Open' },
        {id:42323, name: 'Ann Culhane', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Not Opened' },
        {id:42323, name: 'Ann Culhane', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
        {id:42323, name: 'Ann Culhane', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Overdue' },
        {id:42323, name: 'Ann Culhane', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Open' },
        {id:42323, name: 'Ann Culhane', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Open' },
        {id:42323, name: 'Ann Culhane', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Open' },
        {id:42323, name: 'Ann Culhane', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Open' },
        {id:42323, name: 'Ann Culhane', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Open' },
        {id:42323, name: 'Ann Culhane', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Open' },
        
    ];
    const [value, setValue] = useState('');
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };

    return(
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[37px] xl:max-w-[1200px]">
                <div className="bg-[#F4F7FC] rounded-t-xl">
                    <div className="flex items-center justify-between py-[15px]">
                        <div className="flex items-center gap-[16px]">
                            <img src={Filter.src}/>
                            <div className="relative w-full max-w-xs">
                            <div className={`font-extralight absolute pl-[12px] py-[8px] ${value && 'hidden'}`}>
                                <img
                                src={Search.src}
                                alt="icon"
                                className="inline-block w-5 h-5 mr-2"
                                />
                                Search...
                            </div>

                            <input
                                type="text"
                                value={value}
                                onChange={handleChange}
                                className="py-[6px] px-[12px] border border-borderStroke rounded-md"
                            />
                            </div>
                            <select className="border border-borderStroke rounded-md px-[12px] py-[6px]">
                                <option value="">Sort By</option>
                                <option value="date">date</option>
                                <option value="Status">Status</option>
                                <option value="Priority Level">Priority Level</option>
                                <option value="Category">Category</option>
                            </select>
                        </div>
                        <div className="pr-[20px]">
                            <Button className="px-[12px] py-[6px]">+ Add Complaint</Button>
                        </div>
                    </div>
                    <div className="flex pl-[10px] pb-[12px]">
                        <input type="checkbox"/>
                        <span className="pl-[30px]">Id</span>
                        <span className="pl-[60px]">Name</span>
                        <span className="pl-[80px]">Description</span>
                        <span className="pl-[40px]">Status</span>
                        <span className="pl-[60px]">Date Opened</span>
                        <span className="pr-[140px]">Action</span>
                    </div>
                </div>

                <table className="table-auto w-full">
                    <thead>
                        <tr className="font-light">
                        <th className="p-2 text-left"><input type="checkbox"/></th>
                        <th className="p-2 text-left font-semibold">Id</th>
                        <th className="p-2 text-left font-semibold">Name</th>
                        <th className="p-2 text-left font-semibold w-[30%]">Description</th>
                        <th className="p-2 text-left font-semibold">Status</th>
                        <th className="p-2 text-left font-semibold">Date Opened</th>
                        <th className="p-2 text-left font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#EEEEEE]'}>
                            {/* First column with alternating colors */}
                            <td className={`p-4`}>
                            <input type="checkbox" className="form-checkbox" />
                            </td>
                            <td className="p-4">{row.id}</td>
                            <td className="p-4">{row.name}</td>
                            <td className="p-4 text-wrap">{row.description}</td>
                            <td className="p-4 text-wrap-none">
                            <span
                                className={`px-2 py-1 text-sm rounded-full ${
                                row.status === 'Open' ? 'bg-[#F4F7FC] text-[#4F5AEd]'
                                : row.status === 'Closed' ? 'bg-[#E1FCEF] text-[#14804A]'
                                : row.status === 'Overdue' ? 'bg-[#FAF0F3] text-[#D12953]'
                                : 'bg-[#E9EDF5] border border-black text-[#8F8F8F]'
                                }`}
                            >
                                {row.status}
                            </span>
                            </td>
                            <td className="p-4">{row.dateOpened}</td>
                            <td className="p-4">
                                <Link
                                    href="/home/history"
                                    className="underline"
                                >
                                    {row.action}
                                </Link>
                            </td>
                            {/* Status Column (colored text with border) */}
                            
                        </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
            
        </div>
    )
}

export default History