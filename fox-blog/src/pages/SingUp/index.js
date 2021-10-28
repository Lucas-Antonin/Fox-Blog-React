import React, { Component } from 'react';
import axios from 'axios';
import { showFullScreenLoader, closeFullScreenLoader, showErrorMessage } from "../../services/swalService";

const api = axios.create({
    baseURL: "http://localhost:8000"
});


class SingUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ [event.target.email]: event.target.value });
        this.setState({ [event.target.password]: event.target.value });
    }

    /**
   * Make sign up request 
   */
    handleSubmit = async (event) => {
        try {
            event.preventDefault();
            showFullScreenLoader();
            const user = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            };
            if (!user.username || !user.email || !user.password) {
                showErrorMessage('Please check your input data');
              }
              else {
                await api.post(`/user/register`, { user });
                closeFullScreenLoader();
                this.props.history.push('/');
              }
        }
        catch (err) {
            showErrorMessage('Invalid email or password');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header">
                        Sing Up
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" name="username" className="form-control" onChange={this.handleChange} autoComplete="off" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" onChange={this.handleChange} />
                                <div className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingUp;