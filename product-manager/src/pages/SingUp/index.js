import React, { Component } from 'react';

class SingUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
        };
    }

    render() {
        return (
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header">
                        Sing Up
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" />
                                <div className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" />
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