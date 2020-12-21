import React, {Component} from 'react';

class PrevState extends Component {

    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    }

    handleIncrement=()=>{
        this.setState(prevstate=>({
            counter:prevstate.counter+1
        }));
    };
    render() {

        return (
            <div>
               <div>Counter Value {this.state.counter}</div>
                <button onClick={()=>this.handleIncrement()}>Increment</button>
            </div>
        );
    }
}

export default PrevState;
