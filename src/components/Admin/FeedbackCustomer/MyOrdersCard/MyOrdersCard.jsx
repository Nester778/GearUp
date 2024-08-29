import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { ReactComponent as Toggle } from "./../../../../img/user/toggle.svg";
import { ReactComponent as User } from "./../../../../img/user/cardIcon/user.svg";
import { ReactComponent as Car } from "./../../../../img/user/cardIcon/car.svg";
import axios from 'axios';
import "./MyOrdersCard.css";

export default function MyOrdersCard({ order, openStates, setOpenStates, onDeleteFeedback }) { // Добавлен onDeleteFeedback
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!!openStates[order.Feedback_Id]);
    }, [openStates, order.Feedback_Id]);

    const toggle = () => {
        const newState = !open;
        setOpen(newState);
        setOpenStates((prev) => ({
            ...prev,
            [order.Feedback_Id]: newState,
        }));
    };

    const stars = order.Grade + 1;

    const starArray = Array.from({ length: 5 }, (_, index) => {
        const color = index < stars ? '#EAB308' : '#a3a3a3';
        return <Star key={index} size={20} color={color} />;
    });

    const handleDelete = async () => {
        try {
            await axios.delete(`https://maingearupapi.azurewebsites.net/api/Feedback?id=${order.Feedback_Id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            // Удаляем отзыв из списка в родительском компоненте
            onDeleteFeedback(order.Feedback_Id);

        } catch (error) {
            console.error("Ошибка при удалении отзыва", error);
        }
    };

    return (
        <div className="myOrdersCard">
            <div className="myOrdersCard-header">
                <div className="myOrdersCard-header-left">
                    <div className={`myOrdersCard-header-center-content`}>
                        <h5 className='myOrdersCard-header-center-content-user'>№{order.Feedback_Id.length < 10 ? order.Feedback_Id : order.Feedback_Id.slice(0, 15)}</h5>
                        <p className='myOrdersCard-header-center-content-user'>{order.CreatingDate || "Дата не вказана"}</p>
                    </div>
                </div>
                <div className="myOrdersCard-header-center">
                    <div className="myOrdersCard-header-center-wraper">
                        <div className={`myOrdersCard-header-center-content ${open ? 'center-content' : ''}`}>
                            <h5>{order.Service}</h5>
                            <p>{starArray}</p>
                        </div>
                    </div>
                </div>
                <div className="myOrdersCard-header-right">
                    <div className="myOrdersCard-header-right-content">
                        <div className={`myOrdersCard-header-right-content-cost ${open ? 'content-cost' : ''}`}>
                            <h5>{order.Title}</h5>
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
                        <p className="myOrdersCard-content-user-title">{order.UserName}</p>
                    </div>
                    <div className="myOrdersCard-content-user-wrapper">
                        <div className="myOrdersCard-content-user-icon">
                            <Car />
                        </div>
                        <p className="myOrdersCard-content-user-title">{order.CarBrand} {order.CarModel}</p>
                    </div>
                    <div className="myOrdersCard-content-user-wrapper">
                        <div className="myOrdersCard-content-user-icon">
                            <Star size={20} color={'#EAB308'} />
                        </div>
                        <p className="myOrdersCard-content-user-title">{order.Grade + 1}</p>
                    </div>
                </div>
                <div className="myOrdersCard-content-work">
                    <div className="feedback">
                        <h5 className='feedback-title'>{order.Title}</h5>
                        <p className='feedback-content'>{order.Content}</p>
                    </div>
                    <div className="myOrdersCard-content-btn">
                        <div className="content-btn" onClick={handleDelete}>
                            <p>Видалити</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}