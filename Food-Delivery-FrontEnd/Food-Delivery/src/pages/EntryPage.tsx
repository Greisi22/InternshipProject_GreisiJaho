import { FunctionComponent } from 'react';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import PopularCategories from 'src/component/EntryPage/PopularCategories';
import Footer from 'src/component/EntryPage/Footer';
import './styles/entry.css';
import HowToOrder from 'src/component/EntryPage/HowToOrder';
import NavBar from 'src/component/General/NavBar';
import UserReview from 'src/component/EntryPage/UserReview';
import PopularRestaurants from 'src/component/EntryPage/PopularRestaurants';

const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
            <NavBar/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <DiscountRestaurants />
            <br />
            <br />
            <PopularCategories />
            <br />
            <br />
            <PopularRestaurants />
            <br />
            <br />
            <HowToOrder />
            <br />
            <br />
            <UserReview />
            <br />
            <br />
            <Footer />
        </div>
    );
};

export default EntryPage;
