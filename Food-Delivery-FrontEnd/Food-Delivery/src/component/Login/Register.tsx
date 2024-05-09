import DropDown from '../General/DropDown';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { RegisterHelper } from 'src/utils/Functinalities/RegisterHelper';

function Register({ setLogin, setSignup }: { setLogin: any; setSignup: any }) {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [r_password, r_setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleFunction = (name: string) => {
        if (name === 'AdminiStrator') {
            setRole('ROLE_ADMIN');
        } else if (name === 'Client') {
            setRole('ROLE_CLIENT');
        } else {
            setRole('ROLE_RESTAURANT_MANAGER');
        }
    };

    const menuItems = [
        { function: handleFunction, name: 'Categories' },
        {
            function: handleFunction,
            name: 'Client',
        },
        {
            function: handleFunction,
            name: 'Restorant Manger',
        },
        {
            function: handleFunction,
            name: 'AdminiStrator',
        },
    ];

    async function handleRegister() {
        const result = await RegisterHelper(email, password, r_password, role);
        console.log(result);
        console.log(result === 409);
        if (result === 200) {
            setError('You are succesfully register');
            setTimeout(() => {
                setSignup(false);
                setLogin(true);
            }, 2000);
        } else if (result === 409) {
            setError('Email Exist');
        } else {
            setError('Invalid Credincials');
        }
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleRepPassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        r_setPassword(event.target.value);
    };

    return (
        <>
            <div className="fixed w-full">
                {/* Background image or color */}
                <div className="absolute inset-0 bg-white-900 opacity-50"></div>
                <div className="absolute inset-0 backdrop-blur-lg"></div>
                {/* Registration form */}
                <section className="relative z-10 mt-[10px]">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a
                            href="#"
                            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-8 h-8 mr-2" src="" alt="logo" />
                            Register
                        </a>
                        <div className="relative shadow-3xl w-full bg-white border border-gray-500 rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 overflow-auto">
                            <div
                                className="absolute w-[30px] h-[30px] hover:bg-red-500 active:bg-red-300 rounded-sm cursor-pointer right-1 top-1 text-center"
                                onClick={() => {
                                    setSignup(false);
                                }}>
                                {' '}
                                <CloseIcon />
                            </div>
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form className="space-y-4 md:space-y-6">
                                    <div className="text-red-700">{error}</div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Your email
                                        </label>
                                        <input
                                            onChange={handleEmailChange}
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Password
                                        </label>
                                        <input
                                            onChange={handlePassChange}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="r-password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Repeat Password
                                        </label>
                                        <input
                                            onChange={handleRepPassChange}
                                            type="password"
                                            name="password"
                                            id="r-password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <DropDown items={menuItems} />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    aria-describedby="remember"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="remember"
                                                    className="text-gray-500 dark:text-gray-300">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default form submission
                                            handleRegister(); // Call your registration function
                                        }}
                                        className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        Sign up
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account?{' '}
                                        <a
                                            onClick={() => {
                                                setLogin(true);
                                                setSignup(false);
                                            }}
                                            className=" text-red-500 font-medium text-primary-600 hover:underline dark:text-primary-500">
                                            Sign in
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Register;
