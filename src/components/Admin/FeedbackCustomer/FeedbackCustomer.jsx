import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from "./../../../img/workIcon/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "./../../../img/workIcon/ArrowRight.svg";
import MyOrdersCard from "./MyOrdersCard/MyOrdersCard";
import axios from 'axios';

import "./FeedbackCustomer.css";

export default function FeedbackCustomer() {
    const [page, setPage] = useState(1);
    const [openStates, setOpenStates] = useState({});
    const [rewieData, setRewieData] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`http://localhost:5251/api/Feedback`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setRewieData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Ошибка при загрузке отзывов", error);
            }
        };

        fetchReviews();
    }, []);

    const pageSize = 4;
    const quantityPage = Math.ceil(rewieData.length / pageSize);

    const [pageInfo, setPageInfo] = useState([]);

    useEffect(() => {
        setPageInfo(rewieData.slice((page - 1) * pageSize, page * pageSize));
        setOpenStates({});
    }, [page, rewieData]);

    const handleDeleteFeedback = (feedbackId) => {
        setRewieData(prevData => prevData.filter(order => order.Feedback_Id !== feedbackId));
    };

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
            <h2>Відгуки клієнтів</h2>
            {pageInfo.length > 0 ? (
                pageInfo.map((order, index) => (
                    <MyOrdersCard
                        key={order.Feedback_Id + "-" + index}
                        order={order}
                        openStates={openStates}
                        setOpenStates={setOpenStates}
                        onDeleteFeedback={handleDeleteFeedback} // Передача функции удаления
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