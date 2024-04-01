import React from "react";
import './style/CounterCss.css';

const Counter = () => {
  return (
    <>
    <div className="w-full h-[20vh] bg-red-200 p-[15px] pl-[80px] pr-[80px] pt-[4px] mt-[100px] first">
      <div className="pt- bg-[#e94339] text-center h-full w-full flex rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md div0 justify-around align-middle">

        <div className="text-white w-[25%] m-auto border-r border-white pr-4"> 
          <h2 className="text-3xl text-white poppins-light-64">546+</h2>
          <p className="py-2 text-white poppins-bold-20">Registered Riders</p>
        </div>

        <div className="text-white w-[25%] m-auto border-r border-white pr-4"> 
          <h2 className="text-3xl text-white poppins-light-64">789,900+</h2>
          <p className="py-2 text-white poppins-bold-20">Orders Delivered</p>
        </div>

        <div className="text-white w-[25%] div2 m-auto border-r border-white pr-4"> 
          <h2 className="text-3xl text-white poppins-light-64">690+</h2>
          <p className="py-2 text-white poppins-bold-20">Restaurants Partnered</p>
        </div>

        <div className="items-center text-white w-[25%] div3 m-auto"> 
          <h2 className="text-3xl text-white poppins-light-64">17,457+</h2>
          <p className="py-2 text-white poppins-bold-20">Food Items</p>
        </div>
      </div>
    </div>

    <div className="w-full h-[20vh] bg-red-200 p-[40px] pl-[80px] pr-[80px] pt-[4px] mt-[0px] first div4">
      <div className="pt- bg-[#e94339] text-center h-full w-full flex rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md justify-around align-middle">

        <div className="text-white w-[25%] m-auto border-r border-white pr-4"> 
          <h2 className="text-3xl text-white poppins-light-64">690+</h2>
          <p className="py-2 text-white poppins-bold-20">Restaurants Partnered</p>
        </div>

        <div className="items-center text-white w-[25%] m-auto"> 
          <h2 className="text-3xl text-white poppins-light-64">17,457+</h2>
          <p className="py-2 text-white poppins-bold-20">Food Items</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Counter;
