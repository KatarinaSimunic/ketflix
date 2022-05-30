import React from "react";
import { Link } from "react-router-dom";
import api from "../../constant/index";
import "./MovieList.css";

const MoviesList = ({
  id,
  title,
  vote_average,
  overview,
  poster_path,
  release_data,
}) => {
  const imageapi = api.ImgUrl_w500;
  return (
    <>
      <div id="MoviesList">
        <div className="wrapper">
          <section id="section1">
            <Link to={`/MovieDetails/${id}`}>
              <div className="item">
                <img src={`${imageapi}${poster_path}`} alt={title}></img>
              </div>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};
export default MoviesList;
