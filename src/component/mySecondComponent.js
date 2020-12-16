import React, {Component} from 'react';
import MyThirdComponent from "./myThirdComponent";
import {withRouter} from "react-router-dom";


class MySecondComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                {this.props.match.params.id}<br/>
                {this.props.match.params.value}<br/>
                USer Name from Component 1:<br/>
                {this.props.userName}<br/>
                {this.props.address}<br/>
                {this.props.number}<br/>
                {this.props.test}
                <button onClick={()=>this.props.callFromSecondComponent('Ashish')}>Call Functtion</button>
            </div>
        );
    }
}

export default withRouter(MySecondComponent);
