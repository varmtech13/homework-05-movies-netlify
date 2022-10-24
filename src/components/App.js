import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './Layouts/SharedLayout';

const Home = lazy(() => import('../Pages/HomeView'));
const SearchMoviesView = lazy(() =>
  import('../Pages/SearchMoviesView' /* webpackChunkName: "home-view" */)
);
const MovieDetailsView = lazy(() =>
  import(
    '../Pages/MovieDetailsView' /* webpackChunkName: "movie-details-view" */
  )
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<SearchMoviesView />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsView />} />
      </Route>
    </Routes>
  );
};
