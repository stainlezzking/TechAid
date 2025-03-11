import React from "react";
import AdminNavbar from "@/components/adminNavbar";
import Box from "@/components/box";

const CreateBlog = () => {
  return (
    <div className="mx-[31px] font-inter">
      <AdminNavbar />
      <div className="p-[50px] pb-[58px] xl:max-w-[1200px] mx-auto">
        <Box>
          <form action="" method="post" className="px-[50px] py-[30px] ">
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-1">Title:</label>
              <input
                type="text"
                name="title"
                // value={formData.title}
                // onChange={handleChange}
                className="w-full p-3 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-1">
                Description:
              </label>
              <textarea
                name="description"
                // value={formData.description}
                // onChange={handleChange}
                className="w-full p-3 border rounded-xl shadow-md h-[300px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter description"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primaryBlue text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition"
              >
                Post
              </button>
            </div>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default CreateBlog;
