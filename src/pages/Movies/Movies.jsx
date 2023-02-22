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
import { getQueryMovies, BASE_IMG_URL } from 'services';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [queryMovies, setQueryMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
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
  };

  useEffect(() => {
    if (query === null) {
      return;
    }
    setQueryMovies([]);
    setLoading(true);
    getQueryMovies(query)
      .then(promis => {
        const moviesArray = promis.results.map(
          ({ id, title, name, poster_path }) => {
            let movieTitle = title || name;
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
