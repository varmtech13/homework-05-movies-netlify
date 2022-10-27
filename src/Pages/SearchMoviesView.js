import SearchBar from '../components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovie } from '../services/tmdb-api';
import MovieList from '../components/MovieList/MovieList';
import usePages from '../Hooks/usePages';

import useLoader from '../Hooks/useLoader';

export default function SearchMoviesView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  const [movies, setMovies] = useState([]);

  const { page, totalPage, handleChangePage, setTotalPage } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    if (!movieName) return;

    setIsLoading(isLoading => !isLoading);

    fetchMovie(movieName, page)
      .then(([result, total_pages]) => {
        setMovies(result);
        setTotalPage(total_pages);
      })
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [setTotalPage, page, movieName, setIsLoading]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBar value={movieName} onChange={updateQueryString} />
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
