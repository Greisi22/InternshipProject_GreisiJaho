// import SushiPlateCategoryImage from '../../assets/SushiPlateCategory.jpg';
import HamBurgerPlateCategoryImage from '../../assets/HamBurgerPlateCategory.jpg';
import FishPlateCategoryImage from '../../assets/FishPlateCategory.jpg';
import BeansPlateCategoryImage from '../../assets/BeansPlateCategory.jpg';
import sandwichWithBacon from '../../assets/sandwich-with-bacon-vegetables.jpg';
import Restornat2 from '../../assets/Restaurant2.jpg';
import './style/RestaurantCategory.css';

function PopularCategories() {
    const popularcategories = [
        { name: 'Vegan', image: Restornat2, nrofrestaurants: '21 restaurants' },
        { name: 'Sushi', image: HamBurgerPlateCategoryImage, nrofrestaurants: '21 restaurants' },
        { name: 'Burgers', image: HamBurgerPlateCategoryImage, nrofrestaurants: '21 restaurants' },
        { name: 'Fish', image: FishPlateCategoryImage, nrofrestaurants: '21 restaurants' },
        { name: 'Green', image: BeansPlateCategoryImage, nrofrestaurants: '21 restaurants' },
        { name: 'FastFood', image: sandwichWithBacon, nrofrestaurants: '21 restaurants' },
    ];

    return (
        <div className="width-full m-4 popularCategories">
            <h1 className="popula-header">Popular Categories</h1>
            <div className="grid-container">
                <div className="image-container">
                    <img className="image" src={HamBurgerPlateCategoryImage} />
                    <div className="paragraph">
                        <p id="categoryText">Hamburger&sushi</p>
                        <p id="nrofrestText">21 restaurants</p>
                    </div>
                </div>
                <div className="image-container">
                    <img className="image" src={HamBurgerPlateCategoryImage} />
                    <div className="paragraph">
                        <p id="categoryText">OKOKOKOKO</p>
                        <p id="nrofrestText">nononono</p>
                    </div>
                </div>
                <div className="image-container">
                    <img className="image" src={HamBurgerPlateCategoryImage} />
                    <div className="paragraph">
                        <p id="categoryText">OKOKOKOKO</p>
                        <p id="nrofrestText">nononono</p>
                    </div>
                </div>
                <div className="image-container">
                    <img className="image" src={HamBurgerPlateCategoryImage} />
                    <div className="paragraph">
                        <p>OKOKOKOKO</p>
                        <p>nononono</p>
                    </div>
                </div>
                <div className="image-container">
                    <img className="image" src={HamBurgerPlateCategoryImage} />
                    <div className="paragraph">
                        <p>OKOKOKOKO</p>
                        <p>nononono</p>
                    </div>
                </div>
                <div className="image-container">
                    <img className="image" src={HamBurgerPlateCategoryImage} />
                    <div className="paragraph">
                        <p>OKOKOKOKO</p>
                        <p>nononono</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularCategories;
