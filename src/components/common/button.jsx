import styled from '@emotion/styled';

export const Button = styled.button`
  background-image: url(https://i.gifer.com/8daO.gif);  
  background-repeat: no-repeat;
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 300px;
  height: 100px;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  font-size: 35px;
  font-weight: 700;
`;