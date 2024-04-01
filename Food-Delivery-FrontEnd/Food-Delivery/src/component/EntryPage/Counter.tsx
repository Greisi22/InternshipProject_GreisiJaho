import React from "react";

const Counter = () => {
  return (
    <div className="px-40 py-3">
      <div className="grid grid-cols-4 text-center px-10 pt- bg-[#e94339] rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md">

        <div className="flex flex-col justify-center items-center text-white py-2 px-6 border-r border-white "> {/* Added border-right */}
          <h2 className="text-6xl text-white poppins-light-64">546+</h2>
          <p className="py-2 text-white poppins-bold-24">Registered Riders</p>
        </div>

        <div className="flex flex-col justify-center items-center text-white  py-2 px-6 border-r border-white"> {/* Added border-right */}
          <h2 className="text-6xl text-white poppins-light-64">789,900+</h2>
          <p className="py-2 text-white poppins-bold-24">Orders Delivered</p>
        </div>

        <div className="flex flex-col justify-center items-center text-white  py-2 px-6 border-r border-white"> {/* Added border-right */}
          <h2 className="text-6xl text-white poppins-light-64">690+</h2>
          <p className="py-2 text-white poppins-bold-24">Restaurants Partnered</p>
        </div>

        <div className="flex flex-col justify-center items-center text-white py-2 px-6"> {/* Removed border-right */}
          <h2 className="text-6xl text-white poppins-light-64">17,457+</h2>
          <p className="py-2 text-white poppins-bold-24">Food Items</p>
        </div>

      </div>
    </div>
  );
}

export default Counter;
