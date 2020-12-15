import React, {Component} from 'react';

class ErrorComponent extends Component {
    render() {
        return (
            <div>
               <p>Some Thing Went Wrong</p>
               <button onClick={()=>this.props.onRetry()}>Retry</button>
            </div>
        );
    }
}

export default ErrorComponent;
