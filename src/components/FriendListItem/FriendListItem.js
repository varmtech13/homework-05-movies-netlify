import PropTypes from 'prop-types';
import { Item, Name, Image, Status } from './FriendListItem.styled';
export const FriendListItem = ({ friend: { id, avatar, name, isOnline } }) => {
  return (
    <Item className="friend-item">
      <Status className="status" value={isOnline}></Status>
      <Image src={avatar} className="avatar" alt={name} />
      <Name className="name">{name}</Name>
    </Item>
  );
};
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
