import { ReviewsList, ReviewsItem, ReviewsText } from './Reviews.styled';

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { array } from 'prop-types';

const PERSONAL_KEY = 'd78968a65961b0fbd63bb81018ffc9d2';

const Reviews = () => {
  const [reviewsArray, setReviewsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${PERSONAL_KEY}&language=en-US&page=1`
    )
      .then(res => {
        return res.json();
      })
      .then(promis => {
        // console.log(promis.results);
        const array = promis.results.map(({ id, author, content }) => {
          return { id, author, content };
        });
        setReviewsArray(array);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  console.log(reviewsArray);

  return (
    <>
      {reviewsArray && reviewsArray.length > 0 ? (
        <ReviewsList>
          {reviewsArray.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsText>Author: {author}</ReviewsText>
              <ReviewsText>{content}</ReviewsText>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <ReviewsText>'We do not have any reviews for this movie'</ReviewsText>
      )}
      {loading && <Loader />}
    </>
  );
};

export default Reviews;
