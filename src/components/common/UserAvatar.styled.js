import styled from '@emotion/styled';

export const UserAvatar = styled.img`
  display: block;
  height: 100px;
  margin-bottom: ${props => props.theme.space[4]}px;
  border-radius: 20px;
  box-shadow: 0 15px 70px rgba(255, 215, 31);
`;