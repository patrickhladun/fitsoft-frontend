import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NotFound from './pages/notfound';
import Header from './components/structure/header';

class App extends Component {
    constructor(props) {
        super(props);
        this.loginHandler = this.loginHandler.bind(this);
    }
    state = {
        isAuth: false,
    };

    componentDidMount() {
        // console.log('mouted');
        // const token = localStorage.getItem('token');
        // const expiryDate = localStorage.getItem('expiryDate');
        // if (!token || !expiryDate) {
        //   return;
        // }
        // if (new Date(expiryDate) <= new Date()) {
        //   this.logoutHandler();
        //   return;
        // }
        // const userId = localStorage.getItem('userId');
        // const remainingMilliseconds =
        //   new Date(expiryDate).getTime() - new Date().getTime();
        // this.setState({ isAuth: true, token: token, userId: userId });
        // this.setAutoLogout(remainingMilliseconds);
    }
    loginHandler() {
        console.log('Clicked');
    }
    render() {
        let routes = (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route component={NotFound} />
            </Switch> 
        );
        if(this.state.isAuth) {
            routes = (
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route component={NotFound} />
                </Switch> 
            );
        }
        return (
            <Fragment>
                {console.log(this.state)}
                <Header />
                <button onClick={this.loginHandler}>Click me</button>
                {routes}
            </Fragment>
        )
    }
}

export default App;