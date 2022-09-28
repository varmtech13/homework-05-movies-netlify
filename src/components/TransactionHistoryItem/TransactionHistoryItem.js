import PropTypes from 'prop-types';
import {
  TransactionRow,
  TransactionCell,
} from 'components/TransactionHistory/TransactionHistory.styled';
export const TransactionHistoryItem = ({
  transaction: { id, type, amount, currency },
}) => {
  return (
    <TransactionRow id={id}>
      <TransactionCell>{type}</TransactionCell>
      <TransactionCell>{amount}</TransactionCell>
      <TransactionCell>{currency}</TransactionCell>
    </TransactionRow>
  );
};

TransactionHistoryItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
