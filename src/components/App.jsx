import React, { Component } from 'react';
import './App.css';
import SongTable from './SongTable/SongTable';

import axios from "axios";



class App extends Component {
    constructor(props) {
        super(props);

        
        
        this.state = {
           songs: []


        }
    }


    getAllSongs = () => {
        axios.get('http://127.0.0.1:8000/music/')
        .then((response) => this.setState({
            songs: response.data
        }));
        
    }
    

    render() {
        return (
            <div className="container-fluid">
                <SongTable songs={this.state.songs} getSongs={this.getAllSongs} />
            </div>
        )
    }
}

export default App;