import React, { useState, useEffect } from "react";
import ServicesImg from "./../../../img/Services.png";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Engine from "./../../../img/ServicesItem/engine.png";
import Oil from "./../../../img/ServicesItem/oil.png";
import Suspension from "./../../../img/ServicesItem/suspension.png";
import Tires from "./../../../img/ServicesItem/tires.png";
import MockСar from "./../../../img/ServicesItem/mockСar.png";
import BodyRepair from "./../../../img/ServicesItem/bodyRepair.png";

import "./Services.css";
import ServicesCard from "../ServicesCard/ServicesCard";

export default function Services() {
    const [pageSize, setPageSize] = useState(3);
    const pageWidth = 465;
    const [sizeCard, setSizeCard] = useState(0);
    const [page, setPage] = useState(-39);
    const [activePage, setActivePage] = useState(0);
    const [serviceType, setServiceType] = useState(null);

    let cardInfo = [
        {
            title: "Ремонт та диагностика двигуна",
            img: Engine,
            price: 900,
            days: "1-5 днів",
            desc: "Комплексний процес, що включає в себе діагностику проблеми та подальший ремонт."
                + " Для цього може бути проведено аналіз звуку, "
                + "вібрацій, викидів, а також огляд всіх компонентів двигуна.",
            type: 1,
        },
        {
            title: "Ремонт підвіски",
            img: Suspension,
            price: 800,
            days: "1-2 дні",
            desc: "Огляд стану амортизаторів, пружин, підшипників коліс, розвал-сходження коліс, зносу або " +
                "пошкодження компонентів підвіски. Може включати заміну або ремонт пошкоджених деталей",
            type: 1,
        },
        {
            title: "Кузовний ремонт",
            img: BodyRepair,
            price: 300,
            days: "1-7 днів",
            desc: "Може включати виправлення деформацій, подряпин, вм'ятин," +
                " а також ремонт корозійних уражень. Також може входити" +
                " фарбування або покриття автомобільного кузова для відновлення його зовнішнього вигляду.",
            type: 2,
        },
        {
            title: "Шиномонтажні послуги",
            img: Tires,
            price: 300,
            days: "1-2 години",
            desc: "Може включати ремонт шин в разі пошкодження, такого як " +
                "проколи або порізи. Виявлення пошкодження, внутрішній" +
                " або зовнішній ремонт, та перевірка герметичності. Після цього виконується процедура балансування",
            type: 1,
        },
        {
            title: "Мийка автомобіля",
            img: MockСar,
            price: 200,
            days: "1-2 години",
            desc: "Очищення зовнішньої поверхні автомобіля від бруду, " +
                "пилу, пташиного посліду та інших забруднень." +
                " Може бути здійснено різними способами, такими як ручне миття водою та миючим засобом, тощо.",
            type: 2,
        },
        {
            title: "Заміна мастила та фільтрів",
            img: Oil,
            price: 400,
            days: "1 година",
            desc: "Видалення старого мастила і фільтрів і їх заміну на нові." +
                " Під час процесу заміни мастила фахівці також перевіряють" +
                " рівень мастильних матеріалів та виявляють можливі ознаки проблем з двигуном. ",
            type: 1,
        },
    ]

    const filterCardsByType = (type) => {

        if (type === null) {
            return cardInfo;
        } else {
            return cardInfo.filter(item => item.type === type);
        }
    };

    const muveLeft = () => {
        if (sizeCard > 0) {
            setSizeCard(sizeCard - 1);
            setPage(page + pageWidth);
            setActivePage(activePage - 1);
        } else {
            setSizeCard(filterCardsByType(serviceType).length - pageSize);
            if (filterCardsByType(serviceType).length > 3) {
                setPage(-39 - pageWidth * (filterCardsByType(serviceType).length - pageSize));
            }
            setActivePage(filterCardsByType(serviceType).length - pageSize);
        }
    }

    const muveRight = () => {
        if (sizeCard < filterCardsByType(serviceType).length - pageSize) {
            setSizeCard(sizeCard + 1);
            setPage(page - pageWidth);
            setActivePage(activePage + 1);
        } else {
            setSizeCard(0);
            setPage(-39);
            setActivePage(0);
        }
    }

    const handleServiceTypeChange = (type) => {
        setPage(-39);
        setServiceType(type);
        setActivePage(0); // Сброс активной страницы при изменении типа услуги
        setSizeCard(0); // Сброс размера карточек при изменении типа услуги
    };

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setPageSize(1);
        } else if (window.innerWidth < 1500) {
            setPageSize(2);
        } else {
            setPageSize(3);
        }
    }, []);

    return (
        <div className="services__bg-wrapper">
            <div className="container">
                <div className="services__cards-window-wrapper">
                    <div className="text-wrapper services">
                        <div className="services__header">
                            <h1>Послуги які ми пропонуємо</h1>
                            <div className="services__header-btns">
                                <div className={`services__header-btn ${serviceType === null ? "active-btn" : ""}`} onClick={() => handleServiceTypeChange(null)}>
                                    <h5>Всі пропозиції</h5>
                                </div>
                                <div className={`services__header-btn ${serviceType === 1 ? "active-btn" : ""}`} onClick={() => handleServiceTypeChange(1)}>
                                    <h5>Технічне обслуговування</h5>
                                </div>
                                <div className={`services__header-btn ${serviceType === 2 ? "active-btn" : ""}`} onClick={() => handleServiceTypeChange(2)}>
                                    <h5>Зовнішній вигляд</h5>
                                </div>
                            </div>
                        </div>
                        <div className="services__cards-window-wrapper">
                            <div className="services__cards-wrapper">
                                <div onClick={muveLeft} className="services__cards-btn">
                                    <ChevronLeft size={24} color="#A3A3A3" />
                                </div>

                                <div className="services__cards-window" style={{ width: `${pageWidth * pageSize - 78}px` }}>
                                    <div style={{
                                        transform: `translateX(${page}px)`,
                                        width: `${filterCardsByType(serviceType).length * pageWidth}px`, // Задаем ширину контейнера для всех карточек
                                    }} className="services__cards-container">
                                        {filterCardsByType(serviceType).map((item, index) => (
                                            <ServicesCard key={index} serviceItem={item} />
                                        ))}
                                    </div>
                                </div>

                                <div onClick={muveRight} className="services__cards-btn">
                                    <ChevronRight size={24} color="#A3A3A3" />
                                </div>
                            </div>
                        </div>
                        <div className="services__pages-wrapper">
                            <div className="services__pages">
                                {Array.from({ length: Math.ceil(filterCardsByType(serviceType).length - pageSize + 1) }).map((_, index) => (
                                    <div key={index} className={`services__page ${index === activePage ? "page-active" : ""}`}></div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}