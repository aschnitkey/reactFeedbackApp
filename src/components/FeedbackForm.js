import { useState } from 'react';

import Card from './shared/Card';
import Button from './shared/Button';

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
          <Button onClick={submitHandler} type='submit'>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
