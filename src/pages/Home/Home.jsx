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

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const PERSONAL_KEY = 'd78968a65961b0fbd63bb81018ffc9d2';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${PERSONAL_KEY}`
    )
      .then(res => {
        return res.json();
      })
      .then(promis => {
        // console.log(promis);
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
        // console.log(moviesArray);
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
