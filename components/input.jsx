import { twMerge } from "tailwind-merge";

const Input = ({ className, ...props }) => {
    return(
        <input
        className={twMerge(`border-borderStroke border-2 p-3 rounded-md focus:border-borderActive focus:outline-none hover:shadow-xl`, className)}
        {...props}
        />
    )
}

export default Input