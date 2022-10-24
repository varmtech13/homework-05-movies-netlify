import styled from 'styled-components';

export const Container = styled.div`
  width: 1140px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    width: 1320px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
`;
