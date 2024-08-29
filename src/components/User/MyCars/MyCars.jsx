import { Link } from 'react-router-dom';
import { useUser } from '../UserContext';
import "./MyCars.css";

export default function MyCars() {
    const { userData, userCarData } = useUser();

    return (
        <div className="myCars">
            <h2>Моє авто</h2>
            <div className="personalData__name">
                <p className="personalData__name-header">Марка авто</p>
                <p className="personalData__name-header">Модель</p>
                <p className="personalData__name-header">Рік випуску</p>

                <h5 className="personalData__name-cell">{userCarData.CarBrand}</h5>
                <h5 className="personalData__name-cell">{userCarData.CarModel}</h5>
                <h5 className="personalData__name-cell">{userCarData.Year}</h5>
            </div>
            <div className="personalData__contacts">
                <p className="personalData__name-header">Об’єм двигуна</p>
                <p className="personalData__name-header">Тип двигуна</p>

                <h5 className="personalData__name-cell">{userCarData.EngineCapacity}</h5>
                <h5 className="personalData__name-cell">{userCarData.EngineType}</h5>
            </div>
            <Link to="/User/CarEdit">
                <div className="personalData__edit">
                    <p>Редагувати</p>
                </div>
            </Link>
        </div>
    );
}