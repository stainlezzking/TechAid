"use client";

import React, { PureComponent } from "react";
import { PieChartComponent } from "@/components/admin/PieChartComponent";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Treemap,
} from "recharts";
import Box from "@/components/box";

const barData = [
  { name: "Jan", value: 80 },
  { name: "Feb", value: 100 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 70 },
  { name: "May", value: 65 },
  { name: "Jun", value: 75 },
  { name: "Jul", value: 85 },
  { name: "Aug", value: 90 },
  { name: "Sep", value: 95 },
  { name: "Oct", value: 50 },
  { name: "Nov", value: 40 },
  { name: "Dec", value: 20 },
];

const employeeData = [
  { name: "Ogechi", value: 80 },
  { name: "Emmanuel", value: 100 },
  { name: "John", value: 50 },
  { name: "James", value: 70 },
  { name: "Adaobi", value: 65 },
  { name: "Kunle", value: 75 },
  { name: "Bisa", value: 85 },
];

const COlOURS = [
  "#00008B",
  "#696F79",
  "#1F2937",
  "#7CAAD4",
  "#18D2C0",
  "#1565D8",
];

const workloadDistributionData = [
  {
    name: "Ogechi",
    children: [{ size: 4000 }],
  },
  {
    name: "John",
    children: [{ size: 3000 }],
  },
  {
    name: "Kunle",
    children: [{ size: 1000 }],
  },
  {
    name: "James",
    children: [{ size: 2400 }],
  },
  {
    name: "Bisa",
    children: [{ size: 2000 }],
  },
  {
    name: "Bolu",
    children: [{ size: 1800 }],
  },
];

const pieData = [
  { name: "Open Tickets", value: 70, color: "#1B60C1" },
  { name: "Closed Tickets", value: 30, color: "#00008B" },
];

const pieData1 = [
  { name: "Assigned Tickets", value: 27, color: "#52A9D4" },
  { name: "Unassigned Tickets", value: 73, color: "#1B60C1" },
];

const pieData2 = [
  { name: "Password Resets", value: 27, color: "#52A9D4" },
  { name: "Networking", value: 60, color: "#00008B" },
  { name: "Application Bugs", value: 13, color: "#FFA500" },
];

const pieData3 = [
  { name: "Reopened Tickets", value: 27, color: "#52A9D4" },
  { name: "Closed Tickets", value: 73, color: "#1B60C1" },
];

const pieData4 = [
  { name: "Personal Banking", value: 34, color: "#52A9D4" },
  { name: "Marketing", value: 26, color: "#00008B" },
  { name: "Technology", value: 40, color: "#FFA500" },
];

const pieData5 = [
  { name: "Excellent", value: 15, color: "#52A9D4" },
  { name: "Good", value: 20, color: "#1B60C1" },
  { name: "Neutral", value: 30, color: "#B0BEC5" },
  { name: "Poor", value: 25, color: "#FF9800" },
  { name: "Terrible", value: 10, color: "#D32F2F" },
];

class CustomizedContent extends PureComponent {
  render() {
    const {
      root,
      depth,
      x,
      y,
      width,
      height,
      index,
      payload,
      colors,
      rank,
      name,
    } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill:
              depth < 2
                ? colors[Math.floor((index / root.children.length) * 6)]
                : "#ffffff00",
            stroke: "#fff",
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
          >
            {name}
          </text>
        ) : null}
        {depth === 1 ? (
          <text
            x={x + 4}
            y={y + 18}
            fill="#fff"
            fontSize={16}
            fillOpacity={0.9}
          >
            {index + 1}
          </text>
        ) : null}
      </g>
    );
  }
}

const Dashboard = () => {
  const [reportsOption, setReportsOption] = useState("overall");

  return (
    <div className="mx-[31px] font-inter">
      <div className="p-[50px] pb-[58px] xl:max-w-[1200px] mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Reports & Performance</h1>
        </header>
        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-10 ">
            <select
              className="border p-2 rounded bg-gray-200"
              value={reportsOption}
              onChange={(e) => setReportsOption(e.target.value)}
            >
              <option value={"overall"}>Overall</option>
              <option value={"employee"}>Employee</option>
              <option value={"department"}>Department</option>
            </select>
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
          <button className="bg-primaryBlue text-white px-4 py-2 rounded-l h-10">
            Export PDF
          </button>
        </div>
        {
          reportsOption === "employee" ? (<div className="border mb-10 w-[200px] h-10 flex items-center rounded-xl px-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by Name or ID"
            className=".placeholder-black"
            
          />
        </div>) : null
        }
        

        <div className="flex gap-4 mb-6 justify-items-center">
          <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Tickets Assigned</div>
            <div className="font-bold text-xl">250</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Closed</div>
            <div className="font-bold text-xl">200</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Average Handling Time</div>
            <div className="font-bold text-xl">2d 19hr</div>
          </Box>
          <Box className="flex flex-col grow shrink-0 aspect-[1.7] max-h-[150px] p-[20px]">
            <div className="pb-[17px]">Total in progress</div>
            <div className="font-bold text-xl">26</div>
          </Box>
        </div>

        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="font-semibold mb-4">Request Frequency</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#003fbb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {reportsOption === "department" ? (
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="font-semibold mb-4">
              Resolution Rate by Employee (%)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={employeeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#003fbb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : null}

        <div className="grid grid-cols-2 gap-10">
          <PieChartComponent
            title="Unsolved Tickets by Status"
            data={pieData}
          />
          {reportsOption != "employee" ? (
            <PieChartComponent
              title="Unsolved Tickets by Assignment"
              data={pieData1}
            />
          ) : null}
          <PieChartComponent
            title="Most Frequent Ticket Categories"
            data={pieData2}
          />
          <PieChartComponent title="Reopened Tickets Count" data={pieData3} />
          <PieChartComponent title="Issues By Department" data={pieData4} />
          <PieChartComponent title="Survey Ratings" data={pieData5} />
        </div>
        <br />
        <br />
        {reportsOption === "department" ? (
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold">Workload Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <Treemap
                width={400}
                height={200}
                data={workloadDistributionData}
                dataKey="size"
                stroke="#fff"
                fill="#8884d8"
                content={<CustomizedContent colors={COlOURS} />}
              >
                <Tooltip />
              </Treemap>
            </ResponsiveContainer>
          </div>
        ) : null}
        <br />
      </div>
    </div>
  );
};

const Card = ({ title, value, subtext }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
    {subtext && <p className="text-sm text-gray-500">{subtext}</p>}
  </div>
);

export default Dashboard;
