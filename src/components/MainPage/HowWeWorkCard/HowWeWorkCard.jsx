import "./HowWeWorkCard.css";

export default function HowWeWorkCard(prop) {

    return (
        <div className="howWeWorkCard">
            <div className="howWeWorkCard__img">
                <img src={prop.cardItem.img} alt="" />
            </div>
            <h3>{prop.cardItem.title}</h3>
            <h5>{prop.cardItem.desc}</h5>
        </div>
    )
}