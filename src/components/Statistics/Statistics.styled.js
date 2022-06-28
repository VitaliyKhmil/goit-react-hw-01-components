import styled from '@emotion/styled';

export const StatisticsTitle = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;
  font-weight: 600;
  font-size: 20px;
`;

export const StatisticsList = styled.ul`
    display: flex;
    border-radius: 20px;
    overflow: hidden;
`;

export const StatisticsListItem = styled.li`
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.space[4]}px;
  background-color: ${p => p.theme.colors.accentColorYellow};
`;