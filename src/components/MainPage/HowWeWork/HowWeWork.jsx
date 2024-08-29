import React from "react";
import HowWeWorkCard from "./../HowWeWorkCard/HowWeWorkCard";
import HowWeWork1 from "./../../../img/icon/HowWeWork1.svg";
import HowWeWork2 from "./../../../img/icon/HowWeWork2.svg";
import HowWeWork3 from "./../../../img/icon/HowWeWork3.svg";
import HowWeWork4 from "./../../../img/icon/HowWeWork4.svg";
import arrowUp from "./../../../img/icon/ArrowUp.svg";
import arrowDown from "./../../../img/icon/ArrowDown.svg";
import "./HowWeWork.css";

export default function HowWeWork() {
    const item = [
        {
            img: HowWeWork1,
            title: "Заявка",
            desc: "Відправляєье заявку, заповнивши форму на сайті",
        },
        {
            img: HowWeWork2,
            title: "Запис",
            desc: "Надаємо консультації клієнтам, визначаємо дату та час обслуговування їх автомобіля.",
        },
        {
            img: HowWeWork3,
            title: "Обслуговування",
            desc: "Виконуємо діагностику або ремонт Вашого автомобіля.",
        },
        {
            img: HowWeWork4,
            title: "Оплата",
            desc: "Після огляду автомобіля клієнт оплачує послугу готівковим чи безготівковим способом",
        },
    ];
    return (
        <div className="container">
            <div className="howWeWork">
                <h2>Як ми працюємо</h2>
                <div className="howWeWork__cards-wrapper">
                    <HowWeWorkCard cardItem={item[0]} />
                    <img className="arrowUp" src={arrowUp} alt="Arrow Up" />
                    <div className="howWeWork__card-secondary">
                        <HowWeWorkCard cardItem={item[1]} />
                    </div>
                    <img className="arrowDown" src={arrowDown} alt="Arrow Down" />
                    <HowWeWorkCard cardItem={item[2]} />
                    <img className="arrowUp" src={arrowUp} alt="Arrow Up" />
                    <div className="howWeWork__card-secondary">
                        <HowWeWorkCard cardItem={item[3]} />
                    </div>
                </div>
            </div>
        </div>
    );
}