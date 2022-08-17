import './App.css';
import { AboutMe, Profile } from './components/aboutMe/AboutMe';
import MyButton from './components/tutorial/Tutorial';

function App() {
	return (
		<>
			<div>
				<h1>Tutorial from the React Website</h1>
				<MyButton />
			</div>
			<AboutMe />
			<Profile />
		</>
	);
}

export default App;
