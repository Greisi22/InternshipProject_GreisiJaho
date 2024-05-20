import './style/Entry.css';
import NavBar from '../General/NavBar';
import prova from 'src/assets/Images/EntryPage/Prova.png';

function Entry({setLogin}: {setLogin:any}) {
    return (
        <div className="">
            <NavBar setLogin={setLogin} />
            <div className="w-full mt-[25px] overflow-hidden">
                <div className="flex h-[82vh] items-center">
                    <div className="flex flex-col justify-center items-center w-full h-full text-center">
                        <div className="flex flex-col items-center">
                            <span className="text-[90px] font-bold text-[#e94339]">BEST</span>
                            <div className="flex flex-col items-center mt-[-20px]">
                                <div className="text-[43px] font-bold text-gray-700">Food Delivery</div>
                                
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-[20px] text-gray-600">Experience the best food delivery service in town.</p>
                            <p className="text-[20px] text-gray-600">Fast, reliable, and delicious!</p>
                        </div>
                    </div>
                    <div className="w-full h-full relative flex justify-center items-center">
                        <img src={prova} alt="Food Delivery" className="h-auto max-w-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entry;