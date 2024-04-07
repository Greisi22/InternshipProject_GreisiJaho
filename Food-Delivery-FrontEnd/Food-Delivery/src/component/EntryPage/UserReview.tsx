import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';

function UserReview() {
    const mockdata = [
        { reviewText: 'David Keci hdbsbsajhdbsabhdshbsajbsjsjsajk', rating: 5 },
        { reviewText: 'askdsjhbdjjs', rating: 2 },
        { reviewText: 'hshhdshdbsahhsshddddddddddhdhdhdhdhdhdjsjsjsdhssjhdsjsjdhhsd', rating: 4 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === mockdata.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? mockdata.length - 1 : prevIndex - 1));
    };

    const currentReview = mockdata[currentIndex];

    return (
        <div>
            <div className="w-full flex justify-center">
                <p className="discount-text font-semibold text-[30.8px]">Our CLients Feedback</p>
            </div>
            <figure className="max-w-screen-md mx-auto text-center">
                <svg
                    className="w-10 h-10 mx-auto mb-3 text-[#e94339] dark:text-[#d65049]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-normal text-gray-900 dark:text-white">
                    "{currentReview.reviewText}"
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    {/* <img
                        className="w-6 h-6 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture"
                    /> */}
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                            Michael Gough
                        </cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                            {/* rating */}
                            <div className="flex items-center">
                            {[...Array(currentReview.rating)].map((_, index) => (
                                <svg
                                    key={index}
                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))}
                        </div>
                        </cite>
                    </div>
                </figcaption>
            </figure>
            <div className="w-full mt-4 flex justify-center">
                <span className="cursor-pointer hover:bg-[#e94339] hover:text-white flex justify-center w-[40px] pl-[10px] rounded-3xl h-[35px] align-middle pt-[4px]" onClick={handlePrev}>
                    {' '}
                    <ArrowBackIosIcon />
                </span>
                <span className="ml-8 mr-8"></span>
                <span className="cursor-pointer hover:bg-[#e94339] hover:text-white flex justify-center w-[40px] pl-[10px] rounded-3xl h-[35px] align-middle pt-[4px] pr-[6px]" onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </span>
            </div>
        </div>
    );
}

export default UserReview;
