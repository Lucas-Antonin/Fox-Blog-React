import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            skill: ""
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
    }

    handleNameChange(event){
        event.preventDefault();
        this.setState({name: event.target.value});
    }

    handleSkillChange(event){
        event.preventDefault();
        this.setState({skill: event.target.value});
    }

    handleLogin(){
        console.log("Name: " + this.state.name)
        console.log("Skill: " + this.state.skill)
    }

    render(){
        return(
            <div>
                <h1>{this.state.name} is a {this.state.skill}</h1>
                <input type="text" name="name" id="" placeholder="Name" onChange={this.handleNameChange}/>
                <input type="text" name="skill" id="" placeholder="Skill" onChange={this.handleSkillChange}/>
                <button className="btn btn-primary" onClick={this.handleLogin}>Add</button>
            </div>
        )
    }
}





