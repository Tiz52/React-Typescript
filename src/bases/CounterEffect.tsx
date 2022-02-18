import { useEffect, useState } from 'react';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

	const [ counter, setCounter ] = useState(5);


	const handleClick = () => {
		setCounter( prev => Math.min(prev +1, MAXIMUN_COUNT) );
	};

	useEffect(() => {
		
		if(counter < 10) return;

		console.log('%cse llegó al valor máximo');

	}, [ counter ]);

	return (
		<>
			<h1>CounterEffect: {counter}</h1>
			<button onClick={handleClick}>+1</button>
		</>
	);
};
