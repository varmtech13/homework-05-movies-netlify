import styled from 'styled-components';

export const TransactionRow = styled.tr`
  &:nth-child(even) {
    background-color: #ecf1f4;
  }
`;

export const TransactionCell = styled.td`
  padding: 20px 0;
  border: none;
  color: #868b8b;
  &:first-child {
    text-transform: capitalize;
  }
`;
