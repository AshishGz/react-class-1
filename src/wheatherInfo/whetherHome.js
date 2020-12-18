import React, {Component} from 'react';
import {WhetherAPI} from './whetherApi';
import Header from "../material-example/header";
import {CircularProgress} from "@material-ui/core";
import CurrentWhetherCard from "./currentWhetherCard";

class WhetherHome extends Component {

    constructor(props){
        super(props);
        this.state={
            city:"Kathmandu",
            whetherData:{},
            isLoading:true
        }
    }
  componentDidMount() {
        this.getWhetherData();
  }


    getWhetherData=()=>{
        let self=this;
        WhetherAPI.getCurrentWeatherData('Kathmandu').then(function (res) {
            console.log(res.data);
            self.setState({
                whetherData:res.data,
                isLoading:false
            })

        }).catch(function (error) {
            console.log(error);
        })
    };
    render() {
        return (
            <div>
                <Header/>
                {this.state.isLoading ? <CircularProgress/> :
                    <div>
                        <CurrentWhetherCard data={this.state.whetherData}/>
                    </div>
                }
            </div>
        );
    }
}

export default WhetherHome;
