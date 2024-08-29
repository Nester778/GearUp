import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Person } from "./../../../img/user/Person.svg";
import { ReactComponent as Orders } from "./../../../img/user/Orders.svg";
import { ReactComponent as Cars } from "./../../../img/user/Cars.svg";
import { ReactComponent as PriceList } from "./../../../img/user/PriceList.svg";
import { ReactComponent as Order } from "./../../../img/user/Order.svg";
import { ReactComponent as Feedback } from "./../../../img/user/Feedback.svg";
import { Menu as BurgerIcon, X as CloseIcon } from 'lucide-react';
import { useUser } from "./../UserContext";
import "./Menu.css";

export default function Menu() {
    const location = useLocation();
    const { userData } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const personColor = location.pathname === "/User/PersonalData" ? "#EAB308" : "#171717";
    const ordersColor = location.pathname === "/User/MyOrders" ? "#EAB308" : "#171717";
    const carsColor = location.pathname === "/User/MyCars" ? "#EAB308" : "#171717";
    const priceListColor = location.pathname === "/User/PriceList" ? "#EAB308" : "#171717";
    const orderColor = location.pathname === "/User/MakeOrders" ? "#EAB308" : "#171717";
    const feedbackColor = location.pathname === "/User/MakeFeedback" ? "#EAB308" : "#171717";

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="menu">
            <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <CloseIcon size={24} /> : <BurgerIcon size={24} />}
            </button>
            <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
                <li className='personalData'>
                    <Link to="/User/PersonalData" onClick={toggleMenu}>
                        <div className="menu__item">
                            <div className="menu__item-icon">
                                <Person style={{ stroke: personColor }} />
                            </div>
                            <div className="menu__item-text">
                                <h5 style={{ color: personColor }}>{userData ? `${userData.Firstname} ${userData.Surname}` : "User Name"}</h5>
                                <p>{userData ? userData.Email : "ilovemom@gmail.com"}</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li><Link to="/User/MyOrders" onClick={toggleMenu}>
                    <div className="menu__item">
                        <div className="menu__item-icon">
                            <Orders style={{ stroke: ordersColor }} />
                        </div>
                        <div className="menu__item-text">
                            <h5 style={{ color: ordersColor }}>Мої замовлення</h5>
                        </div>
                    </div>
                </Link></li>
                <li><Link to="/User/MyCars" onClick={toggleMenu}>
                    <div className="menu__item">
                        <div className="menu__item-icon">
                            <Cars style={{ stroke: carsColor }} />
                        </div>
                        <div className="menu__item-text">
                            <h5 style={{ color: carsColor }}>Моє авто</h5>
                        </div>
                    </div>
                </Link></li>
                <li><Link to="/User/PriceList" onClick={toggleMenu}>
                    <div className="menu__item">
                        <div className="menu__item-icon">
                            <PriceList style={{ stroke: priceListColor }} />
                        </div>
                        <div className="menu__item-text">
                            <h5 style={{ color: priceListColor }}>Прайс лист</h5>
                        </div>
                    </div>
                </Link></li>
                <li><Link to="/User/MakeOrders" onClick={toggleMenu}>
                    <div className="menu__item">
                        <div className="menu__item-icon">
                            <Order style={{ stroke: orderColor }} />
                        </div>
                        <div className="menu__item-text">
                            <h5 style={{ color: orderColor }}>Зробити замовлення</h5>
                        </div>
                    </div>
                </Link></li>
                <li><Link to="/User/MakeFeedback" onClick={toggleMenu}>
                    <div className="menu__item">
                        <div className="menu__item-icon">
                            <Feedback style={{ stroke: feedbackColor }} />
                        </div>
                        <div className="menu__item-text">
                            <h5 style={{ color: feedbackColor }}>Залишити відгук</h5>
                        </div>
                    </div>
                </Link></li>
            </ul>
        </nav>
    );
}