import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({
  state,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) => {
  const { good, neutral, bad } = state;
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {countTotalFeedback}</li>
      <li>Percentage: {countPositiveFeedbackPercentage}%</li>
    </ul>
  );
};

Statistic.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistic;
