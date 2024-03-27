import { FunctionComponent } from 'react';
import NavBar from 'src/component/EntryPage/navBarDiscRes';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import './styles/entry.css';

const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
        <NavBar />
        <DiscountRestaurants />
        </div>
    );
};

export default EntryPage;
