import AboutUs from './AboutUs/AboutUs';
import CarsModel from './CarsModel/CarsModel';
import ChooseUs from './ChooseUs/ChooseUs';
import HowWeWork from './HowWeWork/HowWeWork';
import MainScreen from './MainScreen/MainScreen';

import Registration from './Registration/Registration';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import Workflow from './Workflow/Workflow';

export default function MainPage() {
    return (
        <>
            <MainScreen />
            <ChooseUs />
            <div id="services">
                <Services />
            </div>
            <HowWeWork />
            <CarsModel />
            <Workflow />
            <div id="reviews">
                <Reviews />
            </div>
            <Registration />

        </>
    );
}