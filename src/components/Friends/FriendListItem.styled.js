import styled from 'styled-components';

export const SectionFriends = styled.section`
  width: 360px;
  max-width: 100%;
  margin: 0 auto;
`;
export const FriendList = styled.ul`
  padding-left: 0;
  list-style: none;
`;
export const Item = styled.li`
  -webkit-box-shadow: 5px 2px 17px 1px rgba(0, 0, 0, 0.51);
  box-shadow: 5px 2px 5px 1px rgba(0, 0, 0, 0.51);
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  align-items: center;
  padding: 8px 12px;
  background-color: #ffffff;
`;
export const Name = styled.span`
  font-size: 24px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  color: #242222;
`;
export const Image = styled.img`
  width: 80px;
  border-radius: 8px;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: ${props => {
    return props.value === true ? 'green' : 'red';
  }};
  border-radius: 50%;
`;
