import React from 'react';
import { Switch, Route } from "react-router-dom";

const Home = ()=> <h1>Home Page</h1>
const About = ()=> <h1>About Page</h1>
const Login = ()=> <h1>Login Page</h1>
const Game = ()=> <h1>Game Page</h1>

export default ()=>
    <Switch>
        <Route path="/" exact> <Home /> </Route>
        <Route path="/about"> <About /> </Route>
        <Route path="/login"> <Login /> </Route>
        <Route path="/game"> <Game /> </Route>
    </Switch>