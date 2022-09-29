import PropTypes from 'prop-types';
import {
  Item,
  Label,
  Type,
} from 'components/StatisticsList/StatisticsList.styled';
export const StatisticsList = ({ statistic: { id, label, percentage } }) => {
  return (
    <Item className="item" value={label} id={id}>
      <Label className="label">{label}</Label>
      <Type className="percentage">{percentage}%</Type>
    </Item>
  );
};

StatisticsList.propTypes = {
  statistic: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
