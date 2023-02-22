import {
  MainTitle,
  MovieList,
  MovieItem,
  MovieImg,
  MovieTitle,
  MovieLink,
} from './Home.styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getTrendingMovies, BASE_IMG_URL } from 'services';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then(promis => {
        const moviesArray = promis.results.map(
          ({ id, title, name, poster_path }) => {
            const movieTitle = title || name;
            return { id, movieTitle, poster_path };
          }
        );
        setTrendingMovies(moviesArray);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <MainTitle>Trending today</MainTitle>
      {trendingMovies && (
        <MovieList>
          {trendingMovies.map(({ id, movieTitle, poster_path }) => (
            <MovieItem key={id}>
              <MovieLink to={`movies/${id}`} state={{ from: location }}>
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
export default Home;
