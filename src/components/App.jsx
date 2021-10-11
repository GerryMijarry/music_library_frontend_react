import React, { Component } from 'react';
import './App.css';
import SongTable from './SongTable/SongTable';
import TableHeader from './TableHeader/TableHeader';

import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);

        
        
        this.state = {
           songs: [],
        }
    }


    getAllSongs = async () => {
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs : response.data
        });
        
    }

    deleteSong = async (songId) => {
        let response = await axios.delete('http://127.0.0.1:8000/music/' + songId + '/')
        this.getAllSongs(); 
        return response.status; 
         
    }
    

    render() {
        return (
            <div className="container-fluid">
                <TableHeader getSongs={this.getAllSongs}/>
                <SongTable songs={this.state.songs}  deleteASong={this.deleteSong}/>
            </div>
        )
    }
}

export default App;