import React, { Component } from 'react';

class SingIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    render() {
        return (
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header">
                        Sing In
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" aria-describedby="email"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input"/>
                                <label className="form-check-label">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingIn;