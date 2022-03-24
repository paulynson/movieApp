// import { useState, useEffect } from "react";
// import axios from "axios";

const Movie = ({ Title, Poster }) => {
  return (
    <div className="container-content">
      <div className="inner-content">
        <img src={Poster} alt={Title} srcset="" />
        <p>{Title}</p>
      </div>
    </div>
  );
};

export default Movie;
