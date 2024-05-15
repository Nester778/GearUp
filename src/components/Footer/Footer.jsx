import logo from "./../../img/Logo.svg"
import facebook from "./../../img/facebook.svg";
import telegram from "./../../img/telegram.svg";
import whatsapp from "./../../img/whatsapp.svg";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-content-wrapper">
                    <div className="footer-left">
                        <div className="logo-wrapper">
                            <img src={logo} alt="logo" />
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
                        <h4>Сайт розробив Кирило Ніколов</h4>
                        <p>© 2024 Вся інформація на цьому сайті не є дійсною та є частиною курсового проєкту</p>
                    </div>
                    <div className="footer-right">
                        <h4>+38 (050) 111-11-11</h4>
                        <h4>gear.up@gmail.com</h4>
                        <div className="footer-yellow-line"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}