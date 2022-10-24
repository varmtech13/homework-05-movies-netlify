import { FcLink } from 'react-icons/fc';
import {
  Article,
  TitleBlock,
  MovieTitle,
  Image,
  Description,
  Title,
  Vote,
  VoteText,
  GenresList,
  Overview,
  Link,
} from './MovieDetails.styled';
import { makeImagePath } from '../../services/makeImagePath';
import PropTypes from 'prop-types';

export default function MovieDetails({
  title,
  vote_average,
  homepage,
  genres,
  poster_path,
  backdrop_path,
  overview,
}) {
  const posterUrl = makeImagePath(poster_path);
  return (
    <Article>
      <TitleBlock>
        <MovieTitle>{title}</MovieTitle>

        <Image src={posterUrl} alt={title} width="300" />
      </TitleBlock>
      <Description>
        <Title>Genres: </Title>
        <GenresList>
          {genres &&
            genres.map((genre, idx) => <li key={idx}>{genre.name}</li>)}
        </GenresList>
        <Title>Description:</Title>
        <Overview>{overview}</Overview>

        <VoteText>
          tmbd: <Vote>{vote_average}</Vote>
        </VoteText>
        <Link href={homepage} target="_blank" rel="noreferrer">
          <FcLink size={35} />
        </Link>
      </Description>
    </Article>
  );
}
MovieDetails.propTypes = {
  title: PropTypes.string,
  vote_average: PropTypes.number,
  homepage: PropTypes.string,
  genres: PropTypes.array,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
  overview: PropTypes.string,
};
