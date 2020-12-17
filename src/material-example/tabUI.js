import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";

class TabUi extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabIndex:0
        }
    }
    handleChange=(event,newValue)=>{
        this.setState({
            tabIndex:newValue
        })

    }


    render() {
        return (
            <div>
                <AppBar position="static">
                    <Tabs value={this.state.tabIndex} onChange={this.handleChange} aria-label="simple tabs example">
                        <Tab label="Item One"  />
                        <Tab label="Item Two" />
                        <Tab label="Item Three"  />
                    </Tabs>
                </AppBar>
                {this.state.tabIndex==0?
                <div>
                   index o
                </div>:''}
                {this.state.tabIndex==1?
                <div>
                   index 1
                </div>:''}
                {this.state.tabIndex==2?
                <div>
                   index 2
                </div>:''}
            </div>
        );
    }
}

export default TabUi;
