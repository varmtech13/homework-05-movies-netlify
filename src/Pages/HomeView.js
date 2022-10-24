import { useState, useEffect } from 'react';
import { fetchTrandingMovie } from '../services/tmdb-api';
import MovieList from '../components/MovieList/MovieList';
import usePages from '../components/Hooks/usePages';
import useLoader from '../components/Hooks/useLoader';
import { Title, Wrapper } from './HomeView.styled';

export default function HomeView() {
  const [trandingMovie, setTrandingMovie] = useState([]);

  const { page, totalPage, setTotalPage, handleChangePage } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    fetchTrandingMovie(page)
      .then(([result, total]) => {
        setTrandingMovie(result);
        setTotalPage(total);
      })
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [page, setIsLoading, setTotalPage]);

  return (
    <Wrapper>
      <Title>Tranding Movies</Title>

      {trandingMovie && (
        <MovieList
          movies={trandingMovie}
          total={totalPage}
          onChangePage={handleChangePage}
          loading={isLoading}
          currentPage={page}
        />
      )}
    </Wrapper>
  );
}
