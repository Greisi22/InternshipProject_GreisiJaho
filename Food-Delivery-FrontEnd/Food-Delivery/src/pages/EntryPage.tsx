import { FunctionComponent } from 'react';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import PopularCategories from 'src/component/EntryPage/PopularCategories';
import Footer from 'src/component/EntryPage/Footer';
import './styles/entry.css';
import HowToOrder from 'src/component/EntryPage/HowToOrder';
import UserReview from 'src/component/EntryPage/UserReview';
import PopularRestaurants from 'src/component/EntryPage/PopularRestaurants';
import Entry from 'src/component/EntryPage/Entry';
import EntryInfo from 'src/component/EntryPage/EntryInfo';
import ChangeImages from 'src/component/EntryPage/ChangeImages';
import NavBar from 'src/component/General/NavBar';

const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
            <div id="Home" className='mt-[30px]'>
                  {/* <NavBar /> */}
            <Entry />
               {/* <ChangeImages/> */}
             </div>
         
           

            <br />
            <br />
            <div id="Discounts">
                {/* <DiscountRestaurants /> */}
            </div>
            <br />
            <br />
            <div id="Popular">
                <PopularCategories />
            </div>
            <br />
            <br />

            <PopularRestaurants />

            <br />
            <br />
            <HowToOrder />
            <br />
            <br />
            <div id="Services">
                <UserReview />
            </div>
            <br />
            <br />
            <EntryInfo />
            <br />
            <br />
            <br />
            <div id="Contact">
                {' '}
                <Footer />
            </div>
        </div>
    );
};

export default EntryPage;
