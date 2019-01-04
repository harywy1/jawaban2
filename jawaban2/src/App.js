import React, { Component } from 'react';
import Appbar from './component/Appbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Followers from './component/Followers';
import Favorites from './component/Favorites';
import Recent from './component/Recent';
import Popular from './component/Popular';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Appbar />
        <Route exact path='/src/component/Followers.js' component={Followers} />
        <Route path='/src/component/Favorites.js' component={Favorites} />
        <Route path='/src/component/Recent.js' component={Recent} />
        <Route path='/src/component/Popular.js' component={Popular} />
      </div>
      </BrowserRouter>
    );   
    
  }
}

export default App;
