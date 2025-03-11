import { twMerge } from "tailwind-merge";

const Box = ({ className, children }) => {
  return <div className={twMerge(`shadow-md border-borderStroke/60 border rounded-lg p-5`, className)}>{children}</div>;
};

export default Box;
