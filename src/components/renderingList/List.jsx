import { useState } from 'react';
export { RandomHero };

// This will randomly generate a DC Hero on button click
function RandomHero() {
	const dcHeros = [
		{ name: 'The Flash', id: 1 },
		{ name: 'Batman', id: 2 },
		{ name: 'Superman', id: 3 },
		{ name: 'Wonder Woman', id: 4 },
		{ name: 'Martian Manhunter', id: 5 },
		{ name: 'Green Lantern', id: 6 },
	];

	const [heros, setDCHeros] = useState('');

	function Random() {
		let number = Math.random(Math.floor() * 6);
		console.log(number);
	}

	return (
		<>
			<button>Generate a Random Hero</button>
			<br />
			<h1>{}</h1>
		</>
	);
}
