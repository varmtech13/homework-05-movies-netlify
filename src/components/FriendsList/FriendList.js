import { Friends } from 'components/Friends/FriendListItem';
import PropTypes from 'prop-types';
import { SectionFriends, FriendList } from 'components/Friends/FriendListItem.styled';

export const FriendsList = ({ friends }) => {
  return (
    <SectionFriends className="friends-section">
      <FriendList className="friends-list">
        {friends.map((friend, _id) => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </FriendList>
    </SectionFriends>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
