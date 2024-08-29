import PasswordInput from "../../LogIn/PasswordInput/PasswordInput";
import { Link, useNavigate } from 'react-router-dom';
import logo from "./../../../img/Logo.svg";

import "./CreateNewPass.css";

export default function CreateNewPass() {
    const navigate = useNavigate();

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
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <PasswordInput text="Новий пароль" />
                </div>
                <div className="form-group">
                    <PasswordInput text="Підтвердити пароль" />
                </div>
                <button className="login-page__btn" type="submit"><h4>Войти</h4></button>
            </form>
        </div>
    );
}