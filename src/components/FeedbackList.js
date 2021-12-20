import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet!</p>;
  }

  ///////////////////////////////////
  // new version with animation
  ///////////////////////////////////

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => {
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

export default FeedbackList;
