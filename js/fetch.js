"use strict";
// axios
import axios from "axios";
// projekt fetch api movie
const API_KEY = "";
const BASE_URL = "";

// zapytanie o popularne filmy
fetchTrendingMovies();
const searchParams = {
  params: {
    page: this.page,
    api_key: MovieApi.API_KEY,
  },
};
return axios.get(`${MovieApi.BASE_URL}trending/movie/week`, searchParams);

// zapytanie o gatunki
export async function getGenres() {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const respGenres = await response.json();

    return respGenres;
  } catch (error) {
    console.log(error.message);
  }
}
// zapytanie po id
fetchMovieId();
const searchParams = {
  params: {
    page: this.page,
    api_key: MovieApi.API_KEY,
  },
};
return axios.get(`${MovieApi.BASE_URL}id/movie/list`, searchParams);

// query

// export
