import React from 'react';
import Welcome from '../welcome/Welcome';
import Game from '../game/Game';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
    	<Switch>
	      <Route exact path='/' component={Welcome}/>
	      <Route path='/game' component={Game}/>
    	</Switch>
  </main>
  );
}

export default App;