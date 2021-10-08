import React, { Component } from 'react';
import './SongTable.css';

class SongTable extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
         songs: []


      }
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getSongs(this.state.songs)

  }

  render() {
      return (
        <ul>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Get Songs</button>
        </form>
        {this.props.songs.map(item => {
          return <table>
            <tr>
                        <th>Superhero ID</th>
                        <th>name</th>
                        <th>1st Ability</th>
                        <th>2nd Ability</th>
            </tr>
            <tr>
            <td>{item.title}</td>
            <td>{item.album}</td>
            <td>{item.artist}</td>
            <td>{item.genre}</td>
            <td>{item.release}</td>
            </tr>
          </table>
          
        })}
      </ul>
      )
  }
}

export default SongTable;