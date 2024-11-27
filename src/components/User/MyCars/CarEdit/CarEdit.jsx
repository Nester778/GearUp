import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from './../../UserContext';
import "./CarEdit.css";

export default function CarEdit() {
    const { userData, userCarData } = useUser();
    const navigate = useNavigate();

    const [carBrand, setCarBrand] = useState(userCarData?.CarBrand || '');
    const [carModel, setCarModel] = useState(userCarData?.CarModel || '');
    const [year, setYear] = useState(userCarData?.Year || '');
    const [engineCapacity, setEngineCapacity] = useState(userCarData?.EngineCapacity || '');
    const [engineType, setEngineType] = useState(userCarData?.EngineType || '');

    useEffect(() => {
        if (!userData || !userCarData) {
            navigate('/LogIn');
        }
    }, [userData, userCarData, navigate]);

    const handleSave = async () => {
        const updatedCar = {
            User_Id: userData.User_Id,
            CarBrand: carBrand,
            CarModel: carModel,
            Year: year,
            EngineCapacity: engineCapacity,
            EngineType: engineType,
        };

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:5251/api/car/${userData.User_Id}`, updatedCar, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            navigate('/User/MyCars');
        } catch (error) {
            console.error('Error updating car data', error);
        }
    };

    return (
        <div className="carEdit">
            <h2>Редагування даних авто</h2>
            <div className="carEdit-wrapper">
                <div className="carEdit__field">
                    <label>Марка авто:</label>
                    <input
                        type="text"
                        value={carBrand}
                        onChange={(e) => setCarBrand(e.target.value)}
                    />
                </div>
                <div className="carEdit__field">
                    <label>Модель:</label>
                    <input
                        type="text"
                        value={carModel}
                        onChange={(e) => setCarModel(e.target.value)}
                    />
                </div>
                <div className="carEdit__field">
                    <label>Рік випуску:</label>
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="carEdit__field">
                    <label>Об’єм двигуна:</label>
                    <input
                        type="text"
                        value={engineCapacity}
                        onChange={(e) => setEngineCapacity(e.target.value)}
                    />
                </div>
                <div className="carEdit__field">
                    <label>Тип двигуна:</label>
                    <input
                        type="text"
                        value={engineType}
                        onChange={(e) => setEngineType(e.target.value)}
                    />
                </div>
                <button onClick={handleSave} className="carEdit__btn">Зберегти</button>
            </div>
        </div>
    );
}