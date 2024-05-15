import LeftImg from "./../../img/Registration/Left-img.png";
import RightImg from "./../../img/Registration/Right-img.png";

import { UserRound, CarFront, Clock4, Phone, NotebookText, CalendarDays } from 'lucide-react';

import "./Registration.css";

export default function Registration() {
    return (
        <div className="registration-wrapper">
            <div className="registration__bgImg">
                <div className="left-img">
                    <img src={LeftImg} alt="left-img" />
                </div>
                <div className="right-img">
                    <img src={RightImg} alt="right-img" />
                </div>
            </div>
            <div className="container-wrapper">
                <div className="container">
                    <div className="registration">
                        <h2>Онлайн запис</h2>
                        <div className="registration-desc">
                            <h5>Заповніть форму замовлення, вкажіть дату та час обслуговування,
                                та отримайте підтвердження запису на виконання послуг</h5>
                        </div>
                        <form className="registration__form" action="#!">
                            <div className="registration__form-inputs">
                                <div className="registration__form-inputs-left-col">
                                    <div className="form-input">
                                        <div className="form-input-img-wrapper">
                                            <UserRound size={24} color="#EAB308" />
                                        </div>
                                        <input placeholder="Ваше ім’я" />
                                    </div>
                                    <div className="form-input">
                                        <div className="form-input-img-wrapper">
                                            <CarFront size={24} color="#EAB308" />
                                        </div>
                                        <input placeholder="Автомобіль" />
                                    </div>
                                    <div className="form-input">
                                        <div className="form-input-img-wrapper">
                                            <Clock4 size={24} color="#EAB308" />
                                        </div>
                                        <input placeholder="Час візиту" />
                                    </div>
                                </div>
                                <div className="registration__form-inputs-right-col">
                                    <div className="form-input">
                                        <div className="form-input-img-wrapper">
                                            <Phone size={24} color="#EAB308" />
                                        </div>
                                        <input placeholder="Номер телефону" />
                                    </div>
                                    <div className="form-input">
                                        <div className="form-input-img-wrapper">
                                            <NotebookText size={24} color="#EAB308" />
                                        </div>
                                        <input placeholder="Послуга" />
                                    </div>
                                    <div className="form-input">
                                        <div className="form-input-img-wrapper">
                                            <CalendarDays size={24} color="#EAB308" />
                                        </div>
                                        <input placeholder="Дата візиту" />
                                    </div>
                                </div>
                            </div>
                            <div className="btn-wrapper">
                                <div className="btn">
                                    <h4>Відправити заявку</h4>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}