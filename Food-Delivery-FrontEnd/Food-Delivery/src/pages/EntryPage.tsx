import { FunctionComponent } from 'react';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import PopularCategories from 'src/component/EntryPage/PopularCategories';
import HowToOrder from 'src/component/EntryPage/HowToOrder';

import './styles/entry.css';

const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
            <DiscountRestaurants />
            <PopularCategories />
            <HowToOrder/>
            
        </div>
    );
};

export default EntryPage;
