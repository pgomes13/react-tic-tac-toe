import React from 'react';
import { Link } from 'react-router-dom';
import '../login/login.css';

const Login = () => {
	return (
		<div className="login-page">
			<div className="form">
				<form className="register-form">
					<input type="text" placeholder="username"/>
					<input type="password" placeholder="password"/>
					<input type="text" placeholder="domain"/>
					<button>create</button>
					<p className="message">Already registered? <Link to={`/login`}>Sign In</Link></p>
				</form>
			</div>
		</div>	
	);
}

export default Login;