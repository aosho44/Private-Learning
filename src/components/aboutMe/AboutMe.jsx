const user = {
	name: 'Ayo',
	imageURL:
		'https://media-exp1.licdn.com/dms/image/C4D03AQHXeBfy9vAtHg/profile-displayphoto-shrink_800_800/0/1649185927310?e=1666224000&v=beta&t=71kc8B77SfYzmkBsbVkjKLZrmlQ1AGkwyF1TGGAAync',
	imageSize: 90,
};

function AboutMe() {
	return (
		<>
			<h1>Welcome to My Tutorial Website</h1>
		</>
	);
}

function Profile() {
	return (
		<>
			<h2>{user.name}</h2>
			<img
				className="avatar"
				src={user.imageURL}
				alt={`Still of ${user.name}`}
				style={{ width: user.imageSize, height: user.imageSize }}
			/>
		</>
	);
}

export { AboutMe, Profile };
