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
      <table>
        <tr>
          <td>ID</td>
          <td>TITLE</td>
          <td>ALBUM</td>
          <td>ARTIST</td>
          <td>GENRE</td>
          <td>RELEASE DATE</td>
          <td>DELETE?</td>
        </tr>
      </table>
      </div>
    );
  }
}

export default TableHeader;
