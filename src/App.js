import React, {Component} from 'react';
import './App.css';
import MyFirstComponent from './component/myFirstComponent';
import MyThirdComponent from "./component/myThirdComponent";
import DigitalClock from "./digitalClock";

export default class App extends Component {

    render() {
        return (
            <div className="headerName">
                <MyFirstComponent/>
            </div>
        );
    }
}


