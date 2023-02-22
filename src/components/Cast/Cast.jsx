import { CastList, CastItem, CastImg, CastText } from './Cast.styled';

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getCast, BASE_IMG_URL } from 'services';

const Cast = () => {
  const [castArray, setCastArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    getCast(movieId)
      .then(promis => {
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
