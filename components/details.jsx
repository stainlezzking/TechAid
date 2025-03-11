import Box from "./box";
const Details = () => {

    return (
        <div>
            <Box className="grow shrink-0 aspect-[1] h-[300px] pl-[18px] pr-[27px] w-full">
                    <div className="pt-[15px] font-medium">Details</div>
                    <div className="flex gap-[250px]">
                        <div className="flex flex-col gap-[14px] pt-[19px]">
                            <span>Name</span>
                            <span>Phone Number</span>
                            <span> Email</span>
                            <span> Contact Method</span>
                        </div>
                        <div className="flex flex-col gap-[14px] pt-[19px] w-[50%]">
                            <span className="bg-[#EEEEEE] pl-[20px] rounded-sm">Faith Bernard</span>
                            <span className="bg-[#EEEEEE] pl-[20px] rounded-sm">+234-9087564532</span>
                            <span className="bg-[#EEEEEE] pl-[20px] rounded-sm">Faith.Bernard@optimusbank.com</span>
                            <span className="bg-[#EEEEEE] pl-[20px] rounded-sm">Phone/Teams Call</span>
                        </div>
                    </div>
                </Box>
        </div>
    );
  }

  export default Details;