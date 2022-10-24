import { useState, useEffect, Suspense } from 'react';
import { lazy } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { fetchMovieDetails } from '../services/tmdb-api';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { NavigationMovieDetail } from '../components/Navigations/NavigationMovieDetail';

const Cast = lazy(() =>
  import('../components/Cast/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsView() {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <MovieDetails {...movie} />

      <NavigationMovieDetail />

      <Suspense fallback={<TailSpin timeout={10000} color="#ff0000" />}>
        <Routes>
          <Route path={`cast`} element={<Cast movieId={movieId} />}></Route>

          <Route
            path={`reviews`}
            element={<Reviews movieId={movieId} />}
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}
