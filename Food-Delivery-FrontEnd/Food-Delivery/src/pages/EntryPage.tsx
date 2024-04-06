import { FunctionComponent } from 'react';
import DiscountRestaurants from 'src/component/EntryPage/DiscountRestaurants';
import PopularCategories from 'src/component/EntryPage/PopularCategories';
<<<<<<< HEAD
import HowToOrder from 'src/component/EntryPage/HowToOrder';

=======
import Footer from 'src/component/EntryPage/Footer';
>>>>>>> b924f1a128bd5f3b703d2a5b0f5d825369776e32
import './styles/entry.css';

const EntryPage: FunctionComponent = () => {
    return (
        <div className="entryContainer">
            <DiscountRestaurants />
            <br />
            <br />
            <PopularCategories />
<<<<<<< HEAD
            <HowToOrder/>
            
=======
            <br />
            <br />
             <Footer/>
>>>>>>> b924f1a128bd5f3b703d2a5b0f5d825369776e32
        </div>
    );
};

export default EntryPage;
