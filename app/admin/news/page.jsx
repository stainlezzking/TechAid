"use client";

import AdminNavbar from "@/components/adminNavbar";
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
    <div className="mx-[31px] font-inter">
      <div className="mx-auto pt-[50px] pb-[34px] xl:max-w-[1200px]">
        <div className="pb-[83px] pl-[60px] pr-[94px]">
          <Search className="w-full rounded-2xl">Search news</Search>
        </div>
        <div className="flex justify-between items-center pb-[37px]"> 
          <div className=""> Posts and Updates</div>
          <button className="bg-primaryBlue text-white px-4 py-2 rounded-xl">
            <Link href="/admin/create-blog">Create Post</Link>
          </button>
        </div>

        <div className="flex flex-col border-t border-black w-full pb-[25px]">
          <Link href="/admin/news-link">
            <div className="flex items-center gap-[50px]">
              <div className="flex py-[10px]">
                <img src={Image.src} alt="image" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">
                  Troubleshooting Login Issues
                </span>
                <span className="text-[#717171] extra-space">
                  4 mins • Feburary 19, 2025
                </span>
                <span className="text-[#717171]">Victoria Adeleke</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col border-t border-black w-full pb-[25px]">
          <Link href="/admin/news-link">
            <div className="flex items-center gap-[50px]">
              <div className="flex py-[10px]">
                <img src={Image.src} alt="image" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">
                  Updating Personal Information
                </span>
                <span className="text-[#717171] extra-space">
                  4 mins • August 19, 2022
                </span>
                <span className="text-[#717171]">Victoria Gbega</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col border-t border-black w-full pb-[25px]">
          <Link href="/admin/news-link">
            <div className="flex items-center gap-[50px]">
              <div className="flex py-[10px]">
                <img src={Image.src} alt="image" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">
                  Submitting a Support ticket
                </span>
                <span className="text-[#717171] extra-space">
                  4 mins • August 19, 2022
                </span>
                <span className="text-[#717171]">Victoria Gbega</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col border-t border-black w-full pb-[4px]">
          <Link href="/admin/news-link">
            <div className="flex items-center gap-[50px]">
              <div className="flex py-[10px]">
                <img src={Image.src} alt="image" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">
                  Resolving Connectivity Problems
                </span>
                <span className="text-[#717171] extra-space">
                  4 mins • August 19, 2022
                </span>
                <span className="text-[#717171]">Victoria Gbega</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center pb-[34px]">
          <button className="border border-primaryBlue text-primaryBlue px-[27px] py-[14px] rounded-xl">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
