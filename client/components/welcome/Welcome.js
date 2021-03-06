import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
	return (
		<div className="heading">
			<h2>Welcome to the 2 player Tic Tac Toe Game. Please click the button below to start the game.</h2>
			<Link className="btn" to={`/login`}>Start</Link>
		</div>	
	);
}

export default Welcome;