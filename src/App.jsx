import './App.css';
import { AboutMe, Profile } from './components/aboutMe/AboutMe';
import { ArsenalOrSpurs } from './components/arsenalOrSpurs/ArsenalOrSpurs';
import MyButton from './components/tutorial/Tutorial';
import { RandomClicker } from './components/renderingList/List';

function App() {
	return (
		<>
			<div>
				<MyButton />
			</div>
			<AboutMe />
			<Profile />
			<div>
				<ArsenalOrSpurs />
			</div>
			<br />
			<div>
				<RandomClicker />
			</div>
		</>
	);
}

export default App;
