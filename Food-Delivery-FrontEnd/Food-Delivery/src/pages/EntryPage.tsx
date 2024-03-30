import { FunctionComponent } from 'react';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import PopularCategories from 'src/component/EntryPage/PopularCategories';
import './styles/entry.css';

const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
            <DiscountRestaurants />
            <PopularCategories />
        </div>
    );
};

export default EntryPage;
