import { FunctionComponent } from 'react';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import './styles/entry.css';


const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
        <DiscountRestaurants />
        </div>
    );
};

export default EntryPage;
