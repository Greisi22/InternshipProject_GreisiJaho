import { FunctionComponent } from 'react';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import PopularCategories from 'src/component/EntryPage/PopularCategories';
import Footer from 'src/component/EntryPage/Footer';
import './styles/entry.css';
import UserReview from 'src/component/EntryPage/UserReview';

const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
            <DiscountRestaurants />
            <br />
            <br />
            <PopularCategories />
            <br />
            <UserReview />
            <br />
            <br />

            <Footer />
        </div>
    );
};

export default EntryPage;
