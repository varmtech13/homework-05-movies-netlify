import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import PropTypes from 'prop-types';
import {
  StatList,
  StatisticSection,
  Title,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, statistics }) => {
  return (
    <StatisticSection className="statistics">
      {title && <Title className="title">{title}</Title>}
      <StatList className="stat-list">
        {statistics.map((statistic, key) => (
          <StatisticsList key={statistic.id} statistic={statistic} />
        ))}
      </StatList>
    </StatisticSection>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.array.isRequired,
};
