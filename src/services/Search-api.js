import axios from 'axios';
import options from './ApiOptions';
// const API_KEY = '94ccdc0d7f2d874dfe0b82183e18e329';

// const BASE_URL = 'https://api.themoviedb.org/3/movie/';
// https://api.themoviedb.org/3/movie/550?api_key=94ccdc0d7f2d874dfe0b82183e18e329

// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9
//   .eyJhdWQiOiI5NGNjZGMwZDdmMmQ4NzRkZmUwYjgyMTgzZTE4ZTMyOSIsInN1YiI6IjY0NjVmZDdlYTUwNDZlMDBlNWI1MDBjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
//   .uQwgCh7Dwgcvue4ZCmBq70fD9FuC0cja1l53oOovpSo;
const FetchSearch = async searchQuery => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}include_adult=false&language=en-US&page=1`,
      options
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
export default FetchSearch;

// ' trending
// https://api.themoviedb.org/3/movie/movie_id?language=en-US  details
// https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US credits
// https://api.themoviedb.org/3/movie/{movie_id}/reviews  reviews
