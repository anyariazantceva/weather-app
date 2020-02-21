import React, {Component} from 'react';
import ListItem from './Components/ListItem/ListItem.js';
import Header from './Components/Header/Header.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
          europe: [],
          usa: [],
          asia: [],
          africa: []
      }
    }
    componentDidMount() {
      this.getFinland()
          .then(response => response.json())
          .then(Helsinki => this.setState({europe: Helsinki}));
      this.getSingapore()
          .then(response => response.json())
          .then(Singapore => this.setState({asia: Singapore}));
      this.getNewYork()
          .then(response => response.json())
          .then(NewYork => this.setState({usa: NewYork}));  
      this.getLagos()
          .then(response => response.json())
          .then(Lagos => this.setState({africa: Lagos}));      
    };

    getFinland() {
      return fetch('http://worldtimeapi.org/api/timezone/Europe/Helsinki');
      };
  
    getNewYork() {
      return fetch('http://worldtimeapi.org/api/timezone/America/New_York');
      };

    getSingapore() {
    return fetch('http://worldtimeapi.org/api/timezone/Asia/Singapore');
    };

    getLagos() {
      return fetch('http://worldtimeapi.org/api/timezone/Africa/Lagos');
      };

    render() {
      return (
        <div className="App">
          <Header />
          <main className="main">
          <ListItem data={this.state.europe} />
          <ListItem data={this.state.usa} />
          <ListItem data={this.state.asia} />
          <ListItem data={this.state.africa} />
          </main>
        </div>
    );
  } 
}


export default App;


/*
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
*/