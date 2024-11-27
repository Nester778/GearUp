import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from './../../UserContext';
import "./PersonalUpData.css";

export default function PersonalUpData() {
    const { userData } = useUser();
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState(userData?.Firstname || '');
    const [surname, setSurname] = useState(userData?.Surname || '');
    const [middlename, setMiddlename] = useState(userData?.Middlename || '');
    const [phoneNumber, setPhoneNumber] = useState(userData?.PhoneNumber || '');
    const [email, setEmail] = useState(userData?.Email || '');
    const [gender, setGender] = useState(userData?.Gender || '');
    const [birthday, setBirthday] = useState(userData?.Birthday || '');
    const [userIcon, setUserIcon] = useState(userData?.UserIcon || '');

    useEffect(() => {
        if (!userData) {
            navigate('/LogIn');
        }
    }, [userData, navigate]);

    const handleSave = async () => {
        const updatedUser = {
            Firstname: firstname,
            Surname: surname,
            Middlename: middlename,
            PhoneNumber: phoneNumber,
            Email: email,
            Gender: gender,
            Birthday: birthday,
            UserIcon: userIcon,
        };

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:5251/api/user/${userData.User_Id}`, updatedUser, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('User data updated successfully:', response.data);
            navigate('/User/PersonalData');
        } catch (error) {
            console.error('Error updating user data', error);
        }
    };

    const handleUserIconChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUserIcon(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="personalDataEdit">
            <h2>Редагування особистих даних</h2>
            <div className="personalDataEdit-wrapper">
                <div className="personalDataEdit__field">
                    <label>Ім’я:</label>
                    <input
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>
                <div className="personalDataEdit__field">
                    <label>Прізвище:</label>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <div className="personalDataEdit__field">
                    <label>По батькові:</label>
                    <input
                        type="text"
                        value={middlename}
                        onChange={(e) => setMiddlename(e.target.value)}
                    />
                </div>
                <div className="personalDataEdit__field">
                    <label>Номер телефону:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="personalDataEdit__field">
                    <label>Ел. пошта:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="personalDataEdit__field">
                    <label>Дата народження:</label>
                    <input
                        type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                </div>
                <div className="personalDataEdit__field">
                    <label>Стать:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Не вказано</option>
                        <option value="Чоловіча">Чоловіча</option>
                        <option value="Жіноча">Жіноча</option>
                    </select>
                </div>
                <div className="personalDataEdit__field">
                    <label>Іконка користувача:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleUserIconChange}
                    />
                </div>
                {userIcon && (
                    <div className="personalDataEdit__iconPreview">
                        <img src={userIcon} alt="User Icon Preview" />
                    </div>
                )}
                <button onClick={handleSave} className="personalDataEdit__btn">Зберегти</button>
            </div>
        </div>
    );
}