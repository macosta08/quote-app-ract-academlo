import React, { useState } from 'react'
import dataQuotes from '../quotes.json'
import './styles.css'
function getRandomNumber(num) {
	return (Math.random() * num).toFixed(0);
  }
  
  function colorRGB() {
	var coolor =
	  "(" +
	  getRandomNumber(255) +
	  "," +
	  getRandomNumber(255) +
	  "," +
	  getRandomNumber(255) +
	  ")";
	return "rgb" + coolor;
  }
export const MessageCards = () => {
	const [quoteIndex, setQuoteIndex] = useState(0);
	
	const setQuoteIndexRandom = () => {
		setQuoteIndex(Math.floor(Math.random() * 102));
	}

	const {quote, author} = dataQuotes.quotes[quoteIndex];
	const color = colorRGB();
	return (
		<div className='color-random' style={{ background: color }}>
			<div className='quote-box'>
				<p style={{ color: color }}>{quote}</p>
				<footer style={{ color: color }}>{author}</footer>
			
			<button onClick={setQuoteIndexRandom} style={{ background: color }}>Author</button>
			</div>
		</div>
	)
}
