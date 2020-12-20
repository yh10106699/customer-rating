import React from "react";
import RatingStar from "./RatingStars";
import "../styles/Review.css";

const Review = ({rating, header, text}) => {
    return (
        <div className="reviewWrapper">
            <RatingStar averageRating={rating}/>
            <div className="header">{header}</div>
            <hr/>
            <p>{text}</p>
        </div>
    )
}

export default Review;