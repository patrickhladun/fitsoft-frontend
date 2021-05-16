import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const { title, description } = this.props;
        return (
            <Fragment>
                <div className="header">
                <ul>
                    <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
                    <li><NavLink to="/login" activeClassName="is-active">Log in</NavLink></li>
                    <li><NavLink to="/signup" activeClassName="is-active">Sign up</NavLink></li>
                </ul>
                </div>
            </Fragment>
        )
    }
}

export default Header;