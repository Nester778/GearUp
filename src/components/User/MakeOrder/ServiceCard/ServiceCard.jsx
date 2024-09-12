import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ReactComponent as Engine } from "./../../../../img/workIcon/engine.svg";
import { ReactComponent as Suspension } from "./../../../../img/workIcon/suspension.svg";
import { ReactComponent as Body } from "./../../../../img/workIcon/body.svg";
import { ReactComponent as Electronics } from "./../../../../img/workIcon/electronics.svg";
import { ReactComponent as Tire } from "./../../../../img/workIcon/tire.svg";
import { ReactComponent as CarWash } from "./../../../../img/workIcon/carWash.svg";
import { ReactComponent as Toggle } from "./../../../../img/user/toggle.svg";
import "./ServiceCard.css";

export default function ServiceCard({ serviceItem, updateTotalAmount, onServiceChange }) {
    const [open, setOpen] = useState(false);
    const [quantities, setQuantities] = useState(serviceItem.services.map(() => 0));

    const icon = [
        <Engine className="service-icon" />,
        <Suspension className="service-icon" />,
        <Body className="service-icon" />,
        <Electronics className="service-icon" />,
        <Tire className="service-icon" />,
        <CarWash className="service-icon" />
    ];

    const toggle = () => {
        setOpen(!open);
    };

    const handleAddService = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index]++;
        setQuantities(newQuantities);
        updateTotalAmount(serviceItem.services[index].price);
        onServiceChange(serviceItem.idWork, serviceItem.services[index].title, serviceItem.services[index].price, newQuantities[index]);
    };

    const handleRemoveService = (index) => {
        if (quantities[index] > 0) {
            const newQuantities = [...quantities];
            newQuantities[index] = 0;
            setQuantities(newQuantities);
            updateTotalAmount(-serviceItem.services[index].price);
            onServiceChange(serviceItem.idWork, serviceItem.services[index].title, serviceItem.services[index].price, newQuantities[index]);
        }
    };

    const handleRemoveAllService = (index) => {
        if (quantities[index] > 0) {
            const newQuantities = [...quantities];
            newQuantities[index] = 0;
            setQuantities(newQuantities);
            updateTotalAmount(-(serviceItem.services[index].price * serviceItem.services[index].quantities));
            onServiceChange(serviceItem.idWork, serviceItem.services[index].title, serviceItem.services[index].price, newQuantities[index]);
        }
    };

    return (
        <div className={`serviceCard ${open ? 'priceListCard-open' : ''}`}>
            <div className="priceListCard-header" onClick={toggle}>
                <div className="priceListCard-header-icon">
                    <div className="priceListCard-header-icon-wrapper">
                        {icon[serviceItem.idWork]}
                    </div>
                    <h5>{serviceItem.title}</h5>
                </div>
                <div className="priceListCard-header-toggle">
                    <Toggle />
                </div>
            </div>

            <div className={`serviceCard-content ${open ? 'open' : ''}`}>
                <div className="serviceCard-content-items">
                    {serviceItem.services.map((item, index) => (
                        <div className="serviceCard-content-items-item" key={index}>
                            <h5 className="priceListCard-content-items-item-title">{item.title}</h5>
                            <div className="serviceCard-quantity">
                                {quantities[index] > 0 && (
                                    <>
                                        <Minus
                                            size={16}
                                            color='#EAB308'
                                            onClick={() => handleRemoveService(index)}
                                        />
                                        <h5>{quantities[index]}</h5>
                                        <Plus
                                            size={16}
                                            color='#EAB308'
                                            onClick={() => handleAddService(index)}
                                        />
                                    </>
                                )}
                            </div>
                            <h5 className='content-price text-center'>{item.price} ₴</h5>
                            <div className="serviceCard-add-service">
                                {quantities[index] > 0 ? (
                                    <Minus
                                        color='#EAB308'
                                        onClick={() => handleRemoveAllService(index)}
                                    />
                                ) : (
                                    <Plus
                                        color='#EAB308'
                                        onClick={() => handleAddService(index)}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}