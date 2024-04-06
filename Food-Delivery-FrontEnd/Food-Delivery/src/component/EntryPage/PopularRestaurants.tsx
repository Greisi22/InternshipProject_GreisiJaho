import BurgerKingImage from '../../assets/BurgerKing.png';
import KFCImage from '../../assets/KFC.png';
import MexicanRestImage from '../../assets/MexicanRest.png';
import PizzaHutImage from '../../assets/PizzaHut.png';
import SushiRestImage from '../../assets/SushiRest.png';
import './style/popularRestaurants.css';


function popularRestaurants(){
    const popularRestaurants = [
        {name: 'Burger King', image: BurgerKingImage, info: '6 locations'},
        {name: 'KFC', image: KFCImage, info: '10 locations'},
        {name: 'Serendipity', image: MexicanRestImage, info: '3 locations'},
        {name: 'Pizza Hut', image: PizzaHutImage, info: '2 locations'},
        {name: 'Sushi Co', image: SushiRestImage, info: '8 locations'},
    ];

    return (
        <div className="width-full m-4 popularRestaurants">
            <h1 className="popular-header">Popular Restaurants</h1>
            <div className="grid-container">
            <div className="image-container">
                <img className="image" src={BurgerKingImage} />
                <div className="paragraph">
                  <p id="restaurantText">Burger King</p>
                  <p id="info">6 locations</p>
                </div>
            </div>

            <div className="image-container">
                <img class name {
                    
                }
                
        </div>
    )
}
