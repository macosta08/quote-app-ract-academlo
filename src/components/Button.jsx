import React from 'react'

export const Button = ({setQuoteIndexRandom, color}) => {
	return (
		<button onClick={setQuoteIndexRandom} style={{ background: color }}>Author</button>
	)
}
