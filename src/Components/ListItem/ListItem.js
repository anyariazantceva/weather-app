import React from 'react';
import './ListItem.css';
import time from '../../img/time.png'

const ListItem = (props) => {
        console.log(props);
        return (
            <div className="list__div">
                <img className="div__icon" alt="clock" src={time}/> 
                <p className="list__p">{props.data.timezone}</p>
                <p className="list__p">{props.data.datetime}</p>
            </div>
        )
};

export default ListItem;


