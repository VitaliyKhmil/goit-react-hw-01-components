import PropTypes from 'prop-types';
import { Section } from '../common/Section.styled';
import { StatisticsTitle, StatisticsList, StatisticsListItem } from './Statistics.styled';

export const Statistics = ({ data }) => {
    return <Section>
        <StatisticsTitle>Upload stats</StatisticsTitle>
        <StatisticsList>
            {data.map(({id, label, percentage}) => 
                <StatisticsListItem key={id}>
                    <p>{label}</p>
                    <p>{percentage}</p>
                </StatisticsListItem>
            )}
        </StatisticsList>
    </Section>
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}