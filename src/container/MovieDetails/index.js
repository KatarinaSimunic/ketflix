import React from "react";
import "./Movie-details.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Videos from "../../component/Videos";
import Nav from "../../component/Nav";

const url = "https://api.themoviedb.org/3";

function Moviedetails() {
  const [moviedata, setMoviedata] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getmovies() {
      const request = await axios.get(
        `${url}/movie/${id}?api_key=d6839191e269dda942246111abe8bfda&language=en-US`
      );
      setMoviedata(request.data);

      return request;
    }
    getmovies();
  }, [id]);

  return (
    <>
      <Nav />
      <div className="movie-details">
        <div
          className="movie-content"
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("https://image.tmdb.org/t/p/original/${moviedata.backdrop_path}")`,
            backgroundPosition: "Top center",
            objectFit: "contain",
          }}
        >
          <div className="movie-description">
            <h1 className="movie-title">{moviedata.original_title}</h1>

            <p className="movie-overview">{moviedata.overview}</p>

            <li>Popularnost - {moviedata.popularity}</li>
            <li>Ocjena - {moviedata.vote_average}</li>
            <li>Datum premijere - {moviedata.release_date}</li>
            <li>Zarada - {moviedata.revenue}</li>
          </div>
          <div className="movie-poster">
            <h3 className="tagline">{moviedata.tagline}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500/${moviedata.poster_path}`}
              className="movie-image"
              alt={moviedata.name}
            />
          </div>
        </div>
      </div>

      <Videos />
    </>
  );
}

export default Moviedetails;
