import styled from 'styled-components';

export const COUNT = 5;
export const GAP_MAX = '16px';
export const GAP_MIN = '10px';

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: ${GAP_MAX};
`;

export const Item = styled.li`
  width: calc((100% / ${COUNT}) - ${GAP_MAX});
  box-shadow: 3px 2px 10px 2px #b5b5b5;
  text-overflow: hidden;
  min-height: 375px;
`;

export const Information = styled.div`
  padding: 16px;
  font-size: 12px;
  font-style: italic;
`;
