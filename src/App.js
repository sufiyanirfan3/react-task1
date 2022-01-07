import React from 'react'
import './App.css';
import LoginForm from './components/LoginForm.js';
import {Route,Switch} from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route path='/' component={LoginForm}></Route>
      </Switch>
    </>
  );
}

export default App;
