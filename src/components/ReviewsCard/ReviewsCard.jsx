import { CarFront, Star } from 'lucide-react';
import "./ReviewsCard.css";

export default function ReviewsCard(prop) {
    const stars = prop.reviewsCardInfo.stars;

    const starArray = Array.from({ length: 5 }, (_, index) => {
        const color = index < stars ? '#EAB308' : '#a3a3a3';
        return <Star key={index} size={20} color={color} />;
    });

    return (
        <div className="reviewsCard">
            <div className="card-header">
                <div className="ueser-auto">
                    <CarFront size={15} color='#EAB308' />
                    <p>{prop.reviewsCardInfo.auto}</p>
                </div>
                <div className="stars">
                    {starArray}
                </div>
            </div>
            <div className="user">
                <div className="user-icon">
                    <img src={prop.reviewsCardInfo.userIcon} alt="user-icon" />
                </div>
                <h4 className="username">{prop.reviewsCardInfo.username}</h4>
            </div>
            <p className="service">{prop.reviewsCardInfo.service}</p>
            <h4 className="grade">{prop.reviewsCardInfo.grade}</h4>
            <h5 className="review">{prop.reviewsCardInfo.review}</h5>
            <div className="bottom-card-wrapper">
                <div className="bottom-card">
                    <div className="yellow-line"></div>
                    <div className="bottom-card-text"><p>{prop.reviewsCardInfo.date}</p></div>
                    <div className="yellow-line right"></div>
                </div>
            </div>
        </div>
    );
}