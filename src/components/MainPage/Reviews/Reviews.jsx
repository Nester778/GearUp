import React, { useState, useEffect } from "react";
import axios from "axios";
import bg from "./../../../img/Reviews/ReviewsBG.png";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "./Reviews.css";
import ReviewsCard from "../ReviewsCard/ReviewsCard";

export default function Reviews() {
    const [pageSize, setPageSize] = useState(2);
    const carSize = 465;
    const [move, setMove] = useState();
    const [rewieData, setRewieData] = useState([]); // Инициализируем как пустой массив

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`https://maingearupapi.azurewebsites.net/api/Feedback`, {
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

    const moveLeft = () => {
        if (move < 0) {
            setMove(move + carSize);
        } else {
            setMove((rewieData.length - 2) * carSize * -1);
        }
    };

    const moveRight = () => {
        if (move > (rewieData.length - 2) * carSize * -1) {
            setMove(move - carSize);
        } else {
            setMove(0);
        }
    };

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setPageSize(1);
        } else {
            setPageSize(2);
        }
    }, []);

    return (
        <div className="reviews">
            <div className="bg-wrapper">
                <div className="reviews__bgImg">
                    <img src={bg} alt="" />
                </div>
                <div className="reviews__content">
                    <div className="reviews__content-text">
                        <h2>Відгуки клієнтів</h2>
                        <div className="reviews__content-text-desc">
                            <h5>
                                Тут ви знайдете відгуки від наших клієнтів, які діляться своїми враженнями
                                про обслуговування в GearUp. Довіряйте реальним відгукам та переконайтеся в
                                якості обслуговування, яку ми надаємо.
                            </h5>
                        </div>
                    </div>
                    <div className="reviews__content-slider-wrapper">
                        <div className="reviews__content-slider">
                            <div onClick={moveLeft} className="reviews__sleder-btn">
                                <ChevronLeft size={24} color="#A3A3A3" />
                            </div>
                            <div className="reviews__sleder-window" style={{ width: `${pageSize * carSize - 78}px` }}>
                                <div style={{
                                    transform: `translateX(-39px)`
                                }}>
                                    <div style={{
                                        transform: `translateX(${(move)}px)`
                                    }} className="reviews__sleder-window-item-container">
                                        {rewieData.length > 0 ? (
                                            rewieData.map((item, index) => (
                                                <ReviewsCard key={index} reviewsCardInfo={item} />
                                            ))
                                        ) : (
                                            <p>Відгуки не знайдено...</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div onClick={moveRight} className="reviews__sleder-btn">
                                <ChevronRight size={24} color="#A3A3A3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}