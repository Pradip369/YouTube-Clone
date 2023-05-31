import React from 'react';
import './App.css';
import Header from './Header';
import RecommendedVideo from './RecommendedVideo';
import Sidebar from './Sidebar';
import { Route, Switch } from "react-router-dom";
import SearchPage from './SearchPage';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';

function App() {
  return (
    <div className="app">


      <Header />
      <Switch>

        <Route exact path='/'>
          <div className='app__page'>
            <Sidebar />
            <RecommendedVideo />
          </div>

        </Route>
        <Route exact path='/search/:searchitem'>
          <div className='app__page'>
            <Sidebar />
            <SearchPage />
          </div>
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/register'>
          <Register />
        </Route>

        <Route exact path='/logout'>
          <Logout />
        </Route>

      </Switch>


    </div>
  );
}

export default App;
