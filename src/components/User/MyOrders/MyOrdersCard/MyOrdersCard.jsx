import React, { useState, useEffect } from 'react';
import { ReactComponent as Toggle } from "./../../../../img/user/toggle.svg";
import { ReactComponent as User } from "./../../../../img/user/cardIcon/user.svg";
import { ReactComponent as Phone } from "./../../../../img/user/cardIcon/phone.svg";
import { ReactComponent as Car } from "./../../../../img/user/cardIcon/car.svg";
import { ReactComponent as Time } from "./../../../../img/user/cardIcon/time.svg";
import { ReactComponent as Date } from "./../../../../img/user/cardIcon/date.svg";
import axios from 'axios';
import "./MyOrdersCard.css";
import MiniCard from './MiniCard/MiniCard';

export default function MyOrdersCard({ order, openStates, setOpenStates }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!!openStates[order.Order_Id]);
    }, [openStates, order.Order_Id]);

    const [orderUser, setOrderUser] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`https://maingearupapi.azurewebsites.net/api/User/id?id=${order.User_Id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setOrderUser(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Ошибка при загрузке отзывов", error);
            }
        };

        fetchReviews();
    }, []);

    const toggle = () => {
        const newState = !open;
        setOpen(newState);
        setOpenStates((prev) => ({
            ...prev,
            [order.Order_Id]: newState,
        }));
    };

    const services = ["Діагностика та ремонт двигуна", "Ремонт підвіски та гальмівної системи", "Кузовний ремонт", "Ремонт електричної системи", "Шиномонтажні послуги", "Догляд за авто"];

    let status;
    switch (order.Status) {
        case 0:
            status = <p className="myOrdersCard-header-left-order-status red">
                Заявка в обробці
            </p>
            break;
        case 1:
            status = <p className="myOrdersCard-header-left-order-status yellow">
                Авто обслуговується
            </p>
            break;
        case 2:
            status = <p className="myOrdersCard-header-left-order-status green">
                Виконано
            </p>
            break;
        case 3:
            status = <p className="myOrdersCard-header-left-order-status grey">
                Виконано
            </p>
            break;
        default:

    }

    const groupedServices = order.SelectedServices.reduce((acc, service) => {
        const key = service.IdWork;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(service);
        return acc;
    }, {});

    console.log(orderUser);

    return (
        <div className="myOrdersCard">
            <div className="myOrdersCard-header">
                <div className="myOrdersCard-header-left">
                    <div className="myOrdersCard-header-left-wrapper">
                        <h5>№{order.Order_Id.length < 10 ? order.Order_Id : order.Order_Id.slice(0, 15)}</h5>
                        <p>{order.SelectedDay || "Дата не вказана"}</p>
                    </div>
                    {status}
                </div>
                <div className="myOrdersCard-header-center">
                    <div className="myOrdersCard-header-center-wraper">
                        <div className={`myOrdersCard-header-center-content ${open ? 'center-content' : ''}`}>
                            <h5>{services[order.SelectedServices[0].IdWork]} {order.SelectedServices.length > 1 ? "+ " + (order.SelectedServices.length - 1) : ""}</h5>
                            <p>{order.SelectedServices[0].ServiceTitle}</p>
                        </div>
                    </div>
                </div>
                <div className="myOrdersCard-header-right">
                    <div className="myOrdersCard-header-right-content">
                        <div className={`myOrdersCard-header-right-content-cost ${open ? 'content-cost' : ''}`}>
                            <p>Сума</p>
                            <h5>{order.TotalAmount}₴</h5>
                        </div>
                        <div onClick={toggle} className={`myOrdersCard-header-right-content-icon ${open ? 'icon-rotate' : ''}`}>
                            <Toggle />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`myOrdersCard-content ${open ? 'open' : ''}`}>
                <div className="myOrdersCard-content-user">
                    <div className="myOrdersCard-content-user-wrapper">
                        <div className="myOrdersCard-content-user-icon">
                            <User />
                        </div>
                        <p className="myOrdersCard-content-user-title">{orderUser.Surname} {orderUser.Firstname}</p>
                    </div>
                    <div className="myOrdersCard-content-user-wrapper">
                        <div className="myOrdersCard-content-user-icon">
                            <Phone />
                        </div>
                        <p className="myOrdersCard-content-user-title">{orderUser.PhoneNumber}</p>
                    </div>
                    <div className="myOrdersCard-content-user-wrapper">
                        <div className="myOrdersCard-content-user-icon">
                            <Car />
                        </div>
                        <p className="myOrdersCard-content-user-title">{order.Car || "Автомобіль не вказано"}</p>
                    </div>
                    <div className="myOrdersCard-content-user-wrapper">
                        <div className="myOrdersCard-content-user-icon">
                            <Time style={{ width: '20px', height: '20px' }} />
                        </div>
                        <p className="myOrdersCard-content-user-title">{order.SelectedTime || "Час не вказано"}</p>
                    </div>
                    <div className="myOrdersCard-content-user-wrapper">
                        <div className="myOrdersCard-content-user-icon">
                            <Date style={{ width: '20px', height: '20px' }} />
                        </div>
                        <p className="myOrdersCard-content-user-title">{order.SelectedDay || "Дата не вказана"}</p>
                    </div>
                </div>
                <div className="myOrdersCard-content-work">
                    {Object.keys(groupedServices).map(idWork => (
                        <MiniCard key={idWork} work={groupedServices[idWork]} />
                    ))}
                    <div className="myOrdersCard-content-sum">
                        <div className="myOrdersCard-content-sum-wrapper">
                            <p>Разом</p>
                            <h5>{order.TotalAmount}₴</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}