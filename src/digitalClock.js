import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class DigitalClock extends Component {
    constructor(props){
        super(props);

        this.state ={
            date:new Date()
        };

    }

    componentDidMount() {
        let self=this;
        this.timer=setInterval(function () {
            self.setState({
                date:new Date()
            })
        },1000)
        console.log(this.timer);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    clearTimer=()=>{
      clearInterval(this.timer);
    };

    render() {
        return (
            <div style={{position:'relative',height:'99vh'}}>
                {this.props.location.state.name}
                <div style={{display:'flex',
                    position:'absolute',top:'30%',left:'30%'}}>
                    <div style={{padding:20}}>{this.state.date.getHours()}</div>
                    <div style={{padding:20}}>{this.state.date.getMinutes()}</div>
                    <div style={{padding:20}}>{this.state.date.getSeconds()}</div>
                </div>
                <button onClick={this.clearTimer}>Clear Timer</button>
            </div>
        );
    }
}

export default withRouter(DigitalClock);
