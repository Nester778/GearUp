import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import LogIn from './components/LogIn/LogIn';
import SendCode from './components/ResetPassword/SendCode/SendCode';
import EnterCode from './components/ResetPassword/EnterCode/EnterCode';
import CreateNewPass from './components/ResetPassword/CreateNewPass/CreateNewPass';
import Registration from './components/Registration/Registration';
import User from './components/User/User';
import Footer from './components/Footer/Footer';
import Admin from "./components/Admin/Admin"
import { UserProvider } from './components/User/UserContext';



function App() {
  return (

    <Router>
      <UserProvider>
        <NavBar />
        <main className='main'>
          <Routes>
            <Route path="/GearUp" exact element={<MainPage />} />
            <Route path="/LogIn" exact element={<LogIn />} />
            <Route path="/SendCode" exact element={<SendCode />} />
            <Route path="/EnterCode" exact element={<EnterCode />} />
            <Route path="/CreateNewPass" exact element={<CreateNewPass />} />
            <Route path="/Registration" exact element={<Registration />} />
            <Route path="/User/*" element={<User />} />
            <Route path="/Admin/*" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </UserProvider>
    </Router>

  );
}

export default App;
