"use client"

import Navbar from "@/components/Navbar";
import Search from "@/public/search.png";
import Link from "next/link";
import Image from "@/public/image (1).png"
import { useState } from "react";
import { useRouter } from "next/navigation";

const News = function() {
    const [value, setValue] = useState('');
    
    const handleChange = (e) => {
      setValue(e.target.value);
    };
  
    const router = useRouter();
    const handleTicket = () => {
        router.push('/ticket')
    };

    return(
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[50px] pb-[34px] xl:max-w-[1200px]">
                <div className="pb-[83px] pl-[60px] pr-[94px]">
                    <div className="relative w-full">
                    <div className={`font-extralight absolute pl-[12px] py-[8px] ${value && 'hidden'}`}>
                        <img
                        src={Search.src}
                        alt="icon"
                        className="inline-block w-5 h-5 mr-2"
                        />
                        Search news
                    </div>

                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        className="py-[6px] px-[5px] w-full border border-borderStroke rounded-2xl"
                    />
                    </div>
                </div>
                <div className="pb-[37px]">Posts and Updates</div>
                <div className="flex flex-col border-t border-black w-full pb-[25px]">
                    <Link href="/news-link">
                        <div className="flex items-center gap-[50px]">
                            <div className="flex py-[10px]">
                                <img src={Image.src} alt="image"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold">Troubleshooting Login Issues</span>
                                <span className="text-[#717171] extra-space">4 mins •  Feburary 19, 2025</span>
                                <span className="text-[#717171]">Victoria Adeleke</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col border-t border-black w-full pb-[25px]">
                    <Link href="/news-link">
                        <div className="flex items-center gap-[50px]">
                            <div className="flex py-[10px]">
                                <img src={Image.src} alt="image"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold">Updating Personal Information</span>
                                <span className="text-[#717171] extra-space">4 mins •  August 19, 2022</span>
                                <span className="text-[#717171]">Victoria Gbega</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col border-t border-black w-full pb-[25px]">
                    <Link href="/news-link">
                        <div className="flex items-center gap-[50px]">
                            <div className="flex py-[10px]">
                                <img src={Image.src} alt="image"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold">Submitting a Support ticket</span>
                                <span className="text-[#717171] extra-space">4 mins •  August 19, 2022</span>
                                <span className="text-[#717171]">Victoria Gbega</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col border-t border-black w-full pb-[4px]">
                    <Link href="/news-link">
                        <div className="flex items-center gap-[50px]">
                            <div className="flex py-[10px]">
                                <img src={Image.src} alt="image"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold">Resolving Connectivity Problems</span>
                                <span className="text-[#717171] extra-space">4 mins •  August 19, 2022</span>
                                <span className="text-[#717171]">Victoria Gbega</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center pb-[34px]">
                    <button className="border border-primaryBlue text-primaryBlue px-[27px] py-[14px] rounded-xl">Load More</button>
                </div>
            </div>
        </div>
    );
}

export default News;