import React, {Component} from 'react';
import MyThirdComponent from "./myThirdComponent";


class MySecondComponent extends Component {
    render() {
        return (
            <div>
               This is my Second Component
                <MyThirdComponent/>
            </div>
        );
    }
}

export default MySecondComponent;
