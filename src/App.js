import React, {Component} from 'react';
import './App.css';
import Routes from "./routes";
import {theme} from "./theme";
import {ThemeProvider} from '@material-ui/core/styles';
import firebase from 'firebase';
export default class App extends Component {

    constructor(props){
        super(props)
        this.state={
            initializing:true
        }

    }

    initFireBase=()=>{
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCeoWhCPIwO0gMDGwF8IDdiwIrq8J2CI6Y",
            authDomain: "user-feedback-4ad52.firebaseapp.com",
            projectId: "user-feedback-4ad52",
            storageBucket: "user-feedback-4ad52.appspot.com",
            messagingSenderId: "785577425700",
            appId: "1:785577425700:web:0eacb6533154af71de11b1",
            measurementId: "G-E822CJ1KS6"
        };
        firebase.initializeApp(firebaseConfig);
        this.setState({
            initializing:false
        })
    };
    componentDidMount() {
        this.initFireBase();
    }

    render() {
        return (
            <div>
                {this.state.initializing ? 'Please wait' :
                    <ThemeProvider theme={theme}>
                        <Routes/>
                    </ThemeProvider>
                }
            </div>
        );
    }
}


