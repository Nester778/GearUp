import { useState } from 'react';
import { UserRound } from 'lucide-react';
import { ReactComponent as Cars } from "./../../../img/user/Cars.svg";
import { useNavigate } from 'react-router-dom';
import { useUser } from './../UserContext';
import "./MakeOrder.css";
import ServiceCard from './ServiceCard/ServiceCard';
import Calendar from './Calendar/Calendar';
import axios from 'axios';

export default function MakeOrder() {
    const { userData, userCarData } = useUser();
    const [totalAmount, setTotalAmount] = useState(0);
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDay, setSelectedDay] = useState("");
    const navigate = useNavigate();

    const info = [
        {
            idWork: 0,
            title: "Діагностика та ремонт двигуна",
            days: "1-5 днів",
            services: [
                {
                    title: "Діагностика двигуна",
                    price: 350,
                },
                {
                    title: "Заміна ременя ГРМ",
                    price: 1250,
                },
                {
                    title: "Заміна оливи в двигуні",
                    price: 300,
                },
                {
                    title: "Заміна сальника колінчатого валу",
                    price: 350,
                },
                {
                    title: "Заміна шківа колінчатого валу",
                    price: 300,
                },
                {
                    title: "Заміна сальника розподільчого валу",
                    price: 300,
                },
                {
                    title: "Заміна прокладки ГБЦ",
                    price: 3500,
                },
                {
                    title: "Заміна прокладки клапанної кришки",
                    price: 700,
                },
                {
                    title: "Заміна подушки двигуна",
                    price: 450,
                },
                {
                    title: "Заміна приводного ременя",
                    price: 350,
                },
            ]
        },
        {
            idWork: 1,
            title: "Ремонт підвіски та гальмівної системи",
            days: "1-2 дні",
            services: [
                {
                    title: "Заміна сайлентблоків підрамника",
                    price: 450,
                },
                {
                    title: "Заміна сайлентблоків важеля",
                    price: 700,
                },
                {
                    title: "Заміна кульової опори",
                    price: 400,
                },
                {
                    title: "Заміна пружин",
                    price: 650,
                },
                {
                    title: "Заміна амортизаторів",
                    price: 750,
                },
                {
                    title: "Заміна стійки стабілізатора",
                    price: 300,
                },
                {
                    title: "Заміна важеля",
                    price: 450,
                },
                {
                    title: "Заміна підшипника маточини",
                    price: 700,
                },
                {
                    title: "Заміна маточини",
                    price: 700,
                },
                {
                    title: "Діагностика ходової",
                    price: 350,
                },
            ]
        },
        {
            idWork: 2,
            title: "Кузовний ремонт",
            days: "1-7 днів",
            services: [
                {
                    title: "Рихтування деталей кузова авто;",
                    price: 1500,
                },
                {
                    title: "Заміна деталей кузова",
                    price: 400,
                },
                {
                    title: "Усунення середнього перекосу",
                    price: 5000,
                },
                {
                    title: "Заміна лобового скла",
                    price: 1000,
                },
                {
                    title: "Рихтування автомобіля на стапелі",
                    price: 1500,
                },
                {
                    title: "Зварювання (зварювальні роботи)",
                    price: 500,
                },
                {
                    title: "Ремонт бамперів та пластикових деталей",
                    price: 400,
                },
                {
                    title: "Фарбування авто (повне, локальне)",
                    price: 2500,
                },
                {
                    title: "Повне розбирання авто для повного фарбування",
                    price: 6000,
                },
                {
                    title: "Антикорозійна обробка авто",
                    price: 5000,
                },
            ]
        },
        {
            idWork: 3,
            title: "Ремонт електричної системи",
            days: "1-3 дні",
            services: [
                {
                    title: "Заміна датчика розподільчого валу",
                    price: 350,
                },
                {
                    title: "Заміна датчика колінчатого валу",
                    price: 1250,
                },
                {
                    title: "Заміна свічок розжарювання",
                    price: 300,
                },
                {
                    title: "Заміна свічок запалювання",
                    price: 350,
                },
                {
                    title: "Заміна датчика парктроника",
                    price: 300,
                },
                {
                    title: "Заміна лампочки фари",
                    price: 300,
                },
                {
                    title: "Заміна генератора",
                    price: 3500,
                },
                {
                    title: "Заміна акумулятора",
                    price: 700,
                },
                {
                    title: "Ремонт електропроводки автомобіля",
                    price: 450,
                },
                {
                    title: "Заміна датчика абс",
                    price: 350,
                },
            ]
        },
        {
            idWork: 4,
            title: "Шиномонтажні послуги",
            days: "1-2 години",
            services: [
                {
                    title: "Зняття та установка шин на диски (без балансування)",
                    price: 150,
                },
                {
                    title: "Балансування коліс (1 колесо)",
                    price: 100,
                },
                {
                    title: "Ремонт проколів (1 прокол)",
                    price: 50,
                },
                {
                    title: "Повна перевірка стану шин (1 колесо)",
                    price: 50,
                },
                {
                    title: "Комплексний шиномонтаж (зняття, установка, балансування) (1 колесо)",
                    price: 300,
                },
                {
                    title: "Переустановка коліс на автомобіль під час зміни сезону",
                    price: 300,
                },
                {
                    title: "Розвал-сходження",
                    price: 750,
                },
                {
                    title: "Діагностика тиску в шинах та його налаштування",
                    price: 250,
                },
                {
                    title: "Установка та налаштування системи контролю тиску в шинах (TPMS)",
                    price: 450,
                },
                {
                    title: "Консультація з підбору шин та дисків",
                    price: 0,
                },
            ]
        },
        {
            idWork: 5,
            title: "Догляд за авто",
            days: "1-2 години",
            services: [
                {
                    title: "Стандартна мийка",
                    price: 250,
                },
                {
                    title: "Детальна мийка",
                    price: 500,
                },
                {
                    title: "Чистка та полірування коліс",
                    price: 100,
                },
                {
                    title: "Хімчистка салону",
                    price: 800,
                },
                {
                    title: "Дезінфекція салону",
                    price: 200,
                },
                {
                    title: "Видалення зовнішніх забруднень",
                    price: 300,
                },
                {
                    title: "Мийка двигуна",
                    price: 300,
                },
                {
                    title: "Нанесення захисного покриття",
                    price: 1000,
                },
                {
                    title: "Видалення неприємних запахів",
                    price: 200,
                },
                {
                    title: "Послуги додаткового захисту",
                    price: 800,
                },
            ]
        },
    ]

    const updateTotalAmount = (amount) => {
        setTotalAmount(prevTotal => prevTotal + amount);
    };

    // Функция для обработки изменений выбранных услуг
    const handleServiceSelection = (idWork, serviceTitle, price, quantity) => {
        setSelectedServices(prevServices => {
            const existingServiceIndex = prevServices.findIndex(service => service.ServiceTitle === serviceTitle);

            if (existingServiceIndex >= 0) {
                const updatedServices = [...prevServices];
                if (quantity > 0) {
                    updatedServices[existingServiceIndex].Quantity = quantity;
                } else {
                    updatedServices.splice(existingServiceIndex, 1); // Удаляем услугу, если количество = 0
                }
                return updatedServices;
            } else {
                return [...prevServices, { idWork, ServiceTitle: serviceTitle, Price: price, Quantity: quantity }];
            }
        });
    };

    const handleSubmitOrder = async () => {
        const orderData = {
            User_Id: userData.User_Id,
            SelectedTime: selectedTime,
            SelectedDay: selectedDay,
            Car: `${userCarData.CarBrand} ${userCarData.CarModel}`,
            SelectedServices: selectedServices,
            TotalAmount: totalAmount
        };

        console.log(orderData);

        try {
            const response = await axios.post('http://localhost:5251/api/order/create', orderData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            navigate('/User/MyOrders');
            console.log('Order created successfully:', response.data);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div className="makeOrder">
            <h2 className='makeOrder__title'>Заявка на обслуговування</h2>
            <div className="makeOrder__content-wrapper">
                <h3 className='makeOrder__order-number'>Замовлення</h3>
                <div className="makeOrder__content">
                    <div className="makeOrder__user">
                        <div className="makeOrder__user-icon">
                            <UserRound size={60} color='#EAB308' strokeWidth={1} />
                        </div>
                        <div className="makeOrder__user-content">
                            <div className="makeOrder__user-info">
                                <h5>Клієнт</h5>
                                <h4>{userData?.Firstname} {userData?.Surname}</h4>
                            </div>
                            <div className="makeOrder__user-info">
                                <h5>Номер телефону</h5>
                                <h4>{userData?.PhoneNumber}</h4>
                            </div>
                            <div className="makeOrder__user-info">
                                <h5>Ел. пошта</h5>
                                <h4>{userData?.Email}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="makeOrder__user-car">
                        <div className="makeOrder__user-car-icon">
                            <Cars style={{ stroke: "#EAB308" }} />
                        </div>
                        <div className="makeOrder__user-car-content">
                            <h5>{userCarData.CarBrand} {userCarData.CarModel}, {userCarData.Year}, {userCarData.EngineCapacity}</h5>
                        </div>
                    </div>
                    <div className="makeOrder__sevices">
                        <h3>Оберіть послугу</h3>
                        {info.map(item => (
                            <ServiceCard
                                key={item.idWork}
                                serviceItem={item}
                                updateTotalAmount={updateTotalAmount}
                                onServiceChange={handleServiceSelection}
                            />
                        ))}
                    </div>
                    <div className="makeOrder__calendar">
                        <h3>Оберіть час та дату обслуговування</h3>
                        <Calendar
                            onSelectTime={setSelectedTime}
                            onSelectDay={setSelectedDay}
                        />
                    </div>
                    <div className="makeOrder__result">
                        <div>
                            <h3>До сплати</h3>
                        </div>
                        <div>
                            <h2>{totalAmount} ₴</h2>
                        </div>
                    </div>
                    <div className="makeOrder__accept">
                        <button onClick={handleSubmitOrder} className="makeOrder__accept-btn">
                            <h3>Відправити заявку</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}