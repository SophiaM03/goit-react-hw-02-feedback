import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ changeFeedback, options }) => {
  return (
    <div className="buttons">
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            onClick={changeFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  changeFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FeedbackOptions;
