import { twMerge } from "tailwind-merge";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={twMerge(
        `border-borderStroke border p-3 rounded-md placeholder:text-sm placeholder:font-light focus:border-2 focus:border-borderActive focus:outline-none hover:shadow-md`,
        className
      )}
      {...props}
    />
  );
};

export default Input;
