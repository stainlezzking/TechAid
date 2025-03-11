import Button from "@/components/button";
import Box from "@/components/box";
import Table from "@/components/table";
import Filter from "@/public/filter.png";
import { fetchGet } from "@/lib/server";
import { format } from "date-fns";
import Search from "../../search";
import { redirect } from "next/navigation";

const TechDashboard = async function ({ session }) {
  const headers = [
    { label: "Id", key: "id" },
    { label: "Name", key: "name" },
    { label: "Description", key: "description", isLink: true, linkUrl: (row) => `/view` },
    { label: "Status", key: "status" },
    { label: "Date Opened", key: "dateOpened" },
    { label: "Criticality", key: "priority" },
  ];

  const rowsPerPage = 10;

  const response = await fetchGet("/ticket/assigned");

  if (response.unauthorized) {
    return redirect("/logout");
  }

  if (!response.success) {
    return <ErrorComponent message={response.message} />;
  }

  const data =
    response.data
      .sort((a, b) => Date.now(b.createdAt) - Date.now(a.createdAt))
      .map((ticket) => {
        return {
          id: ticket._id,
          name: ticket.userId.fullname,
          description: ticket.description,
          status: ticket.status,
          dateOpened: format(ticket.updatedAt, "dd MMM, yyyy"),
          priority: ticket.priority,
        };
      }) || [];

  const dataSolved = response.data.filter((ticket) => ticket.status == "resolved");
  const inProgress = response.data.filter((ticket) => ticket.status == "in-progress");

  return (
    <div className="p-[50px] pb-[58px] xl:max-w-[1200px] mx-auto">
      <div className="flex justify-between pb-[33px]">
        <h1 className="text-[32px] font-medium">Engineer {session.user.fullname.split(" ")[0]},</h1>
        <Button className="p-[12px] w-[200px]">Create a post</Button>
      </div>
      <div className="bg-[#F4F7FC] rounded-t-xl">
        <div className="flex items-center justify-between py-[15px]">
          <div className="flex items-center gap-[16px]">
            <span className="pl-[19px] text-nowrap">Assigned Tickets</span>
            <img src={Filter.src} />
            <Search className="w-[300px]">Search</Search>
          </div>
        </div>
      </div>
      <div>
        <Table headers={headers} data={data} rowsPerPage={rowsPerPage} currentPage={1} view={false}></Table>
      </div>
      <div className="flex justify-between font-medium px-[20px] py-[13px] bg-[#F4F7FC]"></div>
      <div className="flex py-[58px] gap-8">
        <Box className="w-[250px]  h-[171px] space-y-[17px] ">
          <div className="text-lg/[28px]">Assigned</div>
          <div className="font-bold text-[36px] py-[3px]">{data.length + 200}</div>
        </Box>
        <Box className="w-[250px]  h-[171px] space-y-[17px] ">
          <div className="text-lg/[28px]">Total Solved</div>
          <div className="font-bold text-[36px] py-[3px]">{dataSolved.length + 180}</div>
        </Box>
        <Box className="w-[250px]  h-[171px] space-y-[17px] ">
          <div className="text-lg/[28px]">Survey Feedback</div>
          <div className="font-bold text-[36px] py-[3px]">140</div>
        </Box>
        <Box className="w-[250px]  h-[171px] space-y-[17px] ">
          <div className="text-lg/[28px]">Total in Progress</div>
          <div className="font-bold text-[36px] py-[3px]">{inProgress + 5}</div>
        </Box>
      </div>
    </div>
  );
};

export default TechDashboard;
