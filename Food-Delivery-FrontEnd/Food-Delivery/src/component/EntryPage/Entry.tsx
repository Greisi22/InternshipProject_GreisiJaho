import React from 'react';
import './style/Entry.css';
import NavBar from '../General/NavBar';
import driver from 'src/assets/Images/EntryPage/MotorCycle-small.png';
import prova from 'src/assets/Images/EntryPage/Prova.png';

function Entry() {
    return (
        <div className="">
            <NavBar />
            aaa
            <div className="w-full  mt-[25px] overflow-hidden  ">
                <div className="flex h-[82vh] items-center">
                    <div className=" flex-column  justify-center align-middle  w-[50%] m-5 h-full">
                        <div className='flex items-center align-middle'>
                            <span className="text-[90px] font-bold mt-[10px] text-[#e94339]">BEST</span>
                            <span className='ml-[10px]'>
                                <div className='text-[43px] font-bold mt-[30px] text-gray-700'>Food</div>
                                <div className='text-[43px] font-bold mt-[-30px] text-gray-700'>Delivery</div>
                            </span>
                        </div>

                      <div>
                      <p>bdvshgghdjsgdjsddj</p>
                        <p>ghsdvdghsdkgdgsdgsjdj</p>
                      </div>
                    </div>
                    <div className="w-[50%] mt-10 h-full relative">
                        {/* <div className="absolute z-0 top-0">
                            {' '}
                            <img src={bgRed} alt="" className="z-0" />
                        </div> */}

                        <img src={prova} alt="" className=" h-[79vh] w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entry;
