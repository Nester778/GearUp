import { LaptopMinimal, Timer, ThumbsUp } from 'lucide-react';

import "./ChooseUs.css";

export default function ChooseUs() {

    return (
        <div className="container">
            <h2 className='chooseUs__title'>Чому обирають саме нас?</h2>
            <div className="chooseUs">
                <div className="chooseUs__item">
                    <div className="chooseUs__item-img">
                        <LaptopMinimal size={42} color='#fff' />
                    </div>
                    <div className="chooseUs__item-text">
                        <h3>Зручність</h3>
                        <h5>Клієнт подає свою заявку на онлайн запис до обраного СТО, після чого заявка
                            обробляється, включаючи вибір дати та часу обслуговування,
                            та надсилається підтвердження про успішну реєстрацію на виконання послуг.
                        </h5>
                    </div>
                </div>
                <div className="chooseUs__item">
                    <div className="chooseUs__item-img">
                        <Timer size={42} color='#fff' />
                    </div>
                    <div className="chooseUs__item-text">
                        <h3>Швидкість</h3>
                        <h5>Своєчасне виконання замовлення - це ключовий аспект нашої роботи.
                            Ми ретельно контролюємо процес виконання кожного обслуговування,
                            починаючи з моменту консультації до моменту передачі автомобіля клієнту.
                        </h5>
                    </div>
                </div>
                <div className="chooseUs__item">
                    <div className="chooseUs__item-img">
                        <ThumbsUp size={42} color='#fff' />
                    </div>
                    <div className="chooseUs__item-text">
                        <h3>Якість</h3>
                        <h5>Висока якість виконаної роботи є результатом використання сучасних
                            технологій та уважного підходу до деталей і професійного майстерності робітників
                            нашого автосервісу, які мають великий досвід у своїй галузі.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}