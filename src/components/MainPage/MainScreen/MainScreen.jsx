import bgImg from "./../../../img/bgMainScreen.png";
import { Link } from 'react-router-dom';

import "./MainScreen.css";

export default function MainScreen() {


    return (
        <div className="bg-wrapper">
            <div className="bg">
                <img src={bgImg} alt="" />
            </div>
            <div className="container">
                <div className="bg-text-wrapper">
                    <h1>Ідеальний сервіс для ідеального шляху – обирайте якість з нами!</h1>
                    <h3 className="desc">Обираючи наш сервіс, ви обираєте якість, яка забезпечить вам безпеку та надійність
                        на кожному етапі подорожі.</h3>
                    <Link to="/Registration" className="btn">
                        <h3 className="main-reg-btn">Зареєструватися</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}