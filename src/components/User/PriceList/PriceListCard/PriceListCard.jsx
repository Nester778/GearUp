import React, { useState, useEffect } from 'react';

import { ReactComponent as Engine } from "./../../../../img/workIcon/engine.svg";
import { ReactComponent as Suspension } from "./../../../../img/workIcon/suspension.svg";
import { ReactComponent as Body } from "./../../../../img/workIcon/body.svg";
import { ReactComponent as Electronics } from "./../../../../img/workIcon/electronics.svg";
import { ReactComponent as Tire } from "./../../../../img/workIcon/tire.svg";
import { ReactComponent as CarWash } from "./../../../../img/workIcon/carWash.svg";
import { ReactComponent as Toggle } from "./../../../../img/user/toggle.svg";

import "./PriceListCard.css";

export default function PriceListCard(prop) {
    const [open, setOpen] = useState(false);
    const icon = [
        <Engine className={`secvice-icon ${open ? 'priceListCard-icon' : ''}`} />,
        <Suspension className={`secvice-icon ${open ? 'priceListCard-icon' : ''}`} />,
        <Body className={`secvice-icon ${open ? 'priceListCard-icon' : ''}`} />,
        <Electronics className={`secvice-icon ${open ? 'priceListCard-icon' : ''}`} />,
        <Tire className={`secvice-icon ${open ? 'priceListCard-icon' : ''}`} />,
        <CarWash className={`secvice-icon ${open ? 'priceListCard-icon' : ''}`} />
    ];
    const toggle = () => {
        const newState = !open;
        setOpen(newState);
    };
    return (
        <div className={`priceListCard ${open ? 'priceListCard-open' : ''}`} onClick={toggle}>
            <div className="priceListCard-header" >
                <div className="priceListCard-header-icon">
                    <div className={`priceListCard-header-icon-wrapper ${open ? 'icon-wrapper' : ''}`}>
                        {icon[prop.itemCard.idWork]}
                    </div>
                    <h5>{prop.itemCard.title}</h5>
                </div>
                <div className="priceListCard-header-toggle">
                    <Toggle />
                </div>
            </div>

            <div className={`priceListCard-content ${open ? 'open' : ''}`}>
                <div className="priceListCard-big-icon">
                    <div className={`priceListCard-big-icon-wrapper ${open ? '' : 'big-icon-wrapper'}`}>
                        {icon[prop.itemCard.idWork]}
                    </div>
                    <p>{prop.itemCard.days}</p>
                </div>
                <div className="priceListCard-content-items">
                    <div className="priceListCard-content-items-item-wrapper">
                        <p>Назва послуги</p>
                        {prop.itemCard.services.map(item => (
                            <div className="priceListCard-content-items-item">
                                <h5 className="priceListCard-content-items-item-title">{item.title}</h5>
                            </div>
                        ))}
                    </div>
                    <div className="priceListCard-content-items-item-wrapper">
                        <p>Вартість</p>
                        {prop.itemCard.services.map(item => (
                            <div className="priceListCard-content-items-item">
                                <h5>від {item.price} ₴</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}