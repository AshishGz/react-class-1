import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import "./materil-css.css";
import Grid from "@material-ui/core/Grid/Grid";

class FormExample extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:""
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.id]:event.target.value
        })
    };


    render() {
        return (
            <div>

                        <Grid container  spacing={2}>
                            {[0, 1, 2].map((value) => (
                                <Grid key={value} item xs="6" sm="4">
                                    <TextField
                                        id="name"
                                        label="Enter Name"
                                        variant="outlined"
                                        color="secondary"
                                        value={this.state.name}
                                        placeholder="Enter Name"
                                        helperText="Please Enter Valid Name"
                                        error={false}
                                        disabled={false}
                                        onChange={this.handleChange}
                                        fullWidth={true}
                                    />
                                </Grid>
                            ))}
                        </Grid>
            </div>
        );
    }
}

export default FormExample;
