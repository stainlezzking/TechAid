"use client";
import { useEffect, useState } from "react";
import Table from "@/components/table";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import Filter from "@/public/filter.png";
import { headers } from "@/utils/userhistory";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { fetchGet } from "@/lib/server";
import { format } from "date-fns";

const HistoryClient = function ({ path, user }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [Alltickets, setTIckets] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(function () {
    const fetchTickets = async function () {
      const response = await fetchGet(path);
      if (response.unauthorized) {
        return signOut();
      }

      if (!response.success) {
        return toast.error(response.message);
      }
      const fomartedTicket = response.data.map((ticket) => {
        return {
          id: ticket._id,
          name: user.role == "user" ? ticket.assignedTo?.fullname || "unassigned" : ticket.userId.fullname,
          description: ticket.description,
          status: ticket.status,
          dateOpened: format(ticket.updatedAt, "dd MMM, yyyy"),
        };
      });
      setFetchingData(false);
      setTIckets(fomartedTicket);
    };
    fetchTickets();
  }, []);

  return (
    <div className="mx-auto pt-[37px] pb-[64px] xl:max-w-[1200px]">
      {user.role == "support" && <h1 className="text-[32px] font-medium mb-3">Your Support History</h1>}
      <div className="bg-[#F4F7FC] rounded-t-xl">
        <div className="flex items-center justify-between py-[15px]">
          <div className="flex items-center gap-[16px]">
            <img src={Filter.src} />
            <Search className="w-[350px]">Search</Search>
          </div>
          {user.role == "user" && (
            <div className="pr-[20px]">
              <Link
                href="/ticket/"
                className="bg-primaryBlue hover:bg-primaryBlue/70 font-medium text-white rounded-md block w-full text-center px-[12px] py-[6px]"
              >
                + Create Ticket
              </Link>
            </div>
          )}
        </div>
      </div>

      <Table view={false} headers={headers} isFetching={fetchingData} data={Alltickets} rowsPerPage={rowsPerPage} currentPage={currentPage}></Table>

      <div className="flex justify-between font-medium px-[20px] py-[13px] bg-[#F4F7FC]">
        <div>1-{rowsPerPage}</div>
        <div className="flex gap-[20px]">
          <div>
            <span>Rows per Page: </span>
            <select value={rowsPerPage} onChange={(e) => setRowsPerPage(e.currentTarget.value)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <div>
            <Pagination active={currentPage} lastPage={Math.ceil(Alltickets.length / rowsPerPage)} changeActive={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryClient;
