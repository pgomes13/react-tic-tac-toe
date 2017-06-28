import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
	return (
		<div className="login-page">
			<div className="form">
				<form className="login-form">
					<input type="text" placeholder="username"/>
					<input type="password" placeholder="password"/>
					<button>login</button>
					<p className="message">Not registered? <Link to={`/signup`}>Create a new user</Link></p>
				</form>
			</div>
		</div>	
	);
}

export default Login;