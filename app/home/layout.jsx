export default function HomeLayout ({children}) {
    return(
        <div className="h-[100vh]">
            <div className="h-[100vh] max-h-[95%]">
                {children}
            </div>

            <div className="min-w-screen h-[50px] max-h-[5%] bg-primaryBlue">
            </div>
        </div>
    );
}