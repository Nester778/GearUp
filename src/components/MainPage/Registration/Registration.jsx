import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import LeftImg from "./../../../img/Registration/Left-img.png";
import RightImg from "./../../../img/Registration/Right-img.png";

import { UserRound, CarFront, Clock4, Phone, NotebookText, CalendarDays } from 'lucide-react';

import "./Registration.css";
import PasswordInput from '../../LogIn/PasswordInput/PasswordInput';

export default function Registration() {
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleRegister = async () => {
        console.log(firstname, surname, phoneNumber, email, pass, role);
        try {
            if (pass === confirmPass) {

                const response = await axios.post('http://localhost:5251/api/auth/register', {
                    firstname,
                    surname,
                    phoneNumber,
                    email,
                    pass,
                    role,
                });
                console.log('Registration successful', response.data);
                navigate('/LogIn');
            }
            else {
                console.log('Different pass', pass, confirmPass);
            }

        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                console.error('Error registering', error);
            }
        }
    };
    return (
        <div className="registration-wrapper">
            <div className="registration__bgImg">
                <div className="left-img">
                    <img src={LeftImg} alt="left-img" />
                </div>

            </div>
            <div className="container-wrapper">
                <div className="container">
                    <div className="main-registration-wrapper">
                        <div className="registration">
                            <h2>Онлайн запис</h2>
                            <div className="registration-desc">
                                <h5>Заповніть форму замовлення, вкажіть дату та час обслуговування,
                                    та отримайте підтвердження запису на виконання послуг</h5>
                            </div>
                            <div>
                                <div className="form-group">
                                    <div className="name-wrapper">
                                        <div className="password-input-container">
                                            <input
                                                type="text"
                                                placeholder="Ім’я"
                                                className="password-input"
                                                onChange={(e) => setFirstname(e.target.value)}
                                            />
                                        </div>
                                        <div className="password-input-container">
                                            <input
                                                type="text"
                                                placeholder="Прізвище"
                                                className="password-input"
                                                onChange={(e) => setSurname(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="password-input-container">
                                        <input
                                            type="text"
                                            placeholder="Номер телефону"
                                            className="password-input"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="password-input-container">
                                        <input
                                            type="text"
                                            placeholder="Електронна пошта"
                                            className="password-input"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <PasswordInput text="Пароль" password={pass} setPassword={setPass} />
                                </div>
                                <div className="form-group">
                                    <PasswordInput text="Підтвердіть пароль" password={confirmPass} setPassword={setConfirmPass} />
                                </div>

                                <button onClick={handleRegister} className="login-page__btn" type="submit"><h4>Зареєструватися</h4></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}