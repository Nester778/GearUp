import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from "./Menu/Menu";
import "./User.css";
import PersonalData from './PersonalData/PersonalData';
import MyOrders from './MyOrders/MyOrders';
import MyCars from './MyCars/MyCars';
import PriceList from './PriceList/PriceList';
import MakeOrder from './MakeOrder/MakeOrder';
import MakeFeedback from './MakeFeedback/MakeFeedback';
import PersonalUpData from './PersonalData/PersonalUpData/PersonalUpData';
import CarEdit from './MyCars/CarEdit/CarEdit';

export default function User() {
    return (
        <div className="container user-page">
            <div className="user-wrapper">
                <div className="user-page">
                    <Menu />
                </div>
                <div className="user-content">
                    <Routes>
                        <Route path="PersonalData" element={<PersonalData />} />
                        <Route path="PersonalUpData" element={<PersonalUpData />} />
                        <Route path="MyOrders" element={<MyOrders />} />
                        <Route path="MyCars" element={<MyCars />} />
                        <Route path="CarEdit" element={<CarEdit />} />
                        <Route path="PriceList" element={<PriceList />} />
                        <Route path="MakeOrders" element={<MakeOrder />} />
                        <Route path="MakeFeedback" element={<MakeFeedback />} />

                    </Routes>
                </div>
            </div>
        </div>
    );
}