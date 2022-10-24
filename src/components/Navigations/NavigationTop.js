import { FcHome } from 'react-icons/fc';
import { BiMoviePlay } from 'react-icons/bi';
import { StyledNavLink, Nav, Search } from './Navigations.styled';

export default function Navigations() {
  return (
    <Nav>
      <StyledNavLink to="/homework-05-movies" end>
        <FcHome size="25" /> <span>Home</span>
      </StyledNavLink>
      <StyledNavLink to="/movies" end>
        <BiMoviePlay size="25" />
        <Search>Movie</Search>
      </StyledNavLink>
    </Nav>
  );
}
