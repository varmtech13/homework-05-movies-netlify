import PropTypes from 'prop-types';
import {
  Panel,
  Description,
  Image,
  Name,
  Tag,
  Location,
  StatistikList,
  Item,
  Label,
  Note,
} from './Profile.styled';
export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <Panel className="profile">
      <Description className="description">
        <Image src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <StatistikList className="stats">
        <Item>
          <Label className="label">Followers</Label>
          <Note className="quantity">{stats.followers}</Note>
        </Item>
        <Item>
          <Label className="label">Views</Label>
          <Note className="quantity">{stats.views}</Note>
        </Item>
        <Item>
          <Label className="label">Likes</Label>
          <Note className="quantity">{stats.likes}</Note>
        </Item>
      </StatistikList>
    </Panel>
  );
};
Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
  }),
};
