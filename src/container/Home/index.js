import React from "react";
import "./Home.css";
import api from "../../constant/index";
import { useEffect, useState } from "react";
import axios from "axios";
import MoviesList from "../../component/MovieList/index";
import Nav from "../../component/Nav";
import homebg from "../../Assets/bg.jpg";

function Home() {
  const popular = api.popularmovies;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getmoviedata() {
      const res = await axios.get(popular);

      setMovies(res.data.results);
    }
    getmoviedata();
  }, [popular]);

  return (
    <>
      <Nav />

      <div>
        <div
          className="home"
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(to top, rgba(47,79,79), rgba(0,0,0)),url("${homebg}")`,
            backgroundPosition: "center",
            objectFit: "contain",
          }}
        >
          <div className="movie-list1">
            {movies.map((movie) => (
              <MoviesList {...movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
