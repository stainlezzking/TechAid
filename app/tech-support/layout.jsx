export default function HomeLayout ({children}) {
    return(
        <div className="h-[100vh]">
            <div className="h-[100vh] max-h-[95%]">
                {children}
            </div>

            <div className="fixed bottom-0 right-0 left-0 min-w-screen h-[50px] max-h-[5%] bg-[#2C6144]">
            </div>
        </div>
    );
}