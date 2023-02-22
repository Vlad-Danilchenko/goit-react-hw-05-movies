const PERSONAL_KEY = 'd78968a65961b0fbd63bb81018ffc9d2';

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${PERSONAL_KEY}`
  ).then(res => {
    return res.json();
  });
};

export const getMovieDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${PERSONAL_KEY}&language=en-US`
  ).then(res => {
    return res.json();
  });
};

export const getQueryMovies = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${PERSONAL_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  ).then(res => {
    return res.json();
  });
};

export const getCast = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${PERSONAL_KEY}&language=en-US    `
  ).then(res => {
    return res.json();
  });
};

export const getReviews = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${PERSONAL_KEY}&language=en-US&page=1`
  ).then(res => {
    return res.json();
  });
};
