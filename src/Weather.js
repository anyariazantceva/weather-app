import React, {Component} from 'react';


const API_KEY = 'be98995764ebb14bdc5bae72c87e1fc4';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            country: '',
            celsius: 0,
            description: ''
        };
        this.getWeather();
    }

    calCelsius (temp) {
        let c = Math.floor(temp - 273.15);
        return c;
    }
    getWeather = async () => {
        const {city, country} = this.props;
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const response = await apiCall.json();

        this.setState({
            city: response.name,
            country: response.sys.country,
            celsius: this.calCelsius(response.main.temp),
            description: response.weather[0].description
        })
    };

    render() {
        const {city, country, celsius, description } = this.state;
        return (
            <div className='weather__item'>
                {city} {country} {celsius} {description}
            </div>
        )
    }
}
