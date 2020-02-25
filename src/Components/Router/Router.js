import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import WeatherWrap from "../../WeatherWrap";
import List from "../List/List";
import './Router.css';

const RouterComponent = () => {
    return (
        <Router>
            <div className='toggle__wrapper'>
                <div className="toggle__title">Click a button to see the data</div>
                <ul className='toggle__list'>
                    <li className='toggle__item toggle-weather__item'>
                        <Link to="/weather" className='toggle__link'>Weather</Link>
                    </li>
                    <li className='toggle__item'>
                        <Link to="/time" className='toggle__link'>Time</Link>
                    </li>
                </ul>
                <Route path="/weather" component={WeatherWrap} />
                <Route path="/time" component={List} />
            </div>
        </Router>
    )
};

export default RouterComponent
