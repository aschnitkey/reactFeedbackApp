import React from 'react'
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

export default FeedbackList
