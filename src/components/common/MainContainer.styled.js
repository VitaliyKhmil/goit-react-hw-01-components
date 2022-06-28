import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.space[6]}px;
  background-color: ${props => props.theme.colors.accentColorBlu};
`;