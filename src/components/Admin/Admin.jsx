import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./../User/User.css";
import Menu from './Menu/Menu';
import PersonalData from './PersonalData/PersonalData';
import PersonalUpData from './PersonalData/PersonalUpData/PersonalUpData';
import AllOrders from './AllOrders/AllOrders';
import ListCustomer from './ListCustomer/ListCustomer';
import FeedbackCustomer from './FeedbackCustomer/FeedbackCustomer';

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
                        <Route path="AllOrders" element={<AllOrders />} />
                        <Route path="ListCustomer" element={<ListCustomer />} />
                        <Route path="FeedbackCustomer" element={<FeedbackCustomer />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}