import PasswordInput from "../LogIn/PasswordInput/PasswordInput";
import { Link, useNavigate } from 'react-router-dom';
import logo from "./../../img/Logo.svg";
import CustomCheckbox from "../LogIn/CustomCheckbox/CustomCheckbox";
import React, { useState } from 'react';
import axios from 'axios';

import "./Registration.css"

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
                const response = await axios.post('https://maingearupapi.azurewebsites.net/api/auth/register', {
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
        <div className="login-page">
            {error && <div className="error">{error}</div>}
            <Link to="/GearUp">
                <div className="login-page__logo">
                    <img src={logo} alt="" />
                </div>
            </Link>
            <h3>Реєстрація особистого кабінету</h3>
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
                <div className="login-page__checkBox-wrapper">
                    <div className="login-page__text-wrapper">
                        <label className="checkBox-wrapper">
                            <CustomCheckbox />
                            <h4>Я згоден(на) із </h4>
                        </label>
                        <Link to="/GearUp"><h4 className="link"> політикою конфіденційності</h4></Link>
                    </div>
                </div>
                <button onClick={handleRegister} className="login-page__btn" type="submit"><h4>Зареєструватися</h4></button>
            </div>
            <Link to="/LogIn">
                <div className="login-page__registration-wrapper">
                    <h4>Войти</h4>
                </div>
            </Link>
        </div>
    );
}