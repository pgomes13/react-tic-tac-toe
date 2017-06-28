import React from 'react';
import Welcome from '../welcome/Welcome';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Game from '../game/Game';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
    	<Switch>
	      <Route exact path='/' component={Welcome}/>
	      <Route path='/login' component={Login}/>
	      <Route path='/signup' component={Signup}/>
	      <Route path='/game' component={Game}/>
    	</Switch>
  </main>
  );
}

export default App;