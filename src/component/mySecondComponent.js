import React, {Component} from 'react';
import MyThirdComponent from "./myThirdComponent";


class MySecondComponent extends Component {
    render() {
        return (
            <div>
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

export default MySecondComponent;
