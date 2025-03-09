import Box from "@/components/box";
import ErrorComponent from "@/components/error";
import LogoutComp from "@/components/logoutComponent";
import { fetchGet } from "@/lib/server";
import image from "@/public/Image.png";
import icon from "@/public/icon_1.png";
import { format } from "date-fns";
import { redirect } from "next/navigation";

const Profile = async function () {
  const response = await fetchGet("/staffs/profile");

  if (response.unauthorized) {
    return redirect("/logout");
  }

  if (!response.success) {
    console.log(response);
    return <ErrorComponent message={response.message} />;
  }

  const { user } = response;
  return (
    <div className="mx-[31px]">
      <div className="pt-[77px] xl:max-w-[1200px] mx-auto">
        <div className="pb-[75px]">
          <Box className="flex max-h-[200px]">
            <div className="w-[100%] flex items-center justify-between p-[39px]">
              <div className="flex items-center">
                <div className="">
                  <img src={image.src} alt="picture" />
                </div>

                <div className="pl-[40px]">
                  <p className="font-semibold">{user.fullname}</p>
                  <p className="font-light text-sm">
                    {user.department} <br />
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="pl-[50px]">
                <Box className=" flex py-[18px] px-[20px]">
                  <img className="px-[12px]" src={icon.src} alt="icon" />
                  Edit
                </Box>
              </div>
            </div>
          </Box>
        </div>

        <div className="pb-[72px]">
          <Box className="max-h-[350px]">
            <div className="flex items-center justify-between px-[34.5px] pt-[96px]">
              <div className="flex flex-col font-bold">
                <span className="pb-[41px]">Role:</span>
                <span className="pb-[41px]">Created On:</span>
                <span className="pb-[41px]">Updated on:</span>
                <span className="pb-[23px]">Availability:</span>
              </div>
              <div className="flex flex-col">
                <span className="pb-[41px] font-medium">End-User</span>
                <span className="pb-[41px]">{format(new Date(user.createdAt), "dd MMM, yyyy")}</span>
                <span className="pb-[41px]">{format(new Date(user.updatedAt), "dd MMM, yyyy")}</span>
                <span className="pb-[23px]">
                  <select className="">
                    <option value="Online">Online</option>
                    <option value="Busy">Busy</option>
                    <option value="Offine">Offline</option>
                    <option value="On Leave">On Leave</option>
                  </select>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="pt-[68px] pb-[41px]">12:30PM WAT</span>
                <span className="">12:30PM WAT</span>
                <div className="pt-[14px] pb-[19px]">
                  <Box className=" flex py-[16px] px-[20px]">
                    <img className="px-[12px]" src={icon.src} alt="icon" />
                    Edit
                  </Box>
                </div>
              </div>
            </div>
          </Box>
        </div>
        <LogoutComp />
      </div>
    </div>
  );
};

export default Profile;
