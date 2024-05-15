import logo from "./../../img/Logo.svg"
import { Phone } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

import "./NavBar.css"

export default function NavBar() {
    const iconColor = "#EAB308";

    return (
        <div className="container">
            <div className="nav-bar">
                <div className="nav-bar__components">
                    <a href="#!" className="nav-bar__components-item">
                        <h4>Послуги</h4>
                    </a>
                    <a href="#!" className="nav-bar__components-item">
                        <h4>Про нас</h4>
                    </a>
                    <a href="#!" className="nav-bar__components-item">
                        <h4>Відгуки</h4>
                    </a>
                    <a href="#!" className="nav-bar__components-item">
                        <h4>Контакти</h4>
                    </a>
                </div>
                <div className="nav-bar__logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="nav-bar__components">
                    <div className="nav-bar__right-components-item">
                        <Phone size={20} />
                        <h4>+38 (050) 111-11-11</h4>
                        <p>Пн-Сб</p>
                    </div>
                    <a href="#!" className="nav-bar__right-components-item">
                        <UserRound size={20} color={iconColor} />
                        <h4>Увійти</h4>
                    </a>
                    <a href="#!" className="nav-bar__right-components-item">
                        <ShoppingCart size={20} color={iconColor} />
                        <h4>Кошик</h4>
                    </a>
                </div>
            </div>
        </div>
    );
}