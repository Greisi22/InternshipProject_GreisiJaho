import './style/EntryInfo.css';

const EntryInfo = () => {
    return (
        <>
            <div className="w-full pl-[7%] pr-[7%] pt-[30px]">
                <div>
                    <div className="flex bg-[#e94339] justify-between text-center pt-[15px] pb-[10px] rounded-md container">
                        <div className="text-white w-[25%] ">
                            <h2 className="text-3xl text-white poppins-light-64 ">546+</h2>
                            <p className="py-2 text-white poppins-bold-20 ">Registered Riders</p>
                        </div>

                        <div className="w-[2px] bg-white"></div>

                        <div className="text-white w-[25%] ">
                            <h2 className="text-3xl text-white poppins-light-64 ">789,900+</h2>
                            <p className="py-2 text-white poppins-bold-20 ">Orders Delivered</p>
                        </div>

                        <div className="w-[2px] bg-white respo"></div>

                        <div className="text-white w-[25%] respo">
                            <h2 className="text-3xl text-white poppins-light-64 ">690+</h2>
                            <p className="py-2 text-white poppins-bold-20 ">
                                Restaurants Partnered
                            </p>
                        </div>

                        <div className="w-[2px] bg-white respo"></div>

                        <div className="items-center text-white w-[25%] respo">
                            <h2 className="text-3xl text-white poppins-light-64 ">17,457+</h2>
                            <p className="py-2 text-white poppins-bold-20 ">Food Items</p>
                        </div>
                    </div>

                    <div className="mt-8 afterr">
                        <div className="flex bg-[#e94339] justify-around text-center pt-[15px] pb-[10px] rounded-md">
                            <div className="text-white w-[25%]">
                                <h2 className="text-3xl text-white poppins-light-64 ">690+</h2>
                                <p className="py-2 text-white poppins-bold-20 ">
                                    Restaurants Partnered
                                </p>
                            </div>

                            <div className="w-[2px] bg-white"></div>

                            <div className="items-center text-white w-[25%]">
                                <h2 className="text-3xl text-white poppins-light-64 ">17,457+</h2>
                                <p className="py-2 text-white poppins-bold-20 ">Food Items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EntryInfo;
