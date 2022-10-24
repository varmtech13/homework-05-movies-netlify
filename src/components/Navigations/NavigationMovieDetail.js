import { StyledNavLink, Nav } from './Navigations.styled';

export const NavigationMovieDetail = () => {
  return (
    <Nav>
      <StyledNavLink to={`cast`} end>
        Cast
      </StyledNavLink>
      <StyledNavLink to={`reviews`} end>
        Reviews
      </StyledNavLink>
    </Nav>
  );
};
