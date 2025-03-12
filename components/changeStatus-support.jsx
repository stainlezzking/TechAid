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
      {loading && (
        <div className="z-50 backdrop-blur-[2px] bg-black/50 fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center">
          <svg
            className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 409 401"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.3242 287.42C83.4179 297.61 85.6281 311.911 107.618 321M95.3285 314.539C87.8417 308.666 82.148 299.272 86.8856 286.114M209.667 399.997C319.311 399.369 408.001 310.292 408.001 200.5C408.001 90.3192 318.681 1 208.501 1C167.225 1 128.874 13.536 97.0519 35.0084L98.1398 36.6862C127.203 18.5886 162.257 8.01517 200.001 8.01517C300.596 8.01517 382.001 83.0836 382.001 175.515C382.001 267.947 300.596 343.015 200.001 343.015C166.47 343.015 135.064 334.671 108.093 320.12C102.525 317.116 97.3882 313.699 92.6575 310.107C89.2802 306.466 87.4912 302.632 86.742 298.936C86.1982 296.253 86.1951 293.611 86.5509 291.128C86.8207 289.648 87.2339 288.106 87.8093 286.5C88.4363 285.197 89.1835 284.098 90.0515 283.226C101.771 272.74 115.576 270.415 130.555 271.529C140.948 272.301 151.782 274.71 162.817 277.165C167.777 278.268 172.778 279.38 177.798 280.357C193.889 283.487 210.071 285.19 225.092 280.358C240.167 275.508 253.916 264.132 265.258 241.447L265.28 241.404L265.297 241.358C278.519 206.902 285.503 177.574 287.348 167.175L285.476 166.539C274.559 187.558 225.803 228.384 118.441 220.003L118.428 220.002C91.3633 218.244 69.5585 222.315 54.1307 230.74C48.5032 233.812 43.7245 237.466 39.8538 241.622C38.9613 242.271 38.0685 243.004 37.1925 243.823C34.0561 246.618 31.5767 250.001 29.9725 254.127C28.9083 256.563 28.0702 259.281 27.5559 262.285C26.4202 268.92 26.8707 276.907 29.905 286.305C32.6754 297.036 38.4975 308.528 47.5678 320.396C48.2253 321.257 48.8999 322.119 49.5917 322.983C63.1675 343.032 82.1177 358.265 102.619 369.67C107.444 372.908 112.519 376.139 117.847 379.356L118.377 378.531C145.44 392.258 176.055 399.996 208.476 400L209.676 400.059L209.667 399.997ZM85.3837 302.844C85.6279 303.554 85.9049 304.244 86.2113 304.915C85.9547 304.697 85.6995 304.478 85.4456 304.26C85.4202 303.783 85.3995 303.311 85.3837 302.844ZM238.174 145.486L238.208 145.424L238.233 145.358C251.455 110.902 258.439 81.5739 260.284 71.1747L258.412 70.5391C247.495 91.5578 198.739 132.384 91.3772 124.003L91.3772 124.003L91.3642 124.002C63.7664 122.21 41.6366 126.478 26.1609 135.243C10.6522 144.027 1.83787 157.332 1.00134 173.448L0.994982 173.571L1.01845 173.691L18.4542 263.191L20.4262 262.862C18.5261 249.23 19.0309 228.614 26.6637 211.113C30.4743 202.376 36.0491 194.443 43.9629 188.525C51.8702 182.613 62.165 178.674 75.4864 177.999C94.8915 177.016 112.464 178.52 128.493 180.338C132.094 180.747 135.62 181.172 139.075 181.588C150.969 183.021 162.004 184.351 172.233 184.547C185.46 184.8 197.463 183.165 208.424 177.36C219.392 171.551 229.21 161.625 238.174 145.486Z"
              strokeWidth="5"
              className="optimusPreloader stroke-primaryBlue"
            ></path>
          </svg>
        </div>
      )}
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
