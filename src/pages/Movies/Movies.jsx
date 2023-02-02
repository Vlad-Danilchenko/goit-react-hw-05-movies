import { toast } from 'react-toastify';
import {
  SearchForm,
  InputForm,
  FormButton,
  MovieList,
  MovieItem,
  MovieImg,
  MovieLink,
  MovieTitle,
} from './Movies.styled';

import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const PERSONAL_KEY = 'd78968a65961b0fbd63bb81018ffc9d2';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [queryMovies, setQueryMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // console.log(query);
  const location = useLocation();

  const handleSearchQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Заповніть поле пошуку');
      return;
    }
    setSearchParams({ query: searchQuery });
    setSearchQuery('');
    // console.log(query);
  };

  useEffect(() => {
    if (query === null) {
      return;
    }
    setQueryMovies([]);
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${PERSONAL_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    )
      .then(res => {
        return res.json();
      })
      .then(promis => {
        const moviesArray = promis.results.map(
          ({ id, title, name, poster_path }) => {
            let movieTitle = '';
            if (title) {
              movieTitle = title;
            }
            if (name) {
              movieTitle = name;
            }
            return { id, movieTitle, poster_path };
          }
        );
        setQueryMovies(moviesArray);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return (
    <main>
      <SearchForm onSubmit={handleSubmit}>
        <InputForm
          type="text"
          autoComplete="off"
          autoFocus
          placeholder=""
          value={searchQuery}
          onChange={handleSearchQueryChange}
        ></InputForm>
        <FormButton type="submit">Search</FormButton>
      </SearchForm>
      {queryMovies && (
        <MovieList>
          {queryMovies.map(({ id, movieTitle, poster_path }) => (
            <MovieItem key={id}>
              <MovieLink to={`${id}`} state={{ from: location }}>
                <MovieImg
                  alt={`${movieTitle}`}
                  src={`${BASE_IMG_URL}${poster_path}`}
                />
                <MovieTitle>{movieTitle}</MovieTitle>
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
      {loading && <Loader />}
    </main>
  );
};

export default Movies;
