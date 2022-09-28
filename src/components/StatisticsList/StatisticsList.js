import { Statistics } from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';
import {
  StatList,
  StatisticSection,
  Title,
} from 'components/Statistics/Statistics.styled';

export const StatisticsList = ({ statistics }) => {
  return (
    <StatisticSection className="statistics">
      <Title className="title">Upload stats</Title>

      <StatList className="stat-list">
        {statistics.map((statistic, key) => (
          <Statistics key={statistic.id} statistic={statistic} />
        ))}
      </StatList>
    </StatisticSection>
  );
};
StatisticsList.propTypes = {
  statistics: PropTypes.array.isRequired,
};
