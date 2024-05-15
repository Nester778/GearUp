import AboutUs from './components/AboutUs/AboutUs';
import CarsModel from './components/CarsModel/CarsModel';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import HowWeWork from './components/HowWeWork/HowWeWork';
import MainScreen from './components/MainScreen/MainScreen';
import MapNav from './components/Map/Map';
import NavBar from './components/NavBar/NavBar';
import Registration from './components/Registration/Registration';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import Workflow from './components/Workflow/Workflow';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainScreen />
      <ChooseUs />
      <Services />
      <HowWeWork />
      <AboutUs />
      <CarsModel />
      <Workflow />
      <Reviews />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
