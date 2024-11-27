import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [userCarData, setUserCarData] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();  // Для отслеживания изменения маршрута

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    const email = decodedToken.sub;

                    if (decodedToken.exp * 1000 > Date.now()) {
                        // Запрашиваем данные пользователя по email
                        const userResponse = await axios.get(`http://localhost:5251/api/user/${email}`, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        setUserData(userResponse.data);

                        // Если пользователь найден, запрашиваем данные автомобиля
                        if (userResponse.data?.User_Id) {
                            const carResponse = await axios.get(`http://localhost:5251/api/car/${userResponse.data.User_Id}`, {
                                headers: {
                                    'Authorization': `Bearer ${token}`
                                }
                            });
                            setUserCarData(carResponse.data);
                        }
                    } else {
                        logout();
                    }
                } catch (error) {
                    console.error('Error fetching user or car data:', error);
                    logout();  // При ошибке очищаем состояние пользователя
                } finally {
                    setLoading(false); // Сбрасываем флаг загрузки только после завершения всех запросов
                }
            } else {
                setLoading(false);  // Если токена нет, сразу прекращаем загрузку
            }
        };

        fetchUserData();
    }, [location]);  // Обновляем данные при изменении маршрута

    // Функция для выхода из системы (разлогина)
    const logout = () => {
        localStorage.removeItem('token');
        setUserData(null);
        setUserCarData(null);
        setLoading(false);  // Гарантируем сброс флага загрузки при логауте
    };

    return (
        <UserContext.Provider value={{ userData, userCarData, loading, logout, setUserData }}>
            {!loading && children}  {/* Показываем контент только когда данные загружены */}
        </UserContext.Provider>
    );
};