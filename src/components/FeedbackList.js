import React from 'react'
import PropTypes from 'prop-types'

import FeedbackItem from './FeedbackItem'

function FeedbackList({data}) {

    if (!data || data.length === 0) {
        return <p>No Feedback Yet!</p>
    }

    return (
        <div className='feedback-list'>
            {data.map(item => {
                    return <FeedbackItem key={item.id} rating={item.rating} text={item.text} />
            })}
        </div>
    )
}

FeedbackList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList
