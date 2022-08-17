import { useState } from 'react';
export { Random };

// This will randomly generate a DC Hero on button click
function Random() {
	const dcHeroes = [
		'The Flash',
		'Batman',
		'Superman',
		'Wonder Woman',
		'Martian Manhunter',
		'Green Lantern',
	];

	const [heroes, setDCHeroes] = useState('');

	function RandomHero() {
		let number = Math.floor(Math.random() * 6);
		setDCHeroes(dcHeroes[number]);
		console.log(number);
	}

	return (
		<>
			<button onClick={RandomHero}>Generate a Random Hero</button>
			<br />
			<h1>{heroes}</h1>
		</>
	);
}
