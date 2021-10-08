import React, { Component } from 'react';


class SongCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            SongId : "",
            name : "",
            primaryAbility : "",
            secondarAbility : "",
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSong(this.state)

    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Unique ID:</label>
                <input name="SongId" onChange={this.handleChange} value={this.state.SongId}/>
                <label>Song Name:</label>
                <input name="name" onChange={this.handleChange} value={this.state.name}/>
                <label>Primary Ability:</label>
                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility}/>
                <label>Secondary Ability:</label>
                <input name="secondarAbility" onChange={this.handleChange} value={this.state.secondarAbility}/>
                
                
                
                <button type="submit">Create Song</button>
            </form>
         );
    }
}
 
export default SongCreateForm;