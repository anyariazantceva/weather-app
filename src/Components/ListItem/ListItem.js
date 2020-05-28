import React from 'react';
import './ListItem.css';
import time from '../../img/time.png'


const ListItem = (city, country, time) => {
        return (
            <div className="list__div">
                <img className="div__icon" alt="clock" src={time}/> 
                <p className="list__p">{city}</p>
                <p className="list__p">{country}</p>
            </div>
        )
};

export default ListItem;


