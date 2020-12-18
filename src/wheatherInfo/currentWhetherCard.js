import React, {Component} from 'react';
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";

class CurrentWhetherCard extends Component {
    render() {
        let whether=this.props.data;
        return (
            <div>
               <Card>
                   <div style={{color:"#eb6e4b",fontSize:16}}>
                       {new Date().toDateString()}
                   </div>
                   <div style={{fontSize:20,fontWeight:900,marginTop:8}}>
                       {whether.name},{whether.sys.country}
                   </div>
                   <div>
                       SunRise : {new Date(whether.sys.sunrise).toLocaleString()}
                   </div>
                   <div>
                       SunSet : {new Date(whether.sys.sunset).toLocaleString()}
                   </div>

                   <Grid container  spacing={2} style={{marginTop:20}}>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Temperature</div>
                           <div>{whether.main.temp}</div>
                       </Grid>
                       <Grid item xs="3" sm="2" style={{margin:10}}>
                           <div>Min Temperature</div>
                           <div>{whether.main.temp_min}</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>MAx Temperature</div>
                           <div>{whether.main.temp_max}</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Pressure</div>
                           <div>{whether.main.pressure}</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Humidity</div>
                           <div>{whether.main.humidity}</div>
                       </Grid>
                   </Grid>
               </Card>
            </div>
        );
    }
}

export default CurrentWhetherCard;
