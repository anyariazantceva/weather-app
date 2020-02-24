import React from 'react';
import './Header.css';
import time from '../../img/time.png'
import sun from '../../img/sun.png'

const Header = (props) => {
    return (
        <header className="h__header">
          <h1 className="header__h1"><span className="span1">T</span>ime and <span className="span2">W</span>eather</h1>
          <div className="h__icon__div">
            <img className="h__icon" alt="clock" src={time}/> 
              <br />
            <img className="h__icon" alt="cloud" src={sun}/>
          </div>
      </header>
    );
  };

  export default Header;


