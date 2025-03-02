'use client'

import { useRouter } from "next/navigation";

const Confirmation = function() {
    const router = useRouter();
    const handleHome = () => {
        router.push('/auth/login')
    };

    return (
        <div className="h-[100vh]">
            <div className="flex flex-col items-center justify-center h-[100vh] max-h-[95%]">
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
            <div className="fixed bottom-0 right-0 left-0 min-w-screen h-[50px] max-h-[5%] bg-primaryBlue">
            </div>
        </div>
    );
};

export default Confirmation