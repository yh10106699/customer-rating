import React from "react";
import RatingStar from "./RatingStars";
import "../styles/ReviewPage.css";
import Review from "./Review";
import StarRatings from 'react-star-ratings';

const ReviewPage = (props) => {
    const {imageUrl, description, rating, totalRating, averageRating} = props.detail;
    const [reviews, setReviews] = React.useState([{rate: 4, header: "sample Header", text: "sample review"},
        {rate: 4, header: "sample Header", text: "sample review"},
        {rate: 4, header: "sample Header", text: "sample review"}]);
    const [starRating, setRating] = React.useState(0);
    const [header, setHeader] = React.useState("");
    const [reviewText, setReviewText] = React.useState("");
    const [hideForm, setHideForm] = React.useState("true");

    const changeHeader = e => {
        setHeader(e.target.value);
    };

    const changeReviewText = e => {
        setReviewText(e.target.value);
    };

    const onSubmit = () => {
        setHideForm(true);
        alert(`Rating: ${starRating} \n Header: ${header} \n Review: ${reviewText} `);
    };

    const openForm = () => {
        setHideForm(false);
    };

    const closeForm = () => {
        setHideForm(true);
    };

    return (
        <div className="reviewPageWrapper">
            <div className="customerReviews">Customer Reviews</div>

            <div className="ratingSection">
                <div className="reviewBar">
                    <div className="reviewHeader">
                        <RatingStar averageRating={averageRating}/>
                        <div><strong>{averageRating} out of 5</strong></div>
                    </div>
                    {
                        [5, 4, 3, 2, 1].map(idx => {
                            return <div className="progressRow">
                                <div className="star">{idx} star</div>
                                <progress className="ratingBar" id="file" max="1"
                                          value={rating[idx - 1] / totalRating}/>
                                <span>{Math.round(100 * rating[idx - 1] / totalRating)}%</span>
                            </div>
                        })
                    }
                </div>
                <div className="writeReview">
                    <p>Share your thoughts with other customers</p>
                    <button onClick={openForm} className="reviewButton">Write a customer review</button>
                </div>
            </div>

            <div className="reviewSection">
                {
                    reviews.map(review => {
                        return <Review rating={review.rate} header={review.header} text={review.text}/>
                    })
                }
            </div>

            <div className="reviewForm" style={{display: hideForm ? "none" : "block"}}>
                <p>Create Review</p>

                <div className="imageWrapper">
                    <img className="productImage1" src={imageUrl}/>
                    <div>{description}</div>
                </div>
                <hr/>
                <p>Overall Rating</p>
                <StarRatings rating={starRating}
                             changeRating={setRating}
                             starRatedColor="rgb(255,153,0)"
                             numberOfStars={5}
                             starDimension="20px"
                             starSpacing="1px"
                             name='rating'/>
                <hr/>
                <p>Add a Headline</p>
                <input className="headerInput" onChange={changeHeader} type="text" value={header}
                       placeholder="What's most important to know"/>
                <p>Add a written Review</p>
                <textarea className="reviewInput" onChange={changeReviewText} value={reviewText}
                          placeholder="What did you like or dislike? What did you use this product for?"/>
                <button onClick={closeForm} className="closeButton">Close</button>
                <button onClick={onSubmit} className="submitButton">Submit</button>
            </div>


        </div>
    )
};

export default ReviewPage;