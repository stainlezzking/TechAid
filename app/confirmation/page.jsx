'use client'

import { useRouter } from "next/navigation";

const Confirmation = function() {
    const router = useRouter();
    const handleHome = () => {
        router.push('/auth/login')
    };

    return (
        <div className="h-[100vh]">
            <div className="flex flex-col items-center justify-center h-[100vh] max-h-[96%]">
                <img src="/confirmation.png" alt="tick"/>
                <div>
                    <h1 className="text-2xl pt-[40px]">Account created successfully!</h1>
                </div>

                <div>
                <p className="pb-[70px] text-lg text-borderStroke text-center">Welcome aboard! Start your success journey with 
                    <br/>Optimus Tech Aid!
                </p>
                </div>

                <div>
                    <button className="bg-secondaryBlue font-medium text-white rounded-md block text-center px-[77px] py-[22px]"
                        onClick={handleHome}>
                        Let's Start!
                    </button>
                </div>
            </div>
            <div className="min-w-screen h-[300px] max-h-[4%] bg-primaryBlue">
            </div>
        </div>
    );
};

export default Confirmation