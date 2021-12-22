import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if ((!isLoading && !feedback) || feedback.length === 0) {
    return <p>No Feedback Yet!</p>;
  }

  ///////////////////////////////////
  // new version with animation
  ///////////////////////////////////

  return isLoading ? (
    <Spinner />
  ) : (
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
//       {feedback.map((item) => {
//         return (
//           <FeedbackItem
//             key={item.id}
//             id={item.id}
//             rating={item.rating}
//             text={item.text}
//           />
//         );
//       })}
//     </div>
//   );
// }

export default FeedbackList;
