import React, { useState, useEffect } from 'react';
import Stars from './Stars.jsx';
import RadioButtons from './RadioButtons.jsx';
//NEED TO WORK ON STARS
//maybe tune wordcount...
//upload photo function?
const AddReview = (props) => {
  const [numStars, setNumStars] = useState(0);
  const [recommend, setRecommend] = useState('');
  const [summary, setSummary] = useState('');
  const [fullReview, setFullReview] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [size, setSize] = useState(6);
  const [width, setWidth] = useState(6);
  const [comfort, setComfort] = useState(6);
  const [quality, setQuality] = useState(6);
  const [length, setLength] = useState(6);
  const [fit, setFit] = useState(6);



  // useEffect(() => {
  // })


  const handleYesNo = (event) => {
    setRecommend(event.target.value);
  }

  const submitEverything = () => { //fetch post request using state as data.
    const allData = { //states.
      rating: numStars,
      summary: summary,
      recommend: recommend,
      body: fullReview,
      size: size,
      width: width,
      comfort: comfort,
      quality: quality,
      length: length,
      fit: fit,
      nickname: nickname,
      email: email
    }
    console.log('all input', allData);
  }

  if (props.show === true) { //testing conditional rendering, show form to add.
    return (
      <div>

        <label>

        </label>

        <label onChange={handleYesNo}> Do you recommend this product?
          <input type="radio" value="yes" /> Yes
          <input type="radio" value="no" /> No
        </label>
      <br></br>
        <label> Characteristics
        </label>

        <br></br>
      Size:
      <RadioButtons setNum={setSize}/>
      <br></br>
      Width:
      <RadioButtons setNum={setWidth}/>
      <br></br>
      Comfort:
      <RadioButtons setNum={setComfort}/>
      <br></br>
      Quality:
      <RadioButtons setNum={setQuality}/>
      <br></br>
      Length:
      <RadioButtons setNum={setLength}/>
      <br></br>
      Fit:
      <RadioButtons setNum={setFit}/>
      <br></br>

      <br></br>
      <label>
        Review summary <br></br>
        <textarea placeholder="Example: Best purchase ever!" rows="3" cols="70" name="summary" type="text" value={summary} onChange={(e) => {
          setSummary(e.target.value);
        }} /><br></br>
      </label>
      <br></br>

      <label>
        Why did you like the product or not?
        <br></br>
        <textarea placeholder="review" rows="15" cols="100" name="review" type="text" value={fullReview} onChange={(e) => {
          setFullReview(e.target.value);
          setWordCount(fullReview.length);
        }} />
        <p>Minimum required characters left: {50 - wordCount} </p>

      </label>
      <br></br>
      Nickname: <br></br>
      <textarea type="text" placeholder="Example: jackson11!" cols="30" onChange={(e) => {
        setNickname(e.target.value);
      }} /><br></br>
      For privacy reasons, do not use your full name or email address” will appear.
      <br></br>
      <br></br>
      Email: <br></br>
      <textarea type="text" placeholder="Example: jackson11@email.com" cols="50" onChange={(e) => {
        setEmail(e.target.value);
      }} /><br></br>
      For authentication reasons, you will not be emailed
      <br></br>
      <br></br>
      <button onClick={submitEverything}>Submit</button>
      </div>
    );
  }
}
export default AddReview;