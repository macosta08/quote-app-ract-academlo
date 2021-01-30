import React, { useState } from 'react'
import { colorRGB } from '../helpers/CorlorRandom';
import dataQuotes from '../quotes.json'
import { Button } from './Button';
import { IconTwitter } from './IconTwitter';
import './styles.css'
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
				<div>
					<span className='icon'>
						<IconTwitter quote={quote} author={author} color={color}/>
					</span>
					<Button setQuoteIndexRandom={setQuoteIndexRandom} color={color}/>
				</div>
			</div>
		</div>
	)
}
