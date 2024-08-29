import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReactComponent as Time } from "./../../../../img/user/cardIcon/time.svg";
import { ReactComponent as CalendarIcon } from "./../../../../img/user/cardIcon/date.svg";

import './Calendar.css';

export default function Calendar({ onSelectTime, onSelectDay }) {
    const currentDate = new Date();
    const oneWeekLater = new Date();
    oneWeekLater.setDate(currentDate.getDate() + 6);

    const [getDate, setDate] = useState(currentDate);
    const [selectedTime, setSelectedTime] = useState(null); // Состояние для выбранного времени

    const months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Липня', 'Червня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];
    const daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Суббота'];
    const daysOfWeekShort = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const time = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
    let arrOfWeek = [];

    for (let i = 0; i < 7; i += 1) {
        let day = new Date();
        day.setDate(currentDate.getDate() + i);

        let dayInfo = {
            day: daysOfWeekShort[day.getDay()],
            date: day.getDate(),
            month: months[day.getMonth()],
        };

        arrOfWeek.push(dayInfo);
    }

    const handleRemoveDate = () => {
        let newDay = new Date(getDate);
        newDay.setDate(getDate.getDate() - 1);

        if (daysOfWeekShort[newDay.getDay()] === 'Нд') {
            newDay.setDate(getDate.getDate() - 2);
        }

        if (newDay.getDate() >= currentDate.getDate()) {
            setDate(newDay);
            onSelectDay(`${newDay.getDate()} ${months[newDay.getMonth()]} ${newDay.getFullYear()}`);
        }
    };

    const handleAddDate = () => {
        let newDay = new Date(getDate);
        newDay.setDate(getDate.getDate() + 1);

        if (daysOfWeekShort[newDay.getDay()] === 'Нд') {
            newDay.setDate(getDate.getDate() + 2);
        }

        if (newDay <= oneWeekLater) {
            setDate(newDay);
            onSelectDay(`${newDay.getDate()} ${months[newDay.getMonth()]} ${newDay.getFullYear()}`);
        }
    };

    const handleSetDay = (index) => {
        let a = index - (getDate.getDate() - currentDate.getDate());
        let newDay = new Date(getDate);
        newDay.setDate(getDate.getDate() + a);

        if (daysOfWeekShort[newDay.getDay()] !== 'Нд') {
            setDate(newDay);
            onSelectDay(`${newDay.getDate()} ${months[newDay.getMonth()]} ${newDay.getFullYear()}`);
        }
    };

    const handleSelectTime = (time) => {
        setSelectedTime(time);
        onSelectTime(time);
    };

    return (
        <div className="calendar">
            <div className="calendar__selected">
                <div className="calendar__selected-time-wrapper">
                    <div className="calendar__selected-time">
                        <Time style={{ width: '25px', height: '25px' }} />
                        <h4>{selectedTime}</h4>
                    </div>
                </div>
                <div className="calendar__selected-day-wrapper">
                    <div className="calendar__selected-day">
                        <CalendarIcon style={{ width: '25px', height: '25px' }} />
                        <h4>{getDate.getDate()} {months[getDate.getMonth()]} {getDate.getFullYear()}</h4>
                    </div>
                </div>
            </div>
            <div className="calendar__header">
                <ChevronLeft color='#EAB308' onClick={handleRemoveDate} />
                <div className="calendar__header-text">
                    <h3>{daysOfWeek[getDate.getDay()]}, {getDate.getDate()} {months[getDate.getMonth()]}</h3>
                </div>
                <ChevronRight color='#EAB308' onClick={handleAddDate} />
            </div>
            <div className="calendar__day-wrapper">
                <div className="calendar__day">
                    {arrOfWeek.map((item, index) => (
                        <div onClick={() => handleSetDay(index)}
                            className={`calendar__day-item ${(item.date === getDate.getDate() &&
                                item.month === months[getDate.getMonth()]) && item.day !== "Нд" ? "active-day" : ""}
                                 ${item.day === "Нд" ? "disable-day" : ""}`}
                            key={index}>
                            <h4>{item.day}</h4>
                            <h4>{item.date}</h4>
                            <h4>{item.month.slice(0, 3)}.</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className="calendar__time-wrapper">
                <div className="calendar__time">
                    {time.map((item, index) => (
                        <div
                            className={`calendar__time-item ${selectedTime === item ? "active-day" : ""}`}
                            onClick={() => handleSelectTime(item)}
                            key={index}>
                            <h4>{item}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}