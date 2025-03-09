import { twMerge } from "tailwind-merge";
const Button = ({ className, onClick, children, ...props }) => {
  return (
    <button
      className={twMerge(`bg-primaryBlue hover:bg-primaryBlue/70 font-medium text-white rounded-md block w-full text-center py-[22px]`, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
