import NavigationTop from '../Navigations/NavigationTop';
import { SiWarnerbros } from 'react-icons/si';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled.js';
import { Suspense } from 'react';
import { TailSpin } from 'react-loader-spinner';

export const SharedLayout = () => {
  return (
    <Container className="container">
      <Header>
        <div>
          <SiWarnerbros size="40" />
        </div>
        <NavigationTop />
      </Header>
      <Suspense
        fallback={<TailSpin type="Rings" timeout={10000} color="#ff0000" />}
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
