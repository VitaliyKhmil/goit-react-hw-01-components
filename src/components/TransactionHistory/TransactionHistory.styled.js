import styled from '@emotion/styled';

export const TransactionHistoryContainer = styled.table`
  padding: ${props => props.theme.space[4]}px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.secondaryColor};
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
`;

export const TableData = styled.td`
  height: 20px;
  padding: ${props => props.theme.space[2]}px;
  text-align: center;
  background-color: ${props => props.theme.colors.secondaryColorShadeLight};
`;

export const TableHead = styled.th`
  width: 150px;
  height: 30px;
  padding: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.secondaryColor};
  background-color: ${props => props.theme.colors.accentColorBlu};
`;