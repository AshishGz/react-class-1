import React, {Component} from 'react';

class CovidCard extends Component {
    render() {
        let item=this.props.data;
        return (
            <div style={{background:'#f5f5f5',padding:20,marginBottom:20}}>
                <p>{item.country}</p>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>New Cases</div>
                    <div>News Death</div>
                    <div>New Recoverd</div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div style={{color:'#3225ee'}}>{item.cases}</div>
                    <div style={{color:'#321221'}}>{item.deaths}</div>
                    <div style={{color:'#3225ee'}}>{item.recovered}</div>
                </div>
                <div style={{height:20}}></div>
                <hr/>
                <div style={{height:20}}></div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>Total Cases</div>
                    <div>Total Death</div>
                    <div>Total Recoverd</div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div style={{color:'#3225ee'}}>{item.todayCases}</div>
                    <div style={{color:'#321221'}}>{item.todayDeaths}</div>
                    <div style={{color:'#3225ee'}}>{item.active}</div>
                </div>
                <div style={{height:20}}></div>
                <hr/>
                <div style={{height:20}}></div>
                <div style={{textAlign:'center'}}>Critical Patients</div>
                <div style={{textAlign:'center'}}>{item.critical}</div>
                </div>
        );
    }
}

export default CovidCard;
