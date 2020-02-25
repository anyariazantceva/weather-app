import React, {Component} from 'react';
import ListItem from './Components/ListItem/ListItem.js';
import Header from './Components/Header/Header.js';
import './App.css';
import Footer from "./Footer";
import RouterComponent from "./Components/Router/Router";



export default class App extends Component {
    constructor() {
        super()

    }

    render() {
      return (
        <div className="App">
            <Header />
            <RouterComponent/>
            <Footer/>

        </div>
    );
  } 

}


