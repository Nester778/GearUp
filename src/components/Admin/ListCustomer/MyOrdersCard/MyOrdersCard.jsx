import React, { useState, useEffect } from 'react';
import { ReactComponent as Icon } from "./../../../../img/icon/icon.svg";
import { ReactComponent as Car } from "./../../../../img/icon/Car.svg";
import { ReactComponent as Toggle } from "./../../../../img/user/toggle.svg";
import axios from 'axios';
import "./MyOrdersCard.css";

export default function MyOrdersCard({ user, openStates, setOpenStates }) {
    const [open, setOpen] = useState(false);
    const [userCar, setUserCar] = useState(null);

    useEffect(() => {
        const fetchUserCar = async () => {
            try {
                const carResponse = await axios.get(`http://localhost:5251/api/car/${user.User_Id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUserCar(carResponse.data);
                console.log(carResponse.data);
            } catch (error) {
                console.error('Ошибка при загрузке данных автомобиля:', error);
            }
        };
        fetchUserCar();
    }, [user.User_Id]);

    useEffect(() => {
        setOpen(!!openStates[user.User_Id]);
    }, [openStates, user.User_Id]);

    const toggle = () => {
        const newState = !open;
        setOpen(newState);
        setOpenStates((prev) => ({
            ...prev,
            [user.User_Id]: newState,
        }));
    };

    return (
        <div className="myOrdersCard">
            <div className="myOrdersCard-header">
                <div className="myOrdersCard-header-left">
                    <div className="myOrdersCard-header-left-wrapper">
                        <div className={`myOrdersCard-header-left-img ${open ? 'center-content' : ''}`}>
                            <Icon className="left-img" />
                        </div>
                        <div className={`myOrdersCard-header-center-content ${open ? 'center-content' : ''}`}>
                            <h5 className='myOrdersCard-header-center-content-user'>{user.Firstname} {user.Surname}</h5>
                            <p className='myOrdersCard-header-center-content-user'>{user.PhoneNumber}</p>
                        </div>
                    </div>
                </div>
                <div className="myOrdersCard-header-center">
                    {userCar ? (
                        <div className="myOrdersCard-header-center-wraper">
                            <div className={`myOrdersCard-header-center-content ${open ? 'center-content' : ''}`}>
                                <h5>{userCar.CarBrand} {userCar.CarModel}</h5>
                                <p>{userCar.Year}, {userCar.EngineCapacity}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Загрузка данных автомобиля...</p>
                    )}
                </div>
                <div className="myOrdersCard-header-right">
                    <div className="myOrdersCard-header-right-content">
                        <div onClick={toggle} className={`myOrdersCard-header-right-content-icon ${open ? 'icon-rotate' : ''}`}>
                            <Toggle />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`myOrdersCard-content list-customer-content ${open ? 'open' : ''}`}>
                <div className="personalData-wrapper">
                    <div>
                        <Icon className="Big-img" />
                    </div>
                    <div>
                        <div className="personalData__name">
                            <p className="personalData__name-header">Прізвище</p>
                            <p className="personalData__name-header">Ім’я</p>
                            <p className="personalData__name-header">По батькові</p>

                            <h5 className="personalData__name-cell">{user.Surname}</h5>
                            <h5 className="personalData__name-cell">{user.Firstname}</h5>
                            <h5 className="personalData__name-cell">{user.Middlename}</h5>
                        </div>
                        <div className="personalData__contacts">
                            <p className="personalData__name-header">Номер телефону</p>
                            <p className="personalData__name-header">Ел. пошта</p>

                            <h5 className="personalData__name-cell">{user.PhoneNumber}</h5>
                            <h5 className="personalData__name-cell">{user.Email}</h5>
                        </div>
                        <div className="personalData__contacts">
                            <p className="personalData__name-header">Дата народження</p>
                            <p className="personalData__name-header">Стать</p>

                            <h5 className="personalData__name-cell">{user.Birthday}</h5>
                            <h5 className="personalData__name-cell">{user.Gender}</h5>
                        </div>
                    </div>
                </div>
                <div className="listCustomer"></div>
                <div className="listCustomer-border"></div>
                <div className="listCustomer"></div>
                {userCar && (
                    <div className="personalData-wrapper">
                        <div>
                            <Car className="Big-img" />
                        </div>
                        <div>
                            <div className="personalData__name">
                                <p className="personalData__name-header">Марка авто</p>
                                <p className="personalData__name-header">Модель</p>
                                <p className="personalData__name-header">Рік випуску</p>

                                <h5 className="personalData__name-cell">{userCar.CarBrand}</h5>
                                <h5 className="personalData__name-cell">{userCar.CarModel}</h5>
                                <h5 className="personalData__name-cell">{userCar.Year}</h5>
                            </div>
                            <div className="personalData__contacts">
                                <p className="personalData__name-header">Об’єм двигуна</p>
                                <p className="personalData__name-header">Тип двигуна</p>

                                <h5 className="personalData__name-cell">{userCar.EngineCapacity}</h5>
                                <h5 className="personalData__name-cell">{userCar.EngineType}</h5>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}