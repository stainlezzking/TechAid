import Box from "@/components/box";
import ErrorComponent from "@/components/error";
import LogoutComp from "@/components/logoutComponent";
import { fetchGet } from "@/lib/server";
import image from "@/public/Image.png";
import { format } from "date-fns";
import { redirect } from "next/navigation";

const Profile = async function () {
  const response = await fetchGet("/staffs/profile");

  if (response.unauthorized) {
    return redirect("/logout");
  }

  if (!response.success) {
    return <ErrorComponent message={response.message} />;
  }

  const { user } = response;
  return (
    <div className="mx-[31px]">
      <div className="pt-[77px] xl:max-w-[1200px] mx-auto pb-[50px]">
        <div className="pb-[75px]">
          <Box className="flex max-h-[200px]">
            <div className="w-[100%] flex items-center justify-between p-[39px]">
              <div className="flex items-center">
                <div className="">
                  <img src={image.src} alt="picture" />
                </div>

                <div className="pl-[40px]">
                  <p className="font-semibold text-2xl">{user.fullname}</p>
                  <p className="font-light text-sm">
                    {user.department} <br />
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="pl-[50px]">
                <div className=" flex py-[10px] gap-x-2  px-[16px] rounded-md shadow-sm hover:shadow-md cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                      fill="#65558F"
                    />
                  </svg>
                  Edit
                </div>
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
                  <div className=" flex py-[10px] gap-x-2  px-[16px] rounded-md shadow-sm hover:shadow-md cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                        fill="#65558F"
                      />
                    </svg>
                    Edit
                  </div>
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
