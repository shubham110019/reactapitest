import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './component/Narbar';
import User from './pages/User';
import Userform from './pages/Userform';
import Search from './pages/Search';
import {Switch, Route, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App(props) {

  return (
    <>
    <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/user/:id" component={User} exact />
        <Route path="/userfrom" component={Userform} exact />
        <Route path="/search" component={Search} exact />
        {/* <Route path="/user/:id" render={(props) => <User {...props} /> } /> */}
      </Switch>
    </>
  );
}

export default App;
