import React, {Component} from 'react';

class MyThirdComponent extends Component {

    componentDidMount() {
        console.log('this is component did mountt');
    }


    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps);
        console.log(nextContext);
    }
    componentWillUnmount() {
        console.log('this is unmonthj')
    }

    render() {
        return (
            <div>
                this is my third component
            </div>
        );
    }
}

export default MyThirdComponent;
