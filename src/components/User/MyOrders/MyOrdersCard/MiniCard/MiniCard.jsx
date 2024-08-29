import { ReactComponent as Engine } from "./../../../../../img/workIcon/engine.svg";
import { ReactComponent as Suspension } from "./../../../../../img/workIcon/suspension.svg";
import { ReactComponent as Body } from "./../../../../../img/workIcon/body.svg";
import { ReactComponent as Electronics } from "./../../../../../img/workIcon/electronics.svg";
import { ReactComponent as Tire } from "./../../../../../img/workIcon/tire.svg";
import { ReactComponent as CarWash } from "./../../../../../img/workIcon/carWash.svg";

import "./MiniCard.css";

export default function MiniCard(prop) {
    const icon = [
        <Engine className="secvice-icon" />,
        <Suspension className="secvice-icon" />,
        <Body className="secvice-icon" />,
        <Electronics className="secvice-icon" />,
        <Tire className="secvice-icon" />,
        <CarWash className="secvice-icon" />]
    let sum = 0;
    prop.work.map(item => sum += item.Price * item.Quantity);
    const services = ["Діагностика та ремонт двигуна", "Ремонт підвіски та гальмівної системи", "Кузовний ремонт", "Ремонт електричної системи", "Шиномонтажні послуги", "Догляд за авто"];
    return (
        <div className="minicard">
            <div className="minicard-work">
                <div className="minicard-work-icon">
                    {icon[prop.work[0].IdWork]}
                </div>
                <div className="minicard-work-text">
                    <h5>{services[prop.work[0].IdWork]}</h5>
                    {prop.work.map(item => (
                        <p>{item.ServiceTitle} {item.Price}₴ х {item.Quantity}</p>
                    ))}

                </div>
            </div>
            <div className="minicard-cost">
                <p>{sum} ₴</p>
            </div>
        </div>
    );
}