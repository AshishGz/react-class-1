import React, {Component} from 'react';
import axios from 'axios';
import CovidCard from "./component/covidCard";
import ErrorComponent from "./component/errrorComponent";

class ApiCall extends Component {

    constructor(props){
        super(props);
        this.state={
            covidData:[],
            duplicateData:[],
            loading:true,
            error:false,
        }
    }

    componentDidMount() {
        this.getRemoteData();
    }

    getRemoteData=()=>{
        let self=this;
      axios.get('https://coronavirus-19-api.herokuapp.com/countries').
      then(function (response) {
          console.log(response.data);
            self.setState({
                covidData:response.data,
                duplicateData:response.data,

                loading:false
            })
      }) .catch(function (error) {
            self.setState({
                error:true
            })
      });
    };
    onRetry=()=>{
        this.setState({error:false,loading:true});
        this.getRemoteData();
    };
    handleChange=(event)=>{
        let data=this.state.covidData.filter(function (val) {
            if(val.country.toLowerCase().
            indexOf(event.target.value.toLowerCase())!=-1){
                return val;
            }
        });
        this.setState({
            duplicateData:data
        })
    };
    render() {
        return (
            <div style={{maxWidth:600,margin:'20px auto'}}>
                {this.state.error?
                    <ErrorComponent onRetry={this.onRetry}/>:


                    this.state.loading ?
                    <div>data is loading</div> :
                    <div>
                        <input type="text" onChange={this.handleChange}
                               style={{width:'100%',marginBottom:12}}/>
                        {
                            this.state.duplicateData.map((data) =>
                                <CovidCard data={data}/>
                            )
                        }
                    </div>
                }
            </div>
        );
    }
}

export default ApiCall;
