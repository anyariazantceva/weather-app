import React, {Component} from "react";
import ListItem from "../ListItem/ListItem";



export default class List extends Component {
    constructor () {
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
            <div className="time__wrap">
                <ListItem data={this.state.europe} />
                <ListItem data={this.state.usa} />
                <ListItem data={this.state.asia} />
                <ListItem data={this.state.africa} />
            </div>
        )
    }
}
