import React, { FunctionComponent } from 'react';
import './style/Footer.css'; // Make sure to update the path to your CSS file
import logo from '../../assets/logo2.png'; // Update the path to your logo image

const Footer: FunctionComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="logo-section">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <div className="company-info">
                        <h6 className="footer-title">Tasty Rush</h6>
                        <p>Company # 490039-445, Registered with House of companies.</p>
                    </div>
                </div>
            </div>
            <div className="footer-section">
                <h6 className="footer-title">Legal</h6>
                <div>
                    <a href="#" className="link link-hover">Terms of use</a>
                </div>
                <div>
                    <a href="#" className="link link-hover">Privacy policy</a>
                </div>
                <div>
                    <a href="#" className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="footer-section">
                <h6 className="footer-title">Newsletter</h6>
                <form className="form-control">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </form>
            </div>
            <div className="footer-section">
                <h6 className="footer-title">Important Links</h6>
                <div>
                    <a href="#" className="link link-hover">Get help</a>
                </div>
                <div>
                    <a href="#" className="link link-hover">Add your restaurant</a>
                </div>
                <div>
                    <a href="#" className="link link-hover">Sign up to deliver</a>
                </div>
                <div>
                    <a href="#" className="link link-hover">Create a business account</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;