import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './../../User/UserContext';
import UserIcon1 from "./../../../img/Reviews//CardItem/User1.png"
import "./PersonalData.css";

export default function PersonalData() {
    const { userData, userCarData, logout } = useUser();
    const navigate = useNavigate();

    const logOut = () => {
        logout();
        navigate('/GearUp');
    };

    return (
        <div className="personalData">
            <h2>Особисті дані</h2>
            {userData ? (
                <div className="personalData-wrapper">
                    <div className="personalData__icon">
                        <img src={userData.UserIcon ? userData.UserIcon : UserIcon1} alt="user-icon" />
                    </div>
                    <div>
                        <div className="personalData__name">
                            <p className="personalData__name-header">Прізвище</p>
                            <p className="personalData__name-header">Ім’я</p>
                            <p className="personalData__name-header">По батькові</p>

                            <h5 className="personalData__name-cell">{userData.Surname}</h5>
                            <h5 className="personalData__name-cell">{userData.Firstname}</h5>
                            <h5 className="personalData__name-cell">{userData.Middlename}</h5>
                        </div>
                        <div className="personalData__contacts">
                            <p className="personalData__name-header">Номер телефону</p>
                            <p className="personalData__name-header">Ел. пошта</p>

                            <h5 className="personalData__name-cell">{userData.PhoneNumber}</h5>
                            <h5 className="personalData__name-cell">{userData.Email}</h5>
                        </div>
                        <div className="personalData__contacts">
                            <p className="personalData__name-header">Дата народження</p>
                            <p className="personalData__name-header">Стать</p>

                            <h5 className="personalData__name-cell">{userData.Birthday}</h5>
                            <h5 className="personalData__name-cell">{userData.Gender}</h5>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Загрузка данных пользователя...</p>
            )}
            <Link to="/Admin/PersonalUpData">
                <div className="personalData__edit">
                    <p>Редагувати</p>
                </div>
            </Link>
            <div className="personalData__line"></div>
            <Link to="/CreateNewPass"><h4 className="link">Змінити пароль</h4></Link>
            <div onClick={logOut}><h4 className="link logOut">Вихід</h4></div>
        </div>
    );
}