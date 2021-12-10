import { useState } from 'react';

import Card from './shared/Card';

function FeedbackForm({ handleSubmit }) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit({ text: text, rating: 5 });
    setText('');
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* {@todo - rating select component} */}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <button onClick={submitHandler} type='submit'>
            Send
          </button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
