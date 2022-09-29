import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import {
  SectionFriends,
  FriendList,
} from 'components/FriendsList/FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <SectionFriends className="friends-section">
      <FriendList className="friends-list">
        {friends.map((friend, _id) => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </FriendList>
    </SectionFriends>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
