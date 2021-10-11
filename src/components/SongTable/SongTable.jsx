import React, { Component } from "react";
import "./SongTable.css";

class SongTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };
  }

  deleteSubmit = (event) => {
    event.preventDefault();
    this.props.deleteASong(event.target.elements.song_id.value);
  };

  render() {
    return (
      <div>
        {this.props.songs.map((item) => {
          return (
            <tr>
              <input name="song_id" value={item.id} />
              <td>{item.title}</td>
              <td>{item.album}</td>
              <td>{item.artist}</td>
              <td>{item.genre}</td>
              <td>{item.release_date}</td>
              <td>
                <form onSubmit={this.deleteSubmit}>
                  <button type="submit">Delete</button>
                </form>
              </td>
            </tr>
          );
        })}
      </div>
    );
  }
}

export default SongTable;
