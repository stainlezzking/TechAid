import AssignTicket from "@/components/assignTicket";
import Box from "@/components/box";
import ChangeStatus from "@/components/changeStatus-support";

const SupportTicketRender = ({ ticket, user }) => {
  const { email } = user;
  return (
    <>
      <div className="pt-[22px] pb-[58px] xl:max-w-[1200px] mx-auto">
        <Box>
          <div className="flex flex-col p-[10px] px-[20px] space-y-4">
            <div className="flex justify-between pb-[10px] items-start ">
              <div className="font-medium text-2xl ">{ticket.title}</div>
              <div className="flex gap-x-5">
                <div className=" font-medium">{ticket.displayId}</div>
                <div className=" font-medium">Severity - High</div>
                <div className="flex flex-col font-medium space-y-[2px]">
                  <div className="text-sm">
                    Assigned to <span className="text-[10px]">(You)</span>
                  </div>
                  <div className="text-borderActive">{ticket.assignedTo.fullname}</div>
                </div>
              </div>
            </div>
            <div className="flex gap-[15px] items-cente ">
              <div className="flex flex-1 flex-wrap items-center justify-between pb-0 text-sm">
                <div className="underline">Summary</div>
                <div>Details</div>
                <div>Attachments</div>
                <div>Survey Feedbacks(0)</div>
                <AssignTicket id={ticket._id} currentUserEmail={email} assignedEmail={ticket.assignedTo.email} currentUserName={user.name} />
                <div>Close Ticket</div>
              </div>
              <ChangeStatus status={ticket.status} _id={ticket._id} />
            </div>
          </div>
        </Box>
        <div className="flex pt-[23px] gap-[20px]">
          <Box className="flex-3 grow shrink-0 aspect-[1] h-[300px]  pt-[34px]">
            <div className="flex pb-[97px] justify-between w-full">
              <div className="font-medium">Description</div>
              <div className="bg-[#EEEEEE] text-sm w-[350px] pl-[10px] py-2  inline-block rounded-sm">{ticket.description}</div>
            </div>
            <div className="flex justify-between w-full pb-[55px]">
              <div className="font-medium shrink-0">Email CC</div>
              <div className="bg-[#EEEEEE] text-sm w-[350px]  pl-[10px] py-2  inline-block rounded-sm">{ticket.userId.email}</div>
            </div>
          </Box>
          <Box className="flex-1 grow shrink-0 aspect-[1] h-[300px] pl-[18px] pr-[27px]">
            <div className="pt-[15px] font-medium">Primary Contact</div>
            <div className="flex gap-[63px] pt-[19px] pb-[14px] text-sm">
              <div>Name</div>
              <div className="bg-[#EEEEEE] py-2 w-[100%] px-1 text-sm rounded-sm">{ticket.userId.fullname}</div>
            </div>
            <div className="flex gap-[30px] pb-[14px] text-sm">
              <div>Phone Number</div>
              <div className="bg-[#EEEEEE] py-2 w-[100%] px-1 text-sm rounded-sm">+234-9087564532</div>
            </div>
            <div className="flex gap-[63px] pb-[14px] text-sm">
              <div>Email</div>
              <div className="bg-[#EEEEEE] py-2 w-[100%] px-1 text-sm rounded-sm">{ticket.userId.email}</div>
            </div>
            <div className="flex gap-[20px] text-sm">
              <div>Contact Method</div>
              <div className="bg-[#EEEEEE] py-2 pl-[10px] w-[100%] rounded-sm">{ticket.userId.contactMethod}</div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SupportTicketRender;
