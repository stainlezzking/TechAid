import Box from "./box";
import Link from "next/link";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

const TicketPreview = function ({ title, priority, createdAt, _id, status }) {
  return (
    <Box className=" w-[calc(50%-16px)] max-h-[160px] px-[23px] py-[19px] text-sm">
      <div className="flex items-center justify-between pb-[10px]">
        <Link href={"ticket/" + _id} className="hover:underline">
          #7364 <span className="ml-1">{title}</span>
        </Link>
        <div className={twMerge("border border-black rounded-xl px-[28px] py-[6px]", status == "open" ? "border-[#4AF117] text-[#4AF117]" : "")}>
          {status.replace("-", " ")}
        </div>
      </div>
      <div className="flex flex-row justify-between font-light  pb-[3px]">
        <span>Submitted</span>
        <span>Priority</span>
      </div>
      <div className="flex flex-row justify-between ">
        <span>{format(createdAt, "MMM dd, yyyy")}</span>
        <span>{priority}</span>
      </div>
    </Box>
  );
};
export default TicketPreview;
