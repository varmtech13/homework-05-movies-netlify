import styled from 'styled-components';

export const Form = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  position: relative;
  & > .style-input {
    color: #363636;
    margin: 0 auto;
    width: 100%;
    background-color: transparent;
    border: 1px solid #8d8d8d;
    border-radius: 8px;
    padding-left: 48px;
    height: 48px;
    font-size: 16px;
    line-height: 24px;
  }
  & > svg {
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;
