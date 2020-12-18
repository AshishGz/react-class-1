import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MyFirstComponent from "./component/myFirstComponent";
import DigitalClock from "./digitalClock";
import ApiCall from "./apiCall";
import MySecondComponent from "./component/mySecondComponent";
import MaterialHome from "./material-example/material-home";
import TabUi from "./material-example/tabUI";
import WhetherHome from "./wheatherInfo/whetherHome";

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                        <Switch>
                            <Route path="/" exact>
                                <MyFirstComponent/>
                            </Route>
                            <Route path="/clock" exact>
                                <DigitalClock/>
                            </Route>
                            <Route path="/api-call" exact>
                                <ApiCall/>
                            </Route>
                            <Route path="/mui" exact>
                                <MaterialHome/>
                            </Route>
                            <Route path="/dynamicRoute/:id/:value" exact>
                                <MySecondComponent/>
                            </Route>
                            <Route path="/tab" exact>
                                <TabUi/>
                            </Route>
                            <Route path="/whether" exact>
                                <WhetherHome/>
                            </Route>
                        </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;
