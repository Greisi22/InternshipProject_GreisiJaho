import { FunctionComponent } from 'react';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import PopularCategories from 'src/component/EntryPage/PopularCategories';
import Footer from 'src/component/EntryPage/Footer';
import './styles/entry.css';
import HowToOrder from 'src/component/EntryPage/HowToOrder';
import NavBar from 'src/component/General/NavBar';
import UserReview from 'src/component/EntryPage/UserReview';
import PopularRestaurants from 'src/component/EntryPage/PopularRestaurants';
import Prova from 'src/component/EntryPage/Prova';
import EntryInfo from 'src/component/EntryPage/EntryInfo';

const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
            <NavBar/>
            <br />
            <br />
            <Prova/>
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
            <EntryInfo/>
            <br />
            <br />
            <Footer />

       
        </div>
    );
};

export default EntryPage;
