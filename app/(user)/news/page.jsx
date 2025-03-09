"use client";

import Navbar from "@/components/Navbar";
import Search from "@/components/search";
import Link from "next/link";
import Image from "@/public/image (1).png";
import { useRouter } from "next/navigation";

const News = function () {
  const router = useRouter();
  const handleTicket = () => {
    router.push("/ticket");
  };

  return (
    <div className="mx-[31px]">
      <div className="mx-auto pt-[50px] pb-[34px] xl:max-w-[1200px]">
        <div className="pb-[83px] pl-[60px] pr-[94px]">
          <Search className="w-full rounded-2xl">Search news</Search>
        </div>
        <div className="pb-[37px]">Posts and Updates</div>
        <div className="flex flex-col border-t border-black w-full pb-[25px]">
          <Link href="/news-link">
            <div className="flex items-center gap-[50px]">
              <div className="flex py-[10px]">
                <img src={Image.src} alt="image" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Troubleshooting Login Issues</span>
                <span className="text-[#717171] extra-space">4 mins • Feburary 19, 2025</span>
                <span className="text-[#717171]">Victoria Adeleke</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col border-t border-black w-full pb-[25px]">
          <Link href="/news-link">
            <div className="flex items-center gap-[50px]">
              <div className="flex py-[10px]">
                <img src={Image.src} alt="image" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Updating Personal Information</span>
                <span className="text-[#717171] extra-space">4 mins • August 19, 2022</span>
                <span className="text-[#717171]">Victoria Gbega</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col border-t border-black w-full pb-[25px]">
          <Link href="/news-link">
            <div className="flex items-center gap-[50px]">
              <div className="flex py-[10px]">
                <img src={Image.src} alt="image" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Submitting a Support ticket</span>
                <span className="text-[#717171] extra-space">4 mins • August 19, 2022</span>
                <span className="text-[#717171]">Victoria Gbega</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col border-t border-black w-full pb-[4px]">
          <Link href="/news-link">
            <div className="flex items-center gap-[50px]">
              <div className="flex py-[10px]">
                <img src={Image.src} alt="image" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Resolving Connectivity Problems</span>
                <span className="text-[#717171] extra-space">4 mins • August 19, 2022</span>
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
};

export default News;
