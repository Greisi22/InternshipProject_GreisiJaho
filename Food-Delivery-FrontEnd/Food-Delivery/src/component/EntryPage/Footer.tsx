import React from 'react';
// import logo2 from '../../assets/logo2.png'; 
import './style/Footer.css';

export default function App() {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      {/* Logo and text */}
      

      {/* Main container div */}
      <div className="mx-6 py-10 text-center md:text-left">
        {/* Four-column grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* First column  */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <img src={"../../assets/logo2.png"} alt="Logo" className="mr-3 h-4 w-4" /> {/* Replacing the SVG with the logo2 */}
              Tasty Rush
            </h6>
            <p>
              Delivering your craving at lightning speed
            </p>
          </div>

          {/* Second column: Get Exclusive Deals */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Get Exclusive Deals
            </h6>
            <input
              type="email"
              className="block w-full rounded-md border border-neutral-300 py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="your email@example.com"
            />
          </div>

          {/* Third column: Products */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Legal Pages
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Terms and conditions</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Privacy</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Cookies</a>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200">Modern Slavery Statements</a>
            </p>
          </div>

          {/* Fourth column: Useful Links */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Important Links
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Get Help</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Add your restaurant</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Sign up to deliver</a>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200">Create a business account</a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-[#03081f] p-4 text-center dark:bg-neutral-700">
        <span>©️ 2024 Tasty Rush Copyright, All Rights Reserved.</span>
      </div>
    </footer>
  );
}