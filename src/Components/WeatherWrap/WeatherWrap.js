import React, {Component} from "react";
import Weather from "../Weather/Weather";
import './WeatherWrap.css'


export default class WeatherWrap extends Component {
    
    render() {
        return (
            <div className="weather__wrap">
                <Weather className='list__div' city='Helsinki' country='finland'/>
                <Weather className='list__div' city='New York City' country='usa'/>
                <Weather className='list__div' city='Singapore' country='singapore'/>
                <Weather className='list__div' city='Lagos' country='nigeria'/>
            </div>
        )
    }
}
