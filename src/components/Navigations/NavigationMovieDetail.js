import { StyledNavLink, Nav } from './Navigations.styled';
import { useLocation } from 'react-router-dom';

export const NavigationMovieDetail = ({ id }) => {
  const location = useLocation();
  return (
    <Nav>
      <StyledNavLink
        to={`/movies/${id}/cast`}
        state={{ from: location?.state?.from }}
        end
      >
        Cast
      </StyledNavLink>
      <StyledNavLink
        to={`/movies/${id}/reviews`}
        state={{ from: location?.state?.from }}
        end
      >
        Reviews
      </StyledNavLink>
    </Nav>
  );
};
