import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../../services/tmdb-api';
import { makeImagePath } from '../../services/makeImagePath';
import { Title, List, Item, Information } from './Cast.styled';
import PropTypes from 'prop-types';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setActors);
  }, [movieId]);

  return (
    <List>
      {actors.length > 0 ? (
        actors.map(
          ({
            profile_path,
            name,
            id,
            popularity,
            character,
            original_name,
          }) => {
            const imageUrl = makeImagePath(profile_path, 'w185');
            return (
              <Item key={id}>
                <img src={imageUrl} alt={name} width="260" />
                <Information>
                  <Title>{name}</Title>
                  <p>Popularity: {popularity}</p>
                  <p>Character: {character}</p>
                  <p>Original name: {original_name}</p>
                </Information>
              </Item>
            );
          }
        )
      ) : (
        <p>no info</p>
      )}
    </List>
  );
}
Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
