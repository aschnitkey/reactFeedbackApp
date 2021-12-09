import React from 'react';
import { useState } from 'react';

import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you wish to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <h1>My App</h1>
        <FeedbackList data={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
