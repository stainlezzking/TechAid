import { twMerge } from "tailwind-merge";

const Box = ({ className, children }) => {
    return(
        <div 
        className={twMerge(`shadow-md rounded-b-lg`, className)}>
            {children}
        </div>
        
    )
}

export default Box