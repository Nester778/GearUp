import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Исправление импорта
import logo from "./../../img/Logo.svg";
import { Phone, UserRound, Menu, X } from 'lucide-react'; // Добавлены иконки для бургер-меню
import "./NavBar.css";

export default function NavBar() {
    const iconColor = "#EAB308";
    const location = useLocation();
    const [userEmail, setUserEmail] = useState(null);
    const [userRole, setRole] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления открытием меню

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setRole(decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
                setUserEmail(decodedToken.sub);
            } catch (error) {
                console.error('Ошибка декодирования токена:', error);
                setUserEmail(null);
            }
        } else {
            setUserEmail(null);
        }
    }, [location]);

    const userLink = userRole === 'Admin' ? '/Admin/PersonalData' : '/User/PersonalData';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav-bar-wrapper">
            <div id="navbar" className="container">
                {location.pathname !== '/LogIn' && location.pathname !== '/SendCode' && location.pathname !== '/EnterCode' && location.pathname !== '/CreateNewPass' && location.pathname !== '/Registration' && (
                    <>
                        <div className="nav-bar">
                            <div className="nav-bar__logo">
                                <Link to="/GearUp">
                                    <img src={logo} alt="Logo" />
                                </Link>
                            </div>

                            <div className={`nav-bar__components ${isMenuOpen ? 'open' : ''}`}>
                                <ScrollLink
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-bar__components-item"
                                    onClick={toggleMenu} // Закрываем меню при клике
                                >
                                    <h4>Послуги</h4>
                                </ScrollLink>
                                <ScrollLink
                                    activeClass="active"
                                    to="reviews"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-bar__components-item"
                                    onClick={toggleMenu} // Закрываем меню при клике
                                >
                                    <h4>Відгуки</h4>
                                </ScrollLink>
                                <ScrollLink
                                    activeClass="active"
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-bar__components-item"
                                    onClick={toggleMenu} // Закрываем меню при клике
                                >
                                    <h4>Контакти</h4>
                                </ScrollLink>
                                <div className="nav-bar__right-components">
                                    <div className="nav-bar__right-components-item">
                                        <Phone size={20} />
                                        <h4>+38 (050) 111-11-11</h4>
                                        <p>Пн-Сб</p>
                                    </div>
                                    {userEmail ? (
                                        <Link to={userLink} className="nav-bar__right-components-item" onClick={toggleMenu}>
                                            <UserRound size={20} color={iconColor} />
                                            <h4>{userEmail}</h4>
                                        </Link>
                                    ) : (
                                        <Link to="/LogIn" className="nav-bar__right-components-item" onClick={toggleMenu}>
                                            <UserRound size={20} color={iconColor} />
                                            <h4>Увійти</h4>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <button className="nav-bar__toggle" onClick={toggleMenu}>
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}