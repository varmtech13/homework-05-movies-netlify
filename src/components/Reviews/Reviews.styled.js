import styled from 'styled-components';

export const COUNT = 4;
export const GAP_MAX = '24px';
export const GAP_MIN = '10px';

export const ReviewContent = styled.p`
  font-size: 14px;
  max-width: 1024px;
  font-style: italic;
  overflow: hidden;
  margin-bottom: 32px;
  max-height: 130px;
`;

export const Item = styled.li`
  width: calc((100% / ${COUNT}) - ${GAP_MAX});
  box-shadow: 3px 2px 10px 2px #b5b5b5;
  padding: 20px;
  text-overflow: hidden;
  min-height: 375px;
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  font-style: italic;
  text-transform: capitalize;
`;

export const ShowMore = styled.button`
  text-transform: uppercase;
  color: #be0000;
  background-color: transparent;
  border-color: transparent;
  font-weight: 700;
  font-size: 16px;
`;

export const ReviewList = styled.ul`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: ${GAP_MAX};
`;

export const ReviewTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${GAP_MIN};
  border-bottom: 3px solid #be0000;
  padding: 20px 0;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  border-radius: 50%;
  max-width: 48px;
  max-height: 48px;
`;

export const ReviewDate = styled.div`
  display: flex;
  gap: ${GAP_MIN};
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 16px;
  font-weight: 700;
`;

export const Rating = styled.p`
  gap: calc(${GAP_MIN} / 2);
  display: flex;
  color: #be0000;
  font-size: 16px;
  align-items: center;
`;
export const Date = styled.p``;
