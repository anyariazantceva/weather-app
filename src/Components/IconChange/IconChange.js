import React from 'react';
import './IconChange.css';
import sun from '../../img/sun.png';
import rain from '../../img/rain.png';
import wind from '../../img/wind.png';
import snow from '../../img/snow.png';
import cloud from '../../img/cloud.png';
import summer from '../../img/summer.png';


export default function IconChange(props) {

    let image;

    if (this.props.desc.includes('cloud') === true) {
        return image = <div><img className="h__icon" alt='cloud' src={cloud} /></div>; 
    } else if (props.desc.includes('rain') === true) {
        return image = <div><img className="h__icon" alt='rain' src={rain} /></div>; 
    } else if (props.desc.includes('sun') === true) {
        return image = <div><img className="h__icon" alt='sun' src={sun} /></div>;
    } else if (props.desc.includes('wind') === true) {
        return image = <div><img className="h__icon" alt='wind' src={wind} /></div>;
    } else if (props.desc.includes('snow') === true) {
        return image = <div><img className="h__icon" alt='snow' src={snow} /></div>;
    } else {
        return image = <div><img className="h__icon" alt='spring' src={summer} /></div>;
        };
}


