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
fetchTrendingMovies();
const searchParams = {
  params: {
    page: this.page,
    api_key: MovieApi.API_KEY,
  },
};
return axios.get(`${MovieApi.BASE_URL}genre/movie/list`, searchParams);

// zapytanie po id
fetchTrendingId();
const searchParams = {
  params: {
    page: this.page,
    api_key: MovieApi.API_KEY,
  },
};
return axios.get(`${MovieApi.BASE_URL}id/movie/list`, searchParams);

// zapytanie query
