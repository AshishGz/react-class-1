import React, {Component} from 'react';
import MySecondComponent from './mySecondComponent';
class MyFirstComponent extends Component {
    render() {
        return (
            <div>
                <h1>dsad</h1>
                This is MY First Component
                <MySecondComponent/>
            </div>

        );
    }
}

export default MyFirstComponent;
