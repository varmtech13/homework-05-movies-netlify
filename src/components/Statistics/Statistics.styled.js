import styled from 'styled-components';

export const StatisticSection = styled.section`
  width: 360px;
  max-width: 100%;
  background-color: #ffffff;
  margin: auto;
`;
export const Title = styled.h2`
  color: #4e5356;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
  padding-top: 40px;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  width: 100%;
  max-width: 100%;
`;
export const Item = styled.li`
  padding: 20px;
  text-align: center;
  color: #ffffff;
  background-color: ${props => {
    switch (props.value) {
      case '.docx':
        return '#4cc6f5';
      case '.mp3':
        return '#a43cf3';
      case '.pdf':
        return '#e64c66';
      case '.psd':
        return '#1fb9c5';
      default:
        return '#ffffff';
    }
  }};
`;
export const Label = styled.span`
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
`;
export const Type = styled.span`
  font-size: 18px;
  line-height: 24px;
`;
