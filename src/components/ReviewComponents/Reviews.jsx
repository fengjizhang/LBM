import React, { useState, useEffect } from 'react';
import AddReview from './AddReview.jsx';
import Filter from './Filter.jsx';
import ReviewBlock from './ReviewBlock.jsx';
import Testing from './reviewsExamples.js';
const axios = require('axios').default;

const Reviews = () => {
  const [reviews, setReviews] = useState(Testing.reviews.results);
  const [searchText, setSearch] = useState('');
  const [page, setPage] = useState('reviews');

  const handleClickAddReview = () => {
    console.log('add review button clicked.');
  }

  const handleSearchTextChange = (event) => {
    setSearch({...searchText, searchText: event.target.value});
    //add search functions later.
  }

  //a function to get all reviews...initial planning
  useEffect(() => {
    // console.log('asdfghjk', Testing.reviews.results);
    axios.get({
      method: 'get',
      url: process.env.REACT_APP_API,
      headers: {
         'Authorization': process.env.REACT_APP_TOKEN
      }
    })
    .then((result) => {
      console.log('req stuff api', result);
      // setReviews(result);
    })
  });

  return (
    <div>
      <h1>Reviews</h1>

      <button onClick={handleClickAddReview}>Add Review</button>
      <p>Showing: </p>
      <ReviewBlock data={reviews}/>

      <form>
        <label>
          <input placeholder="search" type="text" value={searchText} onChange={handleSearchTextChange} />
        </label>
      </form>

    </div>
  );
}

export default Reviews;