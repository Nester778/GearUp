import mapImg from "./../../img/Map.png";
import "./Map.css";

export default function MapNav() {
    return (
        <div className="map">
            <img src={mapImg} alt="" />
            <div className="map__info">
                <h3>Контактна інформація</h3>
            </div>
        </div>
    );
}