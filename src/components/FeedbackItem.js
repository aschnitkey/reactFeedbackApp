import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';

import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ id, rating, text }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button onClick={() => deleteFeedback(id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button
        onClick={() => editFeedback({ id, rating, text })}
        className='edit'
      >
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
}

export default FeedbackItem;
