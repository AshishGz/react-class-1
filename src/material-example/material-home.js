import React, {Component} from 'react';
import Header from "./header";
import FormExample from "./form-example";
import Button from "@material-ui/core/Button/Button";
import StartIcon from "@material-ui/icons/AccessAlarm"
import ButtonGroup from "@material-ui/core/ButtonGroup/ButtonGroup";

class MaterialHome extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{margin:'20px'}}>
                <FormExample/>
                </div>
                <Button variant="outlined" color="secondary"
                        startIcon={<StartIcon />}
                >
                    Primary
                </Button>
                <Button variant="outlined" color="secondary"
                        endIcon={<StartIcon />}
                >
                    Primary
                </Button>
                <ButtonGroup color="secondary" variant="contained" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default MaterialHome;
