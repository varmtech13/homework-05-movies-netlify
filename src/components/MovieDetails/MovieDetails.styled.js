import styled from 'styled-components';

export const Article = styled.article`
  padding: 30px 0;
  display: flex;
  justify-content: flex-start;
`;

export const TitleBlock = styled.div`
  display: inline-block;
`;

export const MovieTitle = styled.h2`
  max-width: 400px;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  margin-right: 24px;
`;

export const Description = styled.div`
  padding: 48px 0;
  display: inline-block;
  max-width: 400px;
  font-style: italic;
`;

export const Title = styled.h3`
  color: #be0000;
  margin-bottom: 12px;
`;

export const Vote = styled.span`
  color: #be0000;
`;

export const VoteText = styled.p`
  margin-bottom: 25px;
`;

export const GenresList = styled.ul`
  font-size: 14px;
  margin-bottom: 15px;
`;

export const Overview = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
`;

export const Link = styled.a`
  &:hover {
    color: #be0000;
  }
`;
