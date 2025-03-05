import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { TicketRow } from "@/components/TicketRow";
import Navbar from "@/components/Navbar";


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

const pieData = [
  { name: "Open Tickets", value: 70, color: "#003fbb" },
  { name: "Closed Tickets", value: 30, color: "#6a9dfd" },
];

const Dashboard = () => {
  return (
    <div className="p-6">
        <Navbar />
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reports & Performance</h1>
        <Button className="bg-blue-600 text-white">Export PDF</Button>
      </header>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card title="Tickets Assigned" value={250} />
        <Card title="Closed" value={200} />
        <Card title="Average Handling Time" value="2d 19hr" subtext="10% faster than last week!" />
        <Card title="Total in progress" value={26} />
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

      <div className="grid grid-cols-2 gap-4">
        <PieChartComponent title="Unsolved Tickets by Status" data={pieData} />
        <PieChartComponent title="Unsolved Tickets by Assignment" data={pieData} />
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

const PieChartComponent = ({ title, data }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="font-semibold mb-4">{title}</h2>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default Dashboard;
