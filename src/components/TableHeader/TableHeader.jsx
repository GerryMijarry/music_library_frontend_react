import React, { Component } from "react";
import "./TableHeader.css";

class TableHeader extends Component {

  sortTitleHandler = () => {
    this.props.sortByTitle();
  };

  sortAlbumHandler = () => {
    this.props.sortByAlbum();
  };

  sortArtistHandler = () => {
    this.props.sortByArtist();
  };

  sortGenreHandler = () => {
    this.props.sortByGenre();
  };

  sortReleaseDateHandler = () => {
    this.props.sortByTitle();
  };


  render() {
    return (

      <div>
      <table>
        <tr>
          <td>ID</td>
          <td><button onClick={this.sortTitleHandler}>Title &#x21D5;</button></td>
          <td><button onClick={this.sortAlbumHandler}>Album &#x21D5;</button></td>
          <td><button onClick={this.sortArtistHandler}>Artist &#x21D5;</button></td>
          <td><button onClick={this.sortGenreHandler}>Genre &#x21D5;</button></td>
          <td><button onClick={this.sortReleaseDateHandler}>Release Date &#x21D5;</button></td>
          <td>Delete?</td>
        </tr>
      </table>
      </div>
    );
  }
}

export default TableHeader;
