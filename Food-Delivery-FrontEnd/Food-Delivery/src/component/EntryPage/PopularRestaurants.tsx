import BurgerKingImage from '../../assets/BurgerKing.png';
import KFCImage from '../../assets/KFC.png';
import MexicanRestImage from '../../assets/MexicanRest.png';
import PizzaHutImage from '../../assets/PizzaHut.png';
import SushiRestImage from '../../assets/SushiRest.png';

function PopularRestaurants() {
    const popularRestaurants = [
        { name: 'Burger King', image: BurgerKingImage, info: '6 locations' },
        { name: 'KFC', image: KFCImage, info: '10 locations' },
        { name: 'Serendipity', image: MexicanRestImage, info: '3 locations' },
        { name: 'Pizza Hut', image: PizzaHutImage, info: '2 locations' },
        { name: 'Sushi Co', image: SushiRestImage, info: '8 locations' },
        { name: 'Sushi Co', image: SushiRestImage, info: '8 locations' },
    ];

    return (
        <div>
            <div className="w-full p-[10px] pl-[40px] pr-[40px]">
                <div className="w-full  ">
                    <p className="discount-text font-bold text-[16.8px]">Popular Restaurants</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
                    {popularRestaurants.map((category, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden max-w-[140px] border-gray-300  border-2 rounded-lg">
                            <img
                                className="w-full h-[78%] rounded-lg"
                                src={category.image}
                                alt=""
                            />
                            <div className="bg-[#e94339] h-[22%] flex items-center justify-center">
                                <p className="text-[12px] font-semibold text-white">
                                   {category.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PopularRestaurants;
