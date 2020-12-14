import React, {Component} from 'react';
import MySecondComponent from './mySecondComponent';

class MyFirstComponent extends Component {
  constructor(props){
      super(props);
      this.state={
          username:"",
          address:"",
          number:""
      };
      //this.handleChange=this.handleChange.bind(this);
  }


    handleChange=(event)=>{
      this.setState({
          [event.target.name]:event.target.value
      })

    };

  callFromSecondComponent=(name)=>{
      alert('hello '+name);
  };
    render() {
        return (
            <div>
                <input type="text" name="address"
                onChange={this.handleChange}
                />
                <input type="text" name="username"
                onChange={this.handleChange}
                />
                <input type="number" name="number"
                onChange={this.handleChange}
                />
                <MySecondComponent
                    userName={this.state.username}
                    address={this.state.address}
                    number={this.state.number}
                    test="THis is Test"
                    callFromSecondComponent={this.callFromSecondComponent}
                />

            </div>

        );
    }
}

export default MyFirstComponent;

