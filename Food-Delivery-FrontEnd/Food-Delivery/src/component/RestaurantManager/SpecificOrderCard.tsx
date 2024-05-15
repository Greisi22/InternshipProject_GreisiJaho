import React from 'react';
import './styles/SpecificOrderCard.css';
import { Order } from 'src/types/Restaurant';

function SpecificOrderCard({ order }: { order: Order }) {
    return (
        <div className="flex w-full specificOrderContainer">
            <div className=" w-[50%] specificOrderContainer1">
                <div className="text-[45px] mt-[100px] mb-[0px] ml-[120px] font-bold">
                    Order Description!
                </div>
                <div className="text-[15px] mt-[20px] ml-[50px] mb-[20px]">{order.description}</div>
                <div className="text-[20px] mt-[20px] ml-[50px] mb-[20px]">
                    <div className="text-[20px] mt-[20px]  mb-[20px] font-bold">Billing adress</div>

                    <div className="flex flex-row justify-between mt-[25px] w-[70%]">
                        <span className="flex flex-col items-left">
                            <div className="text-[18px] mt-[20px]  mb-[20px] font-bold">Adress</div>
                            <div className="text-[18px] mt-[20px]  mb-[20px] font-bold">
                                Phone number
                            </div>
                            <div className="text-[18px] mt-[20px]  mb-[20px] font-bold">Email</div>
                        </span>

                        <span className="flex flex-col items-left ">
                            <div className="text-[18px] mt-[20px]  mb-[20px]">
                                {order.userAdress}
                            </div>
                            <div className="text-[18px] mt-[20px]  mb-[20px]">
                                {order.userPhoneNumber}
                            </div>
                            <div className="text-[18px] mt-[20px]  mb-[20px]">
                                {order.userEmail}
                            </div>
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-200 w-[50%] specificOrderContainer2">
                <div className="text-[30px] mt-[20px] ml-[30px] mb-[20px]">Order Summary</div>
                <div className="flex flex-row justify-between w-[90%]">
                    <span className="flex flex-col items-center">
                        <div className="text-[15px] mt-[20px] ml-[30px] mb-[10px]">Date</div>
                        <div>{order.orderTime}</div>
                    </span>
                    <span className="flex flex-col items-center">
                        <div className="text-[15px] mt-[20px] ml-[30px] mb-[10px]">
                            Order Number
                        </div>
                        <div>{order.id}</div>
                    </span>
                    <span className="flex flex-col items-center">
                        <div className="text-[15px] mt-[20px] ml-[30px] mb-[10px]">
                            Payment Method
                        </div>
                        <div>{order.paymentMethod}</div>
                    </span>
                </div>

                <div className="ml-[30px] w-[90%] mt-[20px] max-h-[200px] overflow-auto">
                    {' '}
                    {order.productss &&
                        order.productss.map((product, index) => (
                            <div className="flex flex-row justify-between w-[90%]  " key={index}>
                                <span className="flex flex-col items-left w-[200px] overflow-auto bg-red-300">
                                    <div>{product.image}</div>
                                </span>
                                <span className="flex flex-col items-left bg-slate-500 w-[150px]">
                                    <div>{product.name}</div>
                                    <div>{product.amount}</div>
                                </span>
                                <span className="flex flex-col items-left">{product.price}</span>
                            </div>
                        ))}
                </div>
                <div className="flex justify-between ml-[30px] w-[80%] mt-[20px]">
                    <span>
                        <div>Sub Total</div>
                        <div>Shipping</div>
                        <div>Tax</div>
                    </span>

                    <span>
                        <div>{order.totalPrice}</div>
                        <div>{order.shippingPrice}</div>
                        <div>{order.taxPrice}</div>
                    </span>
                </div>
                <div className="flex justify-between ml-[30px] w-[80%] mt-[10px]">
                    <span>
                        <div>Order Price</div>
                    </span>
                    <span>
                        <div>{order.orderPrice}</div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SpecificOrderCard;
