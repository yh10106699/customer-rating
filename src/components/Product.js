import React from "react";
import RatingStar from "./RatingStars";
import primeLogo from "../image/isPrimeLogo.png";
import {withRouter} from "react-router-dom";
import "../styles/Product.css";

const Product = ({imageUrl, description, rating, price, isPrime, history, setDetail}) => {
    const totalRating = rating.reduce((acc, val) => acc + val);
    const averageRating = Math.round(rating.reduce((acc, val, idx) => acc + (idx + 1) * val) / totalRating * 10) / 10;

    const goToDetailPage = () => {
        setDetail({imageUrl, description, rating, totalRating, averageRating})
        history.push("/detail");
    }

    const goToReviewPage = () => {
        setDetail({imageUrl, description, rating, totalRating, averageRating});
        history.push("/review");
    }


    return (
        <div className="productWrapper">
            <img className="imageInProduct" style={{cursor: "pointer"}} onClick={goToDetailPage} src={imageUrl}/>
            <div onClick={goToDetailPage} className="description">{description}</div>
            <div className="rating">
                <RatingStar averageRating={averageRating}/>
                <span className="totalRating">({totalRating})</span>
            </div>

            <div className="priceWrapper">
                <span className="productPrice">${price}</span>
                {isPrime && <img className="primeLogo" src={primeLogo}/>}
            </div>

            <button onClick={goToReviewPage} className="reviewButtonInProduct">Add Review</button>

        </div>
    )
}

export default withRouter(Product);