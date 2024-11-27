import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from "./../../../img/workIcon/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "./../../../img/workIcon/ArrowRight.svg";
import MyOrdersCard from "./MyOrdersCard/MyOrdersCard";
import { useUser } from './../UserContext';
import axios from 'axios';

import "./MyOrders.css";

export default function MyOrders() {
    const [page, setPage] = useState(1);
    const [openStates, setOpenStates] = useState({});
    const [userOrders, setUserOrders] = useState([]);  // Здесь будут храниться данные с сервера
    const { userData } = useUser();  // Получаем данные пользователя

    useEffect(() => {
        const fetchUserData = async () => {
            if (userData && userData.User_Id) {
                try {
                    const userResponse = await axios.get(`http://localhost:5251/api/order/${userData.User_Id}`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    setUserOrders(userResponse.data);  // Сохраняем заказы пользователя
                } catch (error) {
                    console.error('Error fetching user orders:', error);
                }
            }
        };
        fetchUserData();
    }, [userData]);

    const pageSize = 4;
    const quantityPage = Math.ceil(userOrders.length / pageSize);  // Количество страниц на основе данных с сервера

    const [pageInfo, setPageInfo] = useState([]);

    useEffect(() => {
        setPageInfo(userOrders.slice((page - 1) * pageSize, page * pageSize));  // Используем заказы пользователя для пагинации
        setOpenStates({});
    }, [page, userOrders]);

    const pageBtn = [];
    for (let i = 1; i <= quantityPage; i += 1) {
        pageBtn.push(
            <div key={i} className={`myOrders-pages-page ${page === i ? 'active-page' : ''}`} onClick={() => setPage(i)}>
                {i}
            </div>
        );
    }

    const moveLeft = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const moveRight = () => {
        if (page < quantityPage) {
            setPage(page + 1);
        }
    };


    return (
        <div className="myOrders">
            <h2>Мої замовлення</h2>
            {/* Передаем анные в MyOrdersCдard */}
            {pageInfo.length > 0 ? (
                pageInfo.map((order, index) => (
                    <MyOrdersCard
                        key={order.number + "-" + index}
                        order={order}  // Передаем данные заказа в компонент MyOrdersCard
                        openStates={openStates}
                        setOpenStates={setOpenStates}
                    />
                ))
            ) : (
                <p>Завантаження замовлень...</p>
            )}
            <div className="myOrders-pages-wrapper">
                <div className="myOrders-pages">
                    <div className={`myOrders-pages-btn ${page > 1 ? 'active' : ''}`} onClick={moveLeft}>
                        <ArrowLeft />
                    </div>
                    <div className="myOrders-pages-page-wrapper">
                        {pageBtn}
                    </div>
                    <div className={`myOrders-pages-btn ${page < quantityPage ? 'active' : ''}`} onClick={moveRight}>
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
}