import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/tmdb-api';
import { makeAvavtarPath } from '../../services/makeImagePath';
import fallBackSrc from '../../images/avatar.png';
import { FcRating } from 'react-icons/fc';
import PropTypes from 'prop-types';
import {
  Title,
  ShowMore,
  Item,
  ReviewContent,
  ReviewList,
  ReviewTitle,
  Image,
  ReviewDate,
  Rating,
  Date,
} from './Reviews.styled';

function Review({ reviews }) {
  const [showMore, setShowMore] = useState(false);
  const changeReviewLength = content => content.slice(0, 300) + ' ...';

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id, created_at, author_details }) => (
          <Item key={id}>
            <ReviewTitle>
              <Image
                src={makeAvavtarPath(author_details.avatar_path)}
                alt={author_details.name}
                width="48"
                height="48"
                onError={e => (e.currentTarget.src = fallBackSrc)}
              />
              <Title>{author}</Title>
            </ReviewTitle>
            <ReviewDate>
              {author_details.rating ? (
                <Rating>
                  <FcRating />
                  {author_details.rating}
                </Rating>
              ) : null}
              <Date>{created_at.slice(0, 10)}</Date>
            </ReviewDate>
            <ReviewContent>
              {!showMore ? changeReviewLength(content) : content}
            </ReviewContent>
            <ShowMore onClick={() => setShowMore(!showMore)} data-id={id}>
              {showMore ? 'less more' : 'show more'}
            </ShowMore>
          </Item>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
}

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ReviewList>
      <Review reviews={reviews} />
    </ReviewList>
  );
}
Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
