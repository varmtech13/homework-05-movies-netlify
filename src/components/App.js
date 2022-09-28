import users from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import { Profile } from 'components/Profile/Profile';
import React from 'react';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { FriendsList } from './FriendsList/FriendList';
import transactions from '../transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile profile={users} />
      <StatisticsList statistics={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
