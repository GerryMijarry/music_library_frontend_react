import React from "react";

const SortBar = (props) => {
  

//   idSortSubmit = (event) => {
//     event.preventDefault();
//   };

  const titleSortClickHandler = () => {
    
    let sortedSongs = props.songs.sort((a, b) => (a.title > b.title ? 1 : -1));

    props.songs = sortedSongs;
  };

//   albumSortSubmit = (event) => {
//     event.preventDefault();
//   };

//   artistSortSubmit = (event) => {
//     event.preventDefault();
//   };

//   genreSortSubmit = (event) => {
//     event.preventDefault();
//   };

//   dateSortSubmit = (event) => {
//     event.preventDefault();
//   };

  return (
    <div>
      <table>
        <tr>
          <td>
            
              <button type="submit">Sort by ID</button>
            
          </td>
          <td>   
              <button onClick={titleSortClickHandler}>Sort by Title</button>
          </td>
          <td>
            
              <button type="submit">Sort by Album</button>
            
          </td>
          <td>
            
              <button type="submit">Sort By Artist</button>
           
          </td>
          <td>
           
              <button type="submit">Sort By Genre</button>
            
          </td>
          <td>
            
              <button type="submit">Sort By Release Date</button>
            
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default SortBar;
