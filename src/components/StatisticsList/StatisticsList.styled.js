import styled from 'styled-components';

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
