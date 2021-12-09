import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  // Calculate average rating
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {feedback.length > 0 ? average : 0}</h4>
    </div>
  );
}

FeedbackStats.prototype = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
