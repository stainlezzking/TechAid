"use client"

import { twMerge } from "tailwind-merge";
import { useState } from "react";
import search from "@/public/search.png";

const Search = function({className, children}) {
    const [value, setValue] = useState('');
        
        const handleChange = (e) => {
            setValue(e.target.value);
        };

    return (
        <div className={twMerge(`relative w-full`)}>
            <div className={`font-extralight absolute pl-[12px] py-[8px] ${value && 'hidden'}`}>
                <img
                src={search.src}
                alt="icon"
                className="inline-block w-5 h-5 mr-2"
                />
                {children}
            </div>

            <input
                type="text"
                value={value}
                onChange={handleChange}
                className={twMerge(`py-[6px] px-[12px] border border-borderStroke rounded-md`, className)}
            />
        </div>
    );
}

export default Search;