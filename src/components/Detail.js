import React from "react";
import RatingStar from "./RatingStars";
import "../styles/Detail.css";
import {withRouter} from "react-router-dom";


const Detail = (props) => {
    const {imageUrl, description, rating, totalRating, averageRating} = props.detail;
    const {setDetail, history} = props;
    console.log(props);

    const [toggle, setToggle] = React.useState(false);
    const toggleReview = () => {
        setToggle(!toggle);
    }

    const goToReviewPage = () => {
        setDetail({imageUrl, description, rating, totalRating, averageRating});
        history.push("/review");
    }

    return (
        <div>
            <div>{description}</div>
            <RatingStar averageRating={averageRating}/>
            <div onClick={toggleReview} className="arrow down"></div>
            <span className="totalRating">{totalRating} customer reviews</span>

            <div style={{display: toggle ? "block" : "none"}} className="reviewDetail">
                <div className="reviewHeader">
                    <RatingStar averageRating={averageRating}/>
                    <strong>{averageRating} out of 5</strong>
                </div>
                <div className="reviewTotalRating">{totalRating.toLocaleString()} global rating</div>
                <div className="reviewBar">
                    {
                        [5, 4, 3, 2, 1].map(idx => {
                            return <div className="progressRow">
                                <div className="star">{idx} star</div>
                                <progress className="ratingBar" id="file" max="1"
                                          value={rating[idx - 1] / totalRating}/>
                                <span>{rating[idx - 1].toLocaleString()}</span>
                            </div>
                        })
                    }
                </div>
                <button onClick={goToReviewPage} className="reviewButton">Add Review</button>
            </div>
            <img className="productImage" src={imageUrl}/>


        </div>
    )
}

export default withRouter(Detail);