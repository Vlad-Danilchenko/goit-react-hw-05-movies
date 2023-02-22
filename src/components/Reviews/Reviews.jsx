import { ReviewsList, ReviewsItem, ReviewsText } from './Reviews.styled';

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getReviews } from 'services';

const Reviews = () => {
  const [reviewsArray, setReviewsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    getReviews(movieId)
      .then(promis => {
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
