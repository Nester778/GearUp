import Img1 from "./../../../img/Workflow/Img1.png";
import Img2 from "./../../../img/Workflow/Img2.png";
import Img3 from "./../../../img/Workflow/Img3.png";
import Img4 from "./../../../img/Workflow/Img4.png";
import Img5 from "./../../../img/Workflow/Img5.png";
import Img6 from "./../../../img/Workflow/Img6.png";

import "./Workflow.css";

export default function Workflow() {
    return (
        <div className="container">
            <div className="title">
                <h2>Робочий процес</h2>
                <div className="desc-wrapper">
                    <h4>Довіряючи ваш <span>автомобіль</span> нашим спеціалістам, ви передаєте його у руки <span>професіоналів</span>.</h4>
                </div>
            </div>

            <div className="img-container">
                <div className="column">
                    <div className="image-container top-image-container">
                        <img src={Img1} alt="Workflow step 1" className="top-image" />
                    </div>
                    <div className="image-container bottom-image-container">
                        <img src={Img2} alt="Workflow step 2" className="bottom-image" />
                    </div>
                </div>
                <div className="column">
                    <div className="image-container bottom-image-container">
                        <img src={Img4} alt="Workflow step 4" className="bottom-image" />
                    </div>
                    <div className="image-container top-image-container">
                        <img src={Img3} alt="Workflow step 3" className="top-image" />
                    </div>
                </div>
                <div className="column">
                    <div className="image-container top-image-container">
                        <img src={Img5} alt="Workflow step 5" className="top-image" />
                    </div>
                    <div className="image-container bottom-image-container">
                        <img src={Img6} alt="Workflow step 6" className="bottom-image" />
                    </div>
                </div>
            </div>
        </div >
    );
}
