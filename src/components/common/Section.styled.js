import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[4]}px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.secondaryColor};
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
`;