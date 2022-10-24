import { useState, useEffect } from 'react';

import { fetchMovie } from '../../services/tmdb-api';
import MovieList from '../MovieList/MovieList';
import usePages from '../Hooks/usePages';
import { FcSearch } from 'react-icons/fc';
import { Form } from './SearchBar.styled';
import { DebounceInput } from 'react-debounce-input';

import useLoader from '../Hooks/useLoader';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  const { page, totalPage, handleChangePage, setTotalPage } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    if (!value) return;

    setIsLoading(isLoading => !isLoading);

    fetchMovie(value, page)
      .then(([result, total_pages]) => {
        setMovies(result);
        setTotalPage(total_pages);
      })
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [setTotalPage, page, value, setIsLoading]);

  return (
    <>
      <Form>
        <FcSearch size="25" />
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          placeholder={'input your query'}
          className="style-input"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </Form>
      {movies && (
        <MovieList
          movies={movies}
          total={totalPage}
          onChangePage={handleChangePage}
          loading={isLoading}
          currentPage={page}
        />
      )}
    </>
  );
}
