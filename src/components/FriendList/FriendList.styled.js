import styled from '@emotion/styled';

export const FriendListContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[3]}px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.secondaryColor};
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
`;

export const FriendListItem = styled.li`
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.space[4]}px;    
`;

export const OnLineStatus = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-bottom: ${props => props.theme.space[3]}px;
    background-color: ${props =>
      props.status ? props.theme.colors.Online : props.theme.colors.Offline};
`;
export const Avatar = styled.img`
  display: block;
  width: 50px;
  margin-bottom: ${props => props.theme.space[3]}px;
`;