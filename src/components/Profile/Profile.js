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
export const Profile = ({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
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
          <Note className="quantity">{followers}</Note>
        </Item>
        <Item>
          <Label className="label">Views</Label>
          <Note className="quantity">{views}</Note>
        </Item>
        <Item>
          <Label className="label">Likes</Label>
          <Note className="quantity">{likes}</Note>
        </Item>
      </StatistikList>
    </Panel>
  );
};
