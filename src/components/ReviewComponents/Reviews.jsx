import React, { useState, useEffect } from 'react';
import AddReview from './AddReview.jsx';
import ReviewBlock from './ReviewBlock.jsx';
import './Review1.css';
import ShowStars from './ShowStars.jsx';
import Bars from './Bars.jsx';

const Reviews = (props) => {

  const [reviews, setReviews] = useState(undefined);
  const [showAdd, setShow] = useState(false);
  const [currentNum, setCurrentNum] = useState(2);
  const [more, setMore] = useState(true);
  const [starSelect, setStarSelect] = useState(0);

  const url = `${process.env.REACT_APP_ENDPOINT}reviews/?product_id=${props.id}&count=900`

  useEffect(() => {
    if (reviews === undefined) {
      const fetchReviews = async () => {
        if (props.id) {
          try {
            let headers = { headers: { 'Authorization': process.env.REACT_APP_TOKEN } }
            const response = await fetch(url, headers);
            const reviews99 = await response.json();
            console.log('TETSETSETSET', reviews99);
            setReviews(reviews99);
          } catch (err) {
            console.log(err);
          }
        }
      }
      fetchReviews();
    }
  }, [props.id, url]);


  const handleClickAddReview = () => { //add would need a request.
    setShow(true);
  }

  const handleCloseAdd = (event) => {
    setShow(false);
  }

  const showMore = () => {
    setCurrentNum(currentNum + 2);
    (currentNum + 2) > reviews.results.length ? setMore(false) : console.log('got more');
  }


  if (reviews === undefined) {
    return;
  }

  const numberChosen = (num) => {
    setStarSelect(num);

  }

  const closeModal = () => {
    setShow(false);
  }

  return (
    <div className='page-padding'>
      {showAdd === true ? <AddReview id={props.id} set={closeModal} /> : <i></i>}
      <div className="container">

        <div className="reviewsMain">
          <div className="leftSide">
            <h1 className="reviewText">Ratings &#38; Reviews</h1>
            <ShowStars data={reviews} />

            <h2 className="ratingsBreakdown">Ratings Breakdown:</h2>
            <Bars id={props.id} select={numberChosen} />

            {showAdd === false ? <button className="addReviewButton" onClick={handleClickAddReview}>Add Review</button> : <p></p>}
          </div>

          <div className="rightSide">
            <div className="reviewShowing">
              <ReviewBlock className="reviewBlock" select={starSelect} showAdd={showAdd} data={reviews} num={currentNum} setNum={setCurrentNum} caps={5} id={props.id} />

              {(more === true) ? <button className="showMore" onClick={() => { showMore() }} >show more</button> : <p></p>}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Reviews;