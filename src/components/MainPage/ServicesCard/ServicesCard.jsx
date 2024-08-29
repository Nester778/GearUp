import { Timer } from 'lucide-react';
import "./ServicesCard.css";

export default function ServicesCard(prop) {

    return (
        <div className="card">
            <h4>{prop.serviceItem.title}</h4>
            <div className="card__img">
                <img src={prop.serviceItem.img} alt="card img" />
            </div>
            <div className="card__center">
                <div className="card__price">
                    <h4>від <span className="price">{prop.serviceItem.price}</span><span> грн</span></h4>
                </div>
                <div className="card__days">
                    <Timer size={15} color='#EAB308' />
                    <p>{prop.serviceItem.days}</p>
                </div>
            </div>
            <div className="card__desc">
                <p>{prop.serviceItem.desc}</p>
            </div>
        </div>
    );
}