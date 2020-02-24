import React, {Component} from 'react';
import ListItem from './Components/ListItem/ListItem.js';
import Header from './Components/Header/Header.js';
import './App.css';
import Footer from "./Footer";
import WeatherWrap from "./WeatherWrap";
import List from "./Components/List/List";

export default class App extends Component {
    constructor() {
        super()

    }

    render() {
      return (
        <div className="App">
            <Header />
            <main className="main">
                <List/>
                <WeatherWrap/>
            </main>
            <Footer/>

        </div>
    );
  } 

}


