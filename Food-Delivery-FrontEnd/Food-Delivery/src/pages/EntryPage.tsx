import { FunctionComponent } from 'react';
import Header from 'src/component/EntryPage/Header';
import BelowHeader from 'src/component/EntryPage/BelowHeader';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import PopularCategories from 'src/component/EntryPage/PopularCategories';
import './styles/entry.css';



const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
            <Header />
            <BelowHeader />
            <DiscountRestaurants />
            <PopularCategories />
            
        </div>
    );
};

export default EntryPage;
