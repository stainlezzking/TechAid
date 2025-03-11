"use client";

import { useState } from "react";
import Loader from "./loading/loader";
import { FetchAuthPost } from "@/lib/server";
import { signOut } from "next-auth/react";

const statusColor = function (status) {
  const shades = {
    open: "bg-[#E1FCEF] border border-green-800 text-[#14804A]",
    resolved: "bg-[#E9EDF5] border border-black/60 text-[#8F8F8F]",
    "in-progress": "bg-[#FEF9C3] border border-yellow-600 text-[#B45309]",
  };
  return shades[status];
};

const ChangeStatus = ({ status: serverStatus, _id }) => {
  const [status, setStatus] = useState(serverStatus);
  const [loading, setLoading] = useState(false);

  const handleChangeStatus = async function (data) {
    if (data == status) return;
    setLoading(true);
    setStatus(data);
    const response = await FetchAuthPost("/ticket/status", { data, _id });
    if (response.unauthorized) {
      return signOut();
    }
    console.log(response);
    setLoading(false);
  };
  return (
    <>
      {loading ? <Loader message="updating..." /> : null}
      <div className="text-sm flex gap-x-2 items-center ">
        <label>Status:</label>
        <select className={statusColor(status) + " rounded-sm py-1 px-2"} value={status} onChange={(e) => handleChangeStatus(e.target.value)}>
          <option className="text-black bg-white" value="open">
            Open
          </option>
          <option className="text-black bg-white" value="in-progress">
            In Progress
          </option>
          <option className="text-black bg-white" value="resolved">
            Closed
          </option>
        </select>
      </div>
    </>
  );
};

export default ChangeStatus;
