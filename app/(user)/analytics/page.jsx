// "use client";

// import React, { PureComponent } from "react";
// import { PieChartComponent } from "@/components/PieChartComponent";
// import { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Treemap,
// } from "recharts";
// import AdminNavbar from "@/components/adminNavbar";
// import Box from "@/components/box";

// // Sample bar chart data representing monthly values
// const barData = [
//   { name: "Jan", value: 80 },
//   { name: "Feb", value: 100 },
//   { name: "Mar", value: 50 },
//   { name: "Apr", value: 70 },
//   { name: "May", value: 65 },
//   { name: "Jun", value: 75 },
//   { name: "Jul", value: 85 },
//   { name: "Aug", value: 90 },
//   { name: "Sep", value: 95 },
//   { name: "Oct", value: 50 },
//   { name: "Nov", value: 40 },
//   { name: "Dec", value: 20 },
// ];

// // Sample pie chart data for different reports
// const pieData = [
//   { name: "Open Tickets", value: 70, color: "#1B60C1" },
//   { name: "Closed Tickets", value: 30, color: "#00008B" },
// ];

// const pieData1 = [
//   { name: "Assigned Tickets", value: 27, color: "#52A9D4" },
//   { name: "Unassigned Tickets", value: 73, color: "#1B60C1" },
// ];

// const pieData2 = [
//   { name: "Password Resets", value: 27, color: "#52A9D4" },
//   { name: "Networking", value: 60, color: "#00008B" },
//   { name: "Application Bugs", value: 13, color: "#FFA500" },
// ];

// const pieData3 = [
//   { name: "Reopened Tickets", value: 27, color: "#52A9D4" },
//   { name: "Closed Tickets", value: 73, color: "#1B60C1" },
// ];

// const pieData5 = [
//   { name: "Excellent", value: 15, color: "#52A9D4" },
//   { name: "Good", value: 20, color: "#1B60C1" },
//   { name: "Neutral", value: 30, color: "#B0BEC5" },
//   { name: "Poor", value: 25, color: "#FF9800" },
//   { name: "Terrible", value: 10, color: "#D32F2F" },
// ];

// const Dashboard = () => {
//   const [reportsOption, setReportsOption] = useState("overall");

//   return (
//     <div className="mx-[31px] font-inter">
//       <AdminNavbar/>
//       <div className="p-[50px] pb-[58px] xl:max-w-[1200px] mx-auto">
//         {/* Header section */}
//         <header className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Reports & Performance</h1>
//         </header>
//         <div className="flex justify-between items-center mb-5">
//             {/* Filters and Export button */}
//           <div className="flex gap-10 ">
//             <select className="border p-2 rounded bg-gray-200">
//               <option>Day</option>
//               <option>Week</option>
//               <option>Month</option>
//               <option>Year</option>
//             </select>
//             <select className="border p-2 rounded bg-gray-200">
//               <option>All</option>
//               <option>Low</option>
//               <option>Medium</option>
//               <option>High</option>
//               <option>Critical</option>
//             </select>
//           </div>
//           <button className="bg-primaryBlue text-white px-4 py-2 rounded-l h-10">
//             Export PDF
//           </button>
//         </div>

//         {/* Summary boxes */}
//         <div className="grid grid-cols-4 gap-4 mb-6 justify-items-center">
//           <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
//             <div className="pb-[17px]">Tickets Assigned</div>
//             <div className="font-bold text-xl">250</div>
//           </Box>
//           <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
//             <div className="pb-[17px]">Closed</div>
//             <div className="font-bold text-xl">200</div>
//           </Box>
//           <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
//             <div className="pb-[17px]">Average Handling Time</div>
//             <div className="font-bold text-xl">2d 19hr</div>
//           </Box>
//           <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
//             <div className="pb-[17px]">Total in progress</div>
//             <div className="font-bold text-xl">26</div>
//           </Box>
//         </div>

//         {/* Request Frequency Bar Chart */}
//         <div className="bg-white p-4 rounded-lg shadow mb-6">
//           <h2 className="font-semibold mb-4">Request Frequency</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={barData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="value" fill="#003fbb" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Pie Charts for Reports */}
//         <div className="grid grid-cols-2 gap-10">
//           <PieChartComponent
//             title="Unsolved Tickets by Status"
//             data={pieData}
//           />
//             <PieChartComponent
//               title="Unsolved Tickets by Assignment"
//               data={pieData1}
//             />
//           <PieChartComponent
//             title="Most Frequent Ticket Categories"
//             data={pieData2}
//           />
//           <PieChartComponent title="Reopened Tickets Count" data={pieData3} />
//           <PieChartComponent title="Survey Ratings" data={pieData5} />
//         </div>
//         <br />
//         <br />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
