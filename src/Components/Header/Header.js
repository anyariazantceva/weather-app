import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <header className="h-header">
          <h1><span className="span1">T</span>ime and <span className="span2">W</span>eather</h1>
          <div className="h-icon-div">
            <img className="h-icon" alt="clock" src="./time.png"/> 
              <br />
            <img className="h-icon" alt="cloud" src="./cloud.png"/>
          </div>
          <p>
            By Anna Riazantceva and David Hauser
          </p>
      </header>
    );
  };

  export default Header;


