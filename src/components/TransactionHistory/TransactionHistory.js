import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionHeader,
  TransactionRow,
  TransactionBody,
  TransactionHead,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable className="transaction-history">
      <TransactionHeader>
        <TransactionRow>
          <TransactionHead>Type</TransactionHead>
          <TransactionHead>Amount</TransactionHead>
          <TransactionHead>Currency</TransactionHead>
        </TransactionRow>
      </TransactionHeader>

      <TransactionBody>
        {transactions.map((transaction, key) => (
          <TransactionHistoryItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </TransactionBody>
    </TransactionTable>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
