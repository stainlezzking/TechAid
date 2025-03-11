import Box from "./box";
import Input from "./input";

const FrequentlyEncounteredIssues = () => {
  return (
    <div className="pb-[22px]">
      <Box className="pl-[60px] pr-[94px] py-[24px] w-full">
        <div className="font-medium">Frequently encountered issues</div>
        <div className="flex flex-col relative">
          <label className="font-extralight pb-[10px]">Tell us about your problem so we can get you the right help and support</label>

          <Input className="py-[16px] border-none" type="text" placeholder="Example: I have issues logging into my computer"></Input>
          {/* <ul className="bg-white absolute shadow-md space-y-2 w-full py-2 -bottom-10 rounded-sm left-0">
            <li className="border-b border-borderStroke px-3 py-2 text-blueBlack cursor-pointer hover:text-black">One issue</li>
            <li className="border-b border-borderStroke px-3 py-2 text-blueBlack cursor-pointer hover:text-black">One issue</li>
          </ul> */}
        </div>
      </Box>
    </div>
  );
};

export default FrequentlyEncounteredIssues;
