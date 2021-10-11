import React, { Component } from 'react';
import './App.css';
import SongTable from './SongTable/SongTable';
import TableHeader from './TableHeader/TableHeader';
import SongCreateForm from './SongCreateForm/SongCreateForm';

import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);

        
        
        this.state = {
           songs: [],
        }
    }

    componentDidMount = () => {
        this.getAllSongs();
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

    createSong = async (newSong) => {
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
        this.getAllSongs(); 
        return response.status; 
         
    }
    

    render() {
        return (
            <div className="container-fluid">
                <TableHeader getSongs={this.getAllSongs}/>
                <SongTable songs={this.state.songs}  deleteASong={this.deleteSong}/>
                <SongCreateForm createASong={this.createSong}/>
            </div>
        )
    }
}

export default App;