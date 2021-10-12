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

    sortSongsByTitle = () => {
        this.setState({songs: this.state.songs.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))});
    }

    sortSongsByAlbum = () => {
        this.setState({songs: this.state.songs.sort((a, b) => a.album.toLowerCase().localeCompare(b.album.toLowerCase()))});
    }

    sortSongsByArtist = () => {
        this.setState({songs: this.state.songs.sort((a, b) => a.artist.toLowerCase().localeCompare(b.artist.toLowerCase()))});
    }

    sortSongsByGenre = () => {
        this.setState({songs: this.state.songs.sort((a, b) => a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()))});
    }

    sortSongsByRealeaseDate = () => {
        this.setState({songs: this.state.songs.sort((a,b)=>a.getTime()-b.getTime())});
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
                <TableHeader sortByTitle={this.sortSongsByTitle} sortByAlbum={this.sortSongsByAlbum} sortByArtist={this.sortSongsByArtist} sortByGenre={this.sortSongsByGenre}/>
                <SongTable songs={this.state.songs}  deleteASong={this.deleteSong} sortByTitle={this.sortSongsByTitle}/>
                <SongCreateForm createASong={this.createSong}/>
            </div>
        )
    }
}

export default App;