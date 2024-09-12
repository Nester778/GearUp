import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router-dom';

import logo from "./../../img/LogoFooter.svg"
import facebook from "./../../img/facebook.svg";
import telegram from "./../../img/telegram.svg";
import whatsapp from "./../../img/whatsapp.svg";
import "./Footer.css";

export default function Footer() {
    const location = useLocation();

    return (
        <div id="contacts" className="footer">
            {location.pathname !== '/LogIn' && location.pathname !== '/SendCode' && location.pathname !== '/EnterCode' && location.pathname !== '/CreateNewPass' && location.pathname !== '/Registration' && (
                <div className="footer-container">
                    <div className="footer-content-wrapper">
                        <div className="footer-left">
                            <div className="logo-wrapper">
                                <ScrollLink
                                    activeClass="active"
                                    to="navbar"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-bar__components-item"
                                >
                                    <img src={logo} alt="logo" />
                                </ScrollLink>
                            </div>
                        </div>
                        <div className="footer-center">
                            <div className="footer-center-icon-wrapper">
                                <div className="footer-center-icon">
                                    <img src={facebook} alt="" />
                                    <img src={telegram} alt="" />
                                    <img src={whatsapp} alt="" />
                                </div>
                            </div>
                            <h4>Харків, Україна</h4>
                            <p>© 2024 Вся інформація на цьому сайті не є дійсною та є частиною курсового проєкту</p>
                        </div>
                        <div className="footer-right">
                            <h4>+38 (050) 111-11-11</h4>
                            <h4>gear.up@gmail.com</h4>
                            <div className="footer-yellow-line"></div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}