import Navbar from "@/components/Navbar";

const Ticket2 = function() {
    return(
        <div className="mx-[31px]">
            <Navbar/>
            <div className="mx-auto pt-[112px] pb-[43px] xl:max-w-[1200px]">
                <div className="border-b border-black w-full ">
                    Password reset not working
                </div>
                <div className="flex justify-between pt-[31px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <span className="font-extralight">Ticket Number</span>
                            <span className="font-semibold">#347343</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extralight">Created by</span>
                            <span className="font-semibold">Password reset not working</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ticket2