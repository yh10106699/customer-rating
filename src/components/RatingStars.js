import React from "react";
import StarRatings from 'react-star-ratings';
import "../styles/RatingStars.css";

const RatingStar = (props) => {
    return (
        <div className="rating">
            <StarRatings rating={props.averageRating}
                         starRatedColor="rgb(255,153,0)"
                         numberOfStars={5}
                         starDimension="20px"
                         starSpacing="1px"
                         name='rating'/>
        </div>
    )
}

export default RatingStar;