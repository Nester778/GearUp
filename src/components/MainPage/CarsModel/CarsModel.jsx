import React from "react";
import audi from "./../../../img/CarsLogo/audi.svg";
import bmw from "./../../../img/CarsLogo/bmw.svg";
import chevrolet from "./../../../img/CarsLogo/chevrolet.svg";
import ford from "./../../../img/CarsLogo/ford.svg";
import hyundai from "./../../../img/CarsLogo/hyundai.svg";
import mercedes from "./../../../img/CarsLogo/mercedes.svg";
import toyota from "./../../../img/CarsLogo/toyota.svg";
import opel from "./../../../img/CarsLogo/opel.svg";
import renault from "./../../../img/CarsLogo/renault.svg";
import volkswagen from "./../../../img/CarsLogo/volkswagen.svg";
import "./CarsModel.css";

export default function CarsModel() {

    return (
        <div className="carsModel">
            <div className="carsModel__title">
                <div className="yellow-line"></div>
                <div className="container">
                    <h2>Авто, які ми обслуговуємо</h2>
                </div>
                <div className="yellow-line"></div>
            </div>
            <div className="container">
                <div className="carsModel__cars-logo">
                    <img src={audi} alt="audi" />
                    <img src={bmw} alt="bmw" />
                    <img src={chevrolet} alt="chevrolet" />
                    <img src={ford} alt="ford" />
                    <img src={hyundai} alt="hyundai" />
                    <img src={mercedes} alt="mercedes" />
                    <img src={toyota} alt="toyota" />
                    <img src={opel} alt="opel" />
                    <img src={renault} alt="renault" />
                    <img src={volkswagen} alt="volkswagen" />
                </div>
            </div>
        </div >
    );
}