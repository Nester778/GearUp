import React, { useState } from "react";
import bg from "./../../img/Reviews/ReviewsBG.png";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import UserIcon1 from "./../../img/Reviews/CardItem/User1.png";
import UserIcon2 from "./../../img/Reviews/CardItem/User2.png";
import UserIcon3 from "./../../img/Reviews/CardItem/User3.png";
import UserIcon4 from "./../../img/Reviews/CardItem/User4.png";
import UserIcon5 from "./../../img/Reviews/CardItem/User5.png";
import UserIcon6 from "./../../img/Reviews/CardItem/User6.png";

import "./Reviews.css";
import ReviewsCard from "../ReviewsCard/ReviewsCard";

export default function Reviews() {
    const carSize = 525;
    const [move, setMove] = useState(0);

    const info = [
        {
            auto: "Ford F-150",
            stars: 4,
            userIcon: UserIcon1,
            username: "Олександр Н.",
            service: "Шиномонтажні послуги",
            grade: "Неймовірно задоволений",
            review: "GearUp - це місце, де ви можете впевнено довірити свій автомобіль. " +
                "Їхня команда завжди готова надати професійні поради та швидко вирішити будь-які проблеми. " +
                "Я вражений якістю обслуговування та ввічливим ставленням до клієнтів. Рекомендую з усієї душі!",
            date: "3 дні тому",
        },
        {
            auto: "Tesla Model 3",
            stars: 5,
            userIcon: UserIcon2,
            username: "Ірина М.",
            service: "Обслуговування системи кондиціонування",
            grade: "Дуже вдячна",
            review: "Велика подяка команді GearUp за чудову роботу! Приємно було спілкуватися з професіоналами, які чітко розуміють свою справу. Вони виконали ремонт мого автомобіля оперативно і без жодних проблем. Я впевнена, що знову звернуся до них у майбутньому. Тепер мій автомобіль готовий до літніх поїздок. Дякую, GearUp!",
            date: "5 дні тому",
        },
        {
            auto: "Ford Focus",
            stars: 5,
            userIcon: UserIcon3,
            username: "Михайло К.",
            service: "Обслуговування підвіски",
            grade: "Відмінні фахівці",
            review: "GearUp - це безсумнівно найкращий автосервіс, який я коли-небудь використовував. Вони не лише забезпечили мене якісними запчастинами та ефективним обслуговуванням, але й надали відмінну консультацію з усіх питань, що стосувалися мого автомобіля. З задоволенням рекомендую їх усім своїм друзям і знайомим!",
            date: "Тиждень тому",
        },
        {
            auto: "Volkswagen Golf",
            stars: 5,
            userIcon: UserIcon4,
            username: "Наталія М.",
            service: "Заміна гальмівних колодок",
            grade: "Гарний результат",
            review: "Мій Volkswagen Golf потребував заміни гальмівних колодок, і я обрала GearUP для цієї послуги. Результат перевершив мої очікування: швидко, якісно та за доступною ціною. Тепер мій автомобіль знову на шляху до безпечних подорожей. Дякую, GearUp! Після першого візиту до GearUp, я відчула значну різницю у роботі мого авто. Їхні фахівці виявились дуже компетентними та ввічливими.",
            date: "Тиждень тому",
        },
        {
            auto: "BMW 3 Series",
            stars: 5,
            userIcon: UserIcon5,
            username: "Максим Л.",
            service: "Перевірка двигуна",
            grade: "Ревень обслуговування вражає",
            review: "Як власник авто вже багато років, GearUp вражає своєю професіональною підготовкою та рівнем обслуговування. Вони завжди готові вирішити будь-які технічні проблеми мого автомобіля з максимальною увагою до деталей.Фахівці провели докладну діагностику і виявили незначну проблему, яку вирішили миттєво. Вражає їхня увага до деталей та професіоналізм. Рекомендую!",
            date: "2 тижні тому",
        },
        {
            auto: "Toyota Corolla",
            stars: 5,
            userIcon: UserIcon6,
            username: "Олена Г.",
            service: "Перевірка двигуна",
            grade: "Неймовірно задоволений",
            review: "GearUP - це справжній зберігач часу та грошей. Їхні ціни адекватні, а якість обслуговування завжди на вищому рівні. Моя Toyota Corolla потребувала перевірки стану ременя ГРМ, і я звернулася до GearUP. Вони провели докладну перевірку та забезпечили високий рівень обслуговування. Дякую, GearUp, за вашу чудову роботу!",
            date: "2 тижні тому",
        },
    ]

    const moveLeft = () => {
        if (move < 0) {
            setMove(move + carSize);
        }
        else {
            setMove((info.length - 2) * carSize * -1);
        }
    }

    const moveRight = () => {
        console.log((info.length - 2) * carSize * -1)
        if (move > (info.length - 2) * carSize * -1) {
            setMove(move - carSize);
        }
        else {
            setMove(0);
        }
    }

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
                            <div className="reviews__sleder-window">
                                <div style={{
                                    transform: `translateX(${move}px)`
                                }} className="reviews__sleder-window-item-container">
                                    {info.map(item =>
                                        <ReviewsCard reviewsCardInfo={item} />
                                    )}
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