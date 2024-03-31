import SushiPlateCategoryImage from '../../assets/SushiPlateCategory.jpg';
import BrokoliPlateCategoryImage from '../../assets/BrokoliPlateCategory.jpg';
import HamBurgerPlateCategoryImage from '../../assets/HamBurgerPlateCategory.jpg';
import FishPlateCategoryImage from '../../assets/FishPlateCategory.jpg';
import BeansPlateCategoryImage from '../../assets/BeansPlateCategory.jpg';
import SouvlakiPlateCategoryImage from '../../assets/SouvlakiPlateCategory.jpg';
import sandwichWithBacon from '../../assets/sandwich-with-bacon-vegetables.jpg';
import Restornat2 from '../../assets/Restaurant2.jpg';
import './style/RestaurantCategory.css';



function PopularCategories() {
    const popularcategories = [
        { name: 'Vegan', image: Restornat2, nrofrestaurants: '21 restaurants' },
        { name: 'Sushi', image: SushiPlateCategoryImage, nrofrestaurants: '21 restaurants' },
        { name: 'Burgers', image: HamBurgerPlateCategoryImage, nrofrestaurants: '21 restaurants' },
        { name: 'Fish', image: FishPlateCategoryImage, nrofrestaurants: '21 restaurants' },
        { name: 'Green', image: BeansPlateCategoryImage, nrofrestaurants: '21 restaurants' },
        { name: 'FastFood', image: sandwichWithBacon, nrofrestaurants: '21 restaurants' },
    ];

    return (
        <div className="width-full m-4 popularCategories">
            <h1 className="popula-header">Popular Categories</h1>
            <div className="grid-container">
                {popularcategories.map(category => (
                    <div key={category.name} className="image-container">
                        <img className="image" src={category.image} />
                        <div className="paragraph">
                            <p id="categoryText">{category.name}</p>
                            <p id="nrofrestText">{category.nrofrestaurants}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularCategories;
