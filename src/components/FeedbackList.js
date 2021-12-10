import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import FeedbackItem from './FeedbackItem';

function FeedbackList({ data, handleDelete }) {
  if (!data || data.length === 0) {
    return <p>No Feedback Yet!</p>;
  }

  ///////////////////////////////////
  // new version with animation
  ///////////////////////////////////

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {data.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                id={item.id}
                rating={item.rating}
                text={item.text}
                handleDelete={handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

///////////////////////////////////
// original without animation
///////////////////////////////////

//   return (
//     <div className='feedback-list'>
//       {data.map((item) => {
//         return (
//           <FeedbackItem
//             key={item.id}
//             id={item.id}
//             rating={item.rating}
//             text={item.text}
//             handleDelete={handleDelete}
//           />
//         );
//       })}
//     </div>
//   );
// }

FeedbackList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
