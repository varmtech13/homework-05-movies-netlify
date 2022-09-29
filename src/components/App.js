import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { Profile } from 'components/Profile/Profile';
import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={data} />
      <Statistics statistics={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
