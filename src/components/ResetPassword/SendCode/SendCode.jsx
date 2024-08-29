import "./SendCode.css";
import { Link, useNavigate } from 'react-router-dom';
import logo from "./../../../img/Logo.svg";
import arrow from "./../../../img/icon/Arrow-left.svg";

export default function SendCode() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/EnterCode');
    };

    return (
        <div className="login-page">
            <Link to="/GearUp">
                <div className="login-page__logo">
                    <img src={logo} alt="Logo" />
                </div>
            </Link>
            <h3>Відновлення пароля</h3>
            <div className="resetPassword__desc">
                <h5>
                    Для відновлення пароля введіть свою пошту, щоб ми змогли відправити
                    вам код підтвердження
                </h5>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="password-input-container">
                        <input
                            type="text"
                            placeholder="Електронна пошта"
                            className="password-input"
                        />
                    </div>
                </div>
                <button className="login-page__btn reset-btn" type="submit">
                    <h4>Відправити код</h4>
                </button>
            </form>
            <Link to="/LogIn">
                <div className="login-page__registration-wrapper reset-link">
                    <img src={arrow} alt="Arrow" />
                    <h4>Назад</h4>
                </div>
            </Link>
        </div>
    );
}