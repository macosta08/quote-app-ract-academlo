import React, { useState } from 'react'
import { colorRGB, getRandomNumber } from '../helpers/CorlorRandom';
import dataQuotes from '../quotes.json'
import { Button } from './Button';
import { IconTwitter } from './IconTwitter';
import './styles.css'
export const QuoteBox = () => {
	const [quoteIndex, setQuoteIndex] = useState(0);
	
	const setQuoteIndexRandom = () => {
		setQuoteIndex(getRandomNumber(dataQuotes.quotes.length));
	}

	const {quote, author} = dataQuotes.quotes[quoteIndex];
	const color = colorRGB();
	return (
		<div className='background-color-random' style={{ background: color }}>
			<div className='quote-box'>
				<p style={{ color: color }}><i className="fa fa-quote-left"/> {quote}</p>
				<footer style={{ color: color }}>{author}</footer>
				<div>
					<span className='icon'>
						<IconTwitter quote={quote} author={author} color={color}/>
					</span>
					<Button setQuoteIndexRandom={setQuoteIndexRandom} color={color}/>
				</div>
			</div>
		</div>
	);
}
