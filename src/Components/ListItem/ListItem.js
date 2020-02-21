import React, {Component} from 'react';
import './ListItem.css';


const ListItem = (props) => {

        return (
            <div className="list-div">
                <p className="list-p">{props.data.timezone}</p>
                <p className="list-p">{props.data.datetime}</p>
            </div>
        )

};

export default ListItem


