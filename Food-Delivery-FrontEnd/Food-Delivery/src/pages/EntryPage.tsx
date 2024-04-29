<<<<<<< HEAD
import { FunctionComponent, useState } from 'react';
=======
import { FunctionComponent } from 'react';
import Header from 'src/component/EntryPage/Header';
import BelowHeader from 'src/component/EntryPage/BelowHeader';
>>>>>>> b6e275441758f43f6c8ff42a319f0988acbb47e2
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
import Register from 'src/component/Login/Register';
import Login from 'src/component/Login/Login';



const EntryPage: FunctionComponent = () => {
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    return (
<<<<<<< HEAD
        <>
            <div className="entryContainer">
                {login && (
                    <div className="absolute h-full w-full z-[100] mt-[-30px]">
                        <Login setLogin={setLogin} setSignup={setSignup}/>
                    </div>
                )}

              { signup && ( <div className="absolute h-full  w-full  z-[100] mt-[-30px]"> 
                    <Register setLogin={setLogin} setSignup={setSignup}/>
                </div>
              )}
                <div id="Home" className="mt-[30px]">
                    {/* <NavBar /> */}
                    <Entry setLogin={setLogin} />
                    {/* <ChangeImages/> */}
                </div>

                <br />
                <br />
                <div id="Discounts">
                    <DiscountRestaurants />
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
        </>
=======
        <div className="entryContainer">
            <Header />
            <BelowHeader />
            <DiscountRestaurants />
            <PopularCategories />
            
        </div>
>>>>>>> b6e275441758f43f6c8ff42a319f0988acbb47e2
    );
};

export default EntryPage;
