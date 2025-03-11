import { twMerge } from "tailwind-merge";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={twMerge(
        "border-borderStroke border-2 rounded-md block w-full text-sm py-4 ps-[20px] focus:border-borderActive outline-none",
        className
      )}
      {...props}
    />
  );
};

export default Input;
