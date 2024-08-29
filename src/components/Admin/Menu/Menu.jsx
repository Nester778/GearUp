import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Person } from "./../../../img/user/Person.svg";
import { ReactComponent as Orders } from "./../../../img/user/Orders.svg";
import { ReactComponent as ListCustomer } from "./../../../img/user/ListCustomer.svg";
import { ReactComponent as FeedbackCustomer } from "./../../../img/user/FeedbackCustomer.svg";
import { Menu as BurgerIcon, X as CloseIcon } from 'lucide-react';
import { useUser } from "./../../User/UserContext";
import "./Menu.css";

export default function Menu() {
    const location = useLocation();
    const { userData } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const personColor = location.pathname === "/Admin/PersonalData" ? "#EAB308" : "#171717";
    const ordersColor = location.pathname === "/Admin/AllOrders" ? "#EAB308" : "#171717";
    const listCustomer = location.pathname === "/Admin/ListCustomer" ? "#EAB308" : "#171717";
    const feedbackCustomer = location.pathname === "/Admin/FeedbackCustomer" ? "#EAB308" : "#171717";

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
                    <Link to="/Admin/PersonalData" onClick={toggleMenu}>
                        <div className="menu__item">
                            <div className={"menu__item-icon"}>
                                <Person style={{ stroke: personColor }} />
                            </div>
                            <div className="menu__item-text">
                                <h5 style={{ color: personColor }}>{userData ? `${userData.Firstname} ${userData.Surname}` : "User Name"}</h5>
                                <p>{userData ? userData.Email : "ilovemom@gmail.com"}</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/Admin/AllOrders" onClick={toggleMenu}>
                        <div className="menu__item">
                            <div className={"menu__item-icon"}>
                                <Orders style={{ stroke: ordersColor }} />
                            </div>
                            <div className="menu__item-text">
                                <h5 style={{ color: ordersColor }}>Список заявок</h5>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/Admin/ListCustomer" onClick={toggleMenu}>
                        <div className="menu__item">
                            <div className={"menu__item-icon"}>
                                <ListCustomer style={{ stroke: listCustomer }} />
                            </div>
                            <div className="menu__item-text">
                                <h5 style={{ color: listCustomer }}>Список клієнтів</h5>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/Admin/FeedbackCustomer" onClick={toggleMenu}>
                        <div className="menu__item">
                            <div className={"menu__item-icon"}>
                                <FeedbackCustomer style={{ stroke: feedbackCustomer }} />
                            </div>
                            <div className="menu__item-text">
                                <h5 style={{ color: feedbackCustomer }}>Відгуки клієнтів</h5>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}