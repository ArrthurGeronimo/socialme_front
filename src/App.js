import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Sections/Site/Home/index';
import About from './Sections/Site/About/index';

export default function App() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={About} />
    </Switch>
  );
}