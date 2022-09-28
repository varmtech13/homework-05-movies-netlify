import styled from 'styled-components';

export const Panel = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 360px;
  max-width: 100%;
  margin: 0 auto;
`;
export const Description = styled.div`
  padding: 40px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;
export const Image = styled.img`
  width: 100px;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 900;
  color: #010101;
`;
export const Tag = styled.p`
  color: #726e6e;
  font-weight: 600;
`;
export const Location = styled.p`
  color: #726e6e;
  font-weight: 600;
`;
export const StatistikList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: inline-flex;
  background-color: #f3f6f9;
  margin: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const Item = styled.li`
  border: 1px solid #e4e9f0;
  padding: 20px;
  text-align: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const Label = styled.span`
  display: inline-block;
  color: #726e6e;
  line-height: 24px;
`;
export const Note = styled.span`
    font-weight: 700;
`;