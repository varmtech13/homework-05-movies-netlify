import { NavLink } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import {
  List,
  Item,
  ResponsiveImage,
  PaginationStyle,
} from './MovieList.styled.js';
import { makeImagePath } from '../../services/makeImagePath';
import { TailSpin } from 'react-loader-spinner';

export default function MovieList({
  movies,
  total,
  onChangePage,
  loading,
  currentPage,
}) {
  return (
    <>
      {loading ? (
        <TailSpin color="#ff0000" size="23" type="Rings" />
      ) : (
        <List>
          {movies.map(movie => {
            const posterPath = makeImagePath(movie.poster_path, 'w185');
            return (
              <Item key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>
                  <ResponsiveImage
                    src={posterPath}
                    alt={movie.title}
                    width="245"
                  />
                </NavLink>
              </Item>
            );
          })}
        </List>
      )}

      {total > 1 && !loading && (
        <PaginationStyle>
          <Pagination
            count={total}
            variant="outlined"
            shape="rounded"
            color="secondary"
            onChange={(event, pages) => {
              onChangePage(pages);
            }}
            page={currentPage}
          />
        </PaginationStyle>
      )}
    </>
  );
}
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
};
