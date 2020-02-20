import React, {Component} from "react";
import Weather from "./Weather";


export default class WeatherWrap extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='weather__wrapper'>
                <Weather city='Helsinki' country='finland'/>
                <Weather city='New York City' country='usa'/>
                <Weather city='Singapore' country='singapore'/>
                <Weather city='Lagos' country='nigeria'/>
            </div>

        )
    }
}
