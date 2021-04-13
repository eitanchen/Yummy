import React, {Component, Fragment} from 'react';
import Toolbar from '../Toolbar/Toolbar'
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import classes from "./Layout.css"
import { Switch, BrowserRouter, Route, NavLink} from 'react-router-dom';

class Layout extends Component
{
    state = {
        showSideDrawer: false
    }

    render()
    {
        return (
            <BrowserRouter>
                <Toolbar/>
                <div className={classes.Content}>
                 {/*<Home/>*/}
                 {/*<Profile/>*/}
                <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/login" exact component={Home}/>
                    <Route path="/contact" exact component={Home}/>
                    <Route path="/notifications" exact component={Home}/>
                </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Layout;
