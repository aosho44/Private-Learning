import { useState } from 'react';

function ArsenalOrSpurs() {
	const [team, setTeam] = useState('');

	function Arsenal() {
		setTeam('Good choice you are very wise');
	}
	function Spurs() {
		setTeam('Horrible choice. Second chance');
	}
	function Clear() {
		setTeam('');
	}

	return (
		<div>
			<button onClick={Arsenal}>Arsenal</button>
			<br />
			<button onClick={Spurs}>Spurs</button>
			<br />
			<button onClick={Clear}>Clear</button>
			<h1>{team}</h1>
		</div>
	);
}
export { ArsenalOrSpurs };

// conditional operators: condition ? exprIfTrue : exprIfFalse
