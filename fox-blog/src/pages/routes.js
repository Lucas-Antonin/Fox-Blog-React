import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from '../App';
import SingIn from './SingIn/index';
import SingUp from './SingUp/index';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/singin" component={SingIn} />
            <Route exact path="/singup" component={SingUp} />
        </Switch>
    </BrowserRouter>
)

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fox Blog</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                        <Link className="nav-link" to='/singin'>
                            SingIn
                        </Link>
                        <Link className="nav-link" to='/singup'>
                            SingUp
                        </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Routes;