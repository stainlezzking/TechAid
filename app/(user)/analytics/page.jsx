import Box from "@/components/box";
import AnalyticsClient from "./client";
import ErrorComponent from "@/components/error";
import { redirect } from "next/navigation";
import { fetchGet } from "@/lib/server";

const Dashboard = async () => {
  const response = await fetchGet("/ticket/assigned");

  if (response.unauthorized) {
    return redirect("/logout");
  }

  if (!response.success) {
    return <ErrorComponent message={response.message} />;
  }

  const tickets = response.data;
  const dataSolved = tickets.filter((ticket) => ticket.status == "resolved");
  const inProgress = tickets.filter((ticket) => ticket.status == "in-progress");
  const feedback = tickets.filter((t) => t.feedback);

  return (
    <div className="mx-[31px] font-inter">
      <div className="p-[50px] pb-[58px] xl:max-w-[1200px] mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Reports & Performance</h1>
        </header>
        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-10 ">
            <select className="border p-2 rounded bg-gray-200">
              <option>Day</option>
              <option>Week</option>
              <option>Month</option>
              <option>Year</option>
            </select>
            <select className="border p-2 rounded bg-gray-200">
              <option>All</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>
          <button className="bg-primaryBlue text-white px-4 py-2 rounded-l h-10">Export PDF</button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6 justify-items-center">
          <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Tickets Assigned</div>
            <div className="font-bold text-xl">{tickets.length + 200}</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Closed</div>
            <div className="font-bold text-xl">{dataSolved.length + 180}</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Survey Feedback</div>
            <div className="font-bold text-xl">{feedback.length}</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Total in progress</div>
            <div className="font-bold text-xl">{inProgress.length + 5}</div>
          </Box>
        </div>

        <AnalyticsClient />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Dashboard;
