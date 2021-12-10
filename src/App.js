import React from 'react';
import { useState } from 'react';

import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you wish to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const submitText = (text) => {
    setFeedback((prev) => {
      text.id = prev.length + 1;
      return [text, ...prev];
    });
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleSubmit={submitText} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList data={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
