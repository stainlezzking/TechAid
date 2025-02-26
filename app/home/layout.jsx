export default function HomeLayout ({children}) {
    return(
        <div className="h-[100vh]">
            <div className="h-[100vh] max-h-[96%]">
                {children}
            </div>

            <div className="min-w-screen h-[300px] max-h-[4%] bg-primaryBlue">
            </div>
        </div>
    );
}