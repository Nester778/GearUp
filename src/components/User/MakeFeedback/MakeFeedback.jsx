import { useEffect, useState } from 'react';
import { UserRound, Plus, Minus } from 'lucide-react';
import { ReactComponent as Star } from "./../../../img/icon/Star.svg";
import { ReactComponent as Cars } from "./../../../img/user/Cars.svg";
import { ReactComponent as Engine } from "./../../../img/workIcon/engine.svg";
import { ReactComponent as Suspension } from "./../../../img/workIcon/suspension.svg";
import { ReactComponent as Body } from "./../../../img/workIcon/body.svg";
import { ReactComponent as Electronics } from "./../../../img/workIcon/electronics.svg";
import { ReactComponent as Tire } from "./../../../img/workIcon/tire.svg";
import { ReactComponent as CarWash } from "./../../../img/workIcon/carWash.svg";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import axios from 'axios';


import "./MakeFeedback.css";

export default function MakeFeedback() {
    const { userData, userCarData } = useUser();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [grade, setGrade] = useState(0);
    const [feedbackTitle, setFeedbackTitle] = useState();
    const [feedbackContent, setFeedbackContent] = useState();
    const currentDate = new Date();

    const navigate = useNavigate();

    const months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Липня', 'Червня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];

    const services = [
        {
            icon: <Engine className="secvice-icon" />,
            title: "Діагностика та ремонт двигуна",
        },
        {
            icon: <Suspension className="secvice-icon" />,
            title: "Ремонт підвіски та гальмівної системи",
        },
        {
            icon: <Body className="secvice-icon" />,
            title: "Кузовний ремонт",
        },
        {
            icon: <Electronics className="secvice-icon" />,
            title: "Ремонт електричної системи",
        },
        {
            icon: <Tire className="secvice-icon" />,
            title: "Шиномонтажні послуги",
        },
        {
            icon: <CarWash className="secvice-icon" />,
            title: "Догляд за авто",
        },
    ];



    const fetchingOrder = async () => {
        const feedbackData = {
            UserName: userData.Firstname,
            CarBrand: userCarData.CarBrand,
            CarModel: userCarData.CarModel,
            Grade: grade,
            Service: services[selectedIndex].title,
            Title: feedbackTitle,
            Content: feedbackContent,
            CreatingDate: `${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`
        }

        try {
            const response = await axios.post('https://maingearupapi.azurewebsites.net/api/feedback/create', feedbackData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            navigate('/GearUp');
            console.log('Order created successfully:', response.data);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    }

    const starArray = Array.from({ length: 5 }, (_, index) => {
        return <Star className="makeOrder-star" />;
    });

    const handleSelectService = (index) => {
        setSelectedIndex(index);
    }

    return (
        <div className="makeOrder">
            <h2 className='makeOrder__title'>Залишити відгук</h2>
            <div className="makeOrder__content-wrapper">
                <h3 className='makeOrder__order-number'>Мій відгук</h3>
                <div className="makeOrder__content">
                    <div className="makeOrder__user">
                        <div className="makeOrder__user-icon">
                            <UserRound size={60} color='#EAB308' strokeWidth={1} />
                        </div>
                        <div className="makeOrder__user-content">
                            <div className="makeOrder__user-info">
                                <h5>Клієнт</h5>
                                <h4>{userData.Firstname} {userData.Surname}</h4>
                            </div>
                            <div className="makeOrder__user-info">
                                <h5>Номер телефону</h5>
                                <h4>{userData.PhoneNumber}</h4>
                            </div>
                            <div className="makeOrder__user-info">
                                <h5>Ел. пошта</h5>
                                <h4>{userData.Email}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="makeOrder__user-car">
                        <div className="makeOrder__user-car-icon">
                            <Cars style={{ stroke: "#EAB308" }} />
                        </div>
                        <div className="makeOrder__user-car-content">
                            <h5>{userCarData.CarBrand} {userCarData.CarModel}</h5>
                        </div>
                    </div>
                    <div className="makeFeedback__services">
                        <h3 className="makeFeedback__services-title">Послуга, яку надали</h3>
                        <div className="makeFeedback__service">
                            {services.map((item, index) => (
                                <div className={`makeFeedback__service-card ${index === selectedIndex ? "actice-feedback-service" : ""}`}
                                    onClick={() => handleSelectService(index)}
                                >
                                    {item.icon}
                                    <h4>{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="makeFeedback__text">
                        <h3 className="makeFeedback__text-title">Коментар</h3>
                        <div className="makeFeedback__text-user-title">
                            <input onChange={(e) => setFeedbackTitle(e.target.value)} className="makeFeedback__text-user-title-input" type="text" placeholder='Заголовок' />
                        </div>
                        <div className="makeFeedback__text-user-content">
                            <textarea onChange={(e) => setFeedbackContent(e.target.value)} className="makeFeedback__text-user-content-textarea" name="" id="" placeholder='Текст'></textarea>
                        </div>
                    </div>

                    <div className="makeOrder__grade">
                        <div className="makeOrder__grade-title">
                            <h3>Оцінка</h3>
                        </div>
                        <h4>Оцініть якість роботи та обслуговування</h4>
                        <div className="makeOrder__grade-body">
                            <div className="makeOrder__grade-body-number">
                                <h1>{grade + 1}/5</h1>
                            </div>
                            <div className="makeOrder__grade-body-stars">
                                {starArray.map((item, index) => (
                                    <div onClick={() => setGrade(index)} className={`${index <= grade ? "makeOrder-active-stars" : ""}`}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="makeOrder__accept">
                        <div className="makeOrder__accept-btn" onClick={fetchingOrder}>
                            <h3>Залишити відгук</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}