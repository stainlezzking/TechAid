const Confirmation = function() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-[100vh]">
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
                    <button className="bg-secondaryBlue font-medium text-white rounded-md block text-center px-[77px] py-[22px]">
                        Let's Start!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation