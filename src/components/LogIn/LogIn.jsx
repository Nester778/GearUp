import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

import logo from "./../../img/Logo.svg";
import "./LogIn.css";
import PasswordInput from "./PasswordInput/PasswordInput";
import CustomCheckbox from './CustomCheckbox/CustomCheckbox';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5251/api/auth/login', {
                email,
                pass
            });

            const token = response.data.Token;
            if (token) {
                localStorage.setItem('token', token);
                console.log('Token saved to localStorage:', token);
            } else {
                console.error('No token found in response');
            }

            console.log('Login successful', response.data);
            navigate('/GearUp');
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/GearUp');
    };
    return (
        <div className="login-page">
            <Link to="/GearUp">
                <div className="login-page__logo">
                    <img src={logo} alt="" />
                </div>
            </Link>
            <h3>Вхід до особистого кабінету</h3>
            <div>
                <div className="form-group">
                    <div className="password-input-container">
                        <input
                            type="text"
                            placeholder="Електронна пошта"
                            value={email}
                            className="password-input"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <PasswordInput text="Пароль" password={pass} setPassword={setPass} />
                </div>
                {/*
                <div className="login-page__checkBox-wrapper">
                    <label className="checkBox-wrapper">
                        <CustomCheckbox />
                        <span><h4>Запам’ятати мене</h4></span>
                    </label>
                    <Link to="/SendCode">
                        <h4 className="login-page__reset-password">Забули пароль?</h4>
                    </Link>
                </div>
                */}
                <button onClick={handleLogin} className="login-page__btn" type="submit"><h4>Войти</h4></button>
            </div>
            <Link to="/Registration">
                <div className="login-page__registration-wrapper">
                    <h4>Зареєструватися</h4>
                </div>
            </Link>
        </div>
    );
}