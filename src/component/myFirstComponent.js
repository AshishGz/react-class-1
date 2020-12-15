import React, {Component} from 'react';
import MySecondComponent from './mySecondComponent';
import {Link} from "react-router-dom";


class MyFirstComponent extends Component {

  constructor(props){
      super(props);
      this.state={
          username:"",
          address:"",
          number:""
      };
      console.log(this.props);
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

                <Link
                    to={{
                        pathname: "/clock",
                        search: "?sort=name",
                        hash: "#the-hash",
                    }}
                ><button>Go to Digital Clock</button></Link>
            </div>

        );
    }
}

export default MyFirstComponent;

