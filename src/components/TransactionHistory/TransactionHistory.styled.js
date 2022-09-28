import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 860px;
  margin: auto;
  box-shadow: 3px 2px 5px 1px rgb(0 0 0 / 51%);
  border: none;
  background-color: #ffffff;
`;
export const TransactionHeader = styled.thead`
  height: 60px;
  border-color: #ffffff;
`;
export const TransactionRow = styled.tr`
  &:nth-child(even) {
    background-color: #ecf1f4;
  }
`;
export const TransactionHead = styled.th`
  background-color: #00bcd5;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  border-right: 1px solid;
  &:last-child {
    border-right: 0;
  }
`;
export const TransactionBody = styled.tbody`
  text-align: center;
`;
export const TransactionCell = styled.td`
  padding: 20px 0;
  border: none;
  color: #868b8b;
  &:first-child {
    text-transform: capitalize;
  }
`;
