import React from "react";
import {
BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import App from "./App";
import Expectancy from './pages/Expectancy'

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/life-expectancy" component={Expectancy} />
        </Switch>
    </Router>
)

export default AppRouter