import { CastList, CastItem, CastImg, CastText } from './Cast.styled';

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

const PERSONAL_KEY = 'd78968a65961b0fbd63bb81018ffc9d2';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [castArray, setCastArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${PERSONAL_KEY}&language=en-US    `
    )
      .then(res => {
        return res.json();
      })
      .then(promis => {
        // console.log(promis.cast);
        const array = promis.cast.map(
          ({ id, character, name, profile_path }) => {
            return { id, character, name, profile_path };
          }
        );
        setCastArray(array);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {castArray && castArray.length > 0 ? (
        <CastList>
          {castArray.map(({ id, character, name, profile_path }) => (
            <CastItem key={id}>
              <CastImg alt={`${name}`} src={`${BASE_IMG_URL}${profile_path}`} />

              <CastText>{name}</CastText>
              <CastText>Character: {character}</CastText>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <CastText>'We do not have any cast for this movie'</CastText>
      )}
      {loading && <Loader />}
    </>
  );
};
export default Cast;
