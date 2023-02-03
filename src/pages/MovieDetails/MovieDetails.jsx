import {
  MainContainer,
  Container,
  MovieBox,
  DescriptionBox,
  MovieTitle,
  MovieSubtitle,
  MovieText,
  MovieList,
  MovieItem,
  ButtonMore,
} from './MovieDetails.styled';

import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const PERSONAL_KEY = 'd78968a65961b0fbd63bb81018ffc9d2';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  // console.log(movie);

  const location = useLocation();
  // console.log(location.state?.from);
  const backLinkHref = location.state?.from ?? '/';
  const backLink = { from: location.state?.from } ?? '/';
  // console.log(backLinkHref);
  let activCase = {};
  let activReviews = {};

  if (location.pathname === `/movies/${movieId}/cast`) {
    activCase = {
      border: '1px solid #E22B2B',
      color: '#E22B2B',
    };
  }
  if (location.pathname === `/movies/${movieId}/reviews`) {
    activReviews = {
      border: '1px solid #E22B2B',
      color: '#E22B2B',
    };
  }

  useEffect(() => {
    // console.log(movieId);
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${PERSONAL_KEY}&language=en-US`
    )
      .then(res => {
        return res.json();
      })
      .then(promis => {
        // console.log(promis);
        const movieInfo = () => {
          const {
            title,
            name,
            overview,
            genres,
            vote_average,
            poster_path,
            backdrop_path,
          } = promis;
          let movieTitle = '';
          if (title) {
            movieTitle = title;
          }
          if (name) {
            movieTitle = name;
          }
          return {
            poster_path,
            movieTitle,
            overview,
            genres,
            vote_average,
            backdrop_path,
          };
        };
        setMovie(movieInfo());
        // console.log(movieInfo());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);
  const {
    poster_path,
    movieTitle,
    overview,
    genres,
    vote_average,
    backdrop_path,
  } = movie;
  console.log(vote_average);
  const BGImg = {
    backgroundImage: `linear-gradient(to right,
                      rgba(47, 48, 58, 0.4),
                        rgba(47, 48, 58, 0.4)),url(${BASE_IMG_URL}${backdrop_path})`,
  };
  return (
    <>
      {movie.movieTitle && (
        <MainContainer style={BGImg}>
          <div>
            <ButtonMore to={backLinkHref}>Go back</ButtonMore>
          </div>

          <Container>
            <MovieBox>
              <div>
                <img
                  alt={`${movieTitle}`}
                  src={`${BASE_IMG_URL}${poster_path}`}
                  width="250"
                />
              </div>
              <DescriptionBox>
                <MovieTitle>{movieTitle}</MovieTitle>
                <MovieSubtitle>User Score: {vote_average}</MovieSubtitle>
                <MovieSubtitle>Overview</MovieSubtitle>
                <MovieText>{overview}</MovieText>
                <MovieSubtitle>Genres</MovieSubtitle>
                <MovieList>
                  {genres &&
                    genres.map(({ id, name }) => (
                      <MovieItem key={id}>{name}</MovieItem>
                    ))}
                </MovieList>
                <ButtonMore to="cast" style={activCase} state={backLink}>
                  Cast
                </ButtonMore>
                <ButtonMore to="reviews" style={activReviews} state={backLink}>
                  Reviews
                </ButtonMore>
              </DescriptionBox>
            </MovieBox>
            <Suspense>
              <Outlet />
            </Suspense>
          </Container>
        </MainContainer>
      )}
      {loading && <Loader />}
    </>
  );
};

export default MovieDetails;
