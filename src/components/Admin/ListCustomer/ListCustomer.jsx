import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from "./../../../img/workIcon/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "./../../../img/workIcon/ArrowRight.svg";
import MyOrdersCard from "./MyOrdersCard/MyOrdersCard";
import axios from 'axios';

import "./ListCustomer.css";

export default function ListCustomer() {
    const [page, setPage] = useState(1);
    const [openStates, setOpenStates] = useState({});
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userResponse = await axios.get(`http://localhost:5251/api/User`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setAllUsers(userResponse.data);
                console.log(userResponse.data);
            } catch (error) {
                console.error('Error fetching user orders:', error);
            }

        };
        fetchUserData();
    }, []);

    const pageSize = 4;
    const quantityPage = Math.ceil(allUsers.length / pageSize);

    const [pageInfo, setPageInfo] = useState([]);

    useEffect(() => {
        setPageInfo(allUsers.slice((page - 1) * pageSize, page * pageSize));
        setOpenStates({});
    }, [page, allUsers]);

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
            <h2>Список клієнтів</h2>
            {pageInfo.length > 0 ? (
                pageInfo.map((user, index) => (
                    <MyOrdersCard
                        key={user.User_Id + "-" + index}
                        user={user}
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