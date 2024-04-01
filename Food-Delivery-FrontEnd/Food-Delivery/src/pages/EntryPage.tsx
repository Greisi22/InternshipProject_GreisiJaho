import { FunctionComponent } from 'react';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import PopularCategories from 'src/component/EntryPage/PopularCategories';
import './styles/entry.css';
import Feedback from 'src/component/EntryPage/Feedback';
import Counter from 'src/component/EntryPage/Counter';
import 'src/component/EntryPage/style/CounterCss.css';
const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
            <DiscountRestaurants />
            <PopularCategories />
            <Feedback/>
            <Counter/>
        </div>
    );
};

export default EntryPage;
