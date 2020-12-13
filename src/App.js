import React, {Component} from 'react';
import './App.css';
import MyFirstComponent from './component/myFirstComponent';

export default class App extends Component {

    render() {
        return (
            <div className="headerName">
            <div style={{margin:'auto'}}>
                <p style={{fontSize:30,textAlign:'center'}}>dadasda</p>
                THis is react Class
            </div>
            <div>
            </div>
                <MyFirstComponent/>
            </div>
        );
    }
}


