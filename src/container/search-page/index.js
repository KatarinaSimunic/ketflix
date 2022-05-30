import React from "react";
import "./Search.css";
import { useState } from "react";
import axios from "axios";
import MoviesList from "../../component/MovieList";
import api from "../../constant/index";
import Nav from "../../component/Nav";
import bgimg from "../../Assets/Homebackground.jpg";

function Search() {
  const [searchTerm, setSearcTerm] = useState("");
  const [searchedmovies, setSearchedMovies] = useState([]);
  const [searchedmovies1, setSearchedMovies1] = useState([]);
  const APIkey = `d6839191e269dda942246111abe8bfda`;

  const BaseUrl = api.BaseUrl;

  async function handleonSubmit(e) {
    e.preventDefault();
    const searchAPI = `${BaseUrl}/search/multi?api_key=${APIkey}&language=en-US&query=${searchTerm}&`;

    const response = await axios.get(searchAPI);
    setSearchedMovies1(response.data.results);
    console.log(searchTerm);
  }

  async function fetchtrendingmovie() {
    const response = await axios.get(`
        https://api.themoviedb.org/3/movie/popular?api_key=d6839191e269dda942246111abe8bfda&language=en-US&page=1`);
    setSearchedMovies(response.data.results);
    // console.log(searchedmovies);
  }

  fetchtrendingmovie();

  return (
    <>
      <Nav />
      <div></div>
      <div
        className="search-page"
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to top, rgba(47,79,79), rgba(0,0,0)),url("${bgimg}")`,
          backgroundPosition: "center",
          objectFit: "contain",
        }}
      >
        <div className="search">
          <form onSubmit={handleonSubmit}>
            <input
              type="search"
              placeholder="  PRONAĐI FILM...   &darr; "
              className="search-bar "
              // value={searchTerm}
              onChange={(e) => setSearcTerm(e.target.value)}
            ></input>
          </form>
        </div>
        <div className="movie-list">
          {
            searchedmovies1.length > 0
              ? searchedmovies1.map((movie) => (
                  <MoviesList {...movie} key={movie.id} />
                ))
              : searchedmovies.map((movie) => (
                  <MoviesList {...movie} key={movie.id} />
                ))

            // <h1 id="search-heading">Film nije pronađen.</h1>
          }
        </div>
        {/* <div className="movie-list">
          {searchedmovies1.length > 0 ? <p>test</p> : <p>nije pronadjeno</p>}
        </div> */}
      </div>
    </>
  );
}
export default Search;
