import Navbar from "@/components/Navbar";
import Button from "@/components/button";

const Home = function () {
    return (
        <div>
            <Navbar/>
            <div className="mx-[100px] p-[50px]">
                <div className="flex items-center justify-between pb-[20px] ">
                    <p className="font-medium text-xl">Welcome, Ola</p>
                    <Button className='w-[180px] py-[10]'>Create a new request</Button>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="shadow-md rounded-b-lg h-[100px] w-[140px]">Tickets Raised, 10</div>
                    <div className="shadow-md rounded-lg h-[100px] w-[140px]">Closed 7</div>
                    <div className="shadow-md rounded-lg h-[100px] w-[140px]">Not Assigned 1</div>
                    <div className="shadow-md rounded-lg h-[100px] w-[140px]"> In Progress</div>
                </div>
            </div>
        </div>
    ); 2
}

export default Home