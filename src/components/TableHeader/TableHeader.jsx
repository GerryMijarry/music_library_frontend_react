import React, { Component } from "react";
import "./TableHeader.css";

class TableHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };
  }

  getSubmit = (event) => {
    event.preventDefault();
    this.props.getSongs(this.state.songs);
  };

  render() {
    return (
      <div>
      <form onSubmit={this.getSubmit}>
            <button type="submit">Get Songs</button>
      </form>
      
      <table>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>ALBUM</th>
          <th>ARTIST</th>
          <th>GENRE</th>
          <th>RELEASE DATE</th>
          <th>DELETE</th>
        </tr>
      </table>
      </div>
    );
  }
}

export default TableHeader;
