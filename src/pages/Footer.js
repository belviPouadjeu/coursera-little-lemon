import { Link } from 'react-router-dom';
import footerLogo from '../assets/images/footer-logo.png';


const Footer = () => {
    return (
        <footer className="footer-container">
        <div className="footer-content">

            <div className="footer-logo">
                <img src={footerLogo} alt="Little Lemon Logo" />
            </div>

            <div className="footer-wrapper">
                <div className="about">
                    <h4>About Us</h4>
                    <ul>
                    <li><Link to="/#">Our Company</Link></li>
                    <li><Link to="/#">Suppliers</Link></li>
                    <li><Link to="/#">Careers</Link></li>
                    <li><Link to="/#">Newsletter</Link></li>
                    <li><Link to="/#">Customer Service</Link></li>
                    <li><Link to="/#">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="contact-info">
                    <h4>Contacts</h4>
                    <ul>
                    <li><a href="tel:+237234987456">+237 234 987 456</a></li>
                    <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
                    </ul>
                </div>

                <div className="availibity">
                    <h4>Availability</h4>
                    <ul>
                    <li>Tue–Thu: 12pm–10pm</li>
                    <li>Fri–Sun: 12pm–11pm</li>
                    <li>Mon: Closed</li>
                    </ul>
                </div>

                <div className="social-media">
                    <h4>Socials</h4>
                    <ul>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
                    <li><a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Little Lemon. All rights reserved. Belvi</p>
        </div>
        </footer>
    );
};

export default Footer;
