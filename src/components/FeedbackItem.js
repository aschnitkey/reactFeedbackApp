import React from 'react';

import Card from './shared/Card';

function FeedbackItem({id, rating, text}) {
    
    return (
        <Card>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </Card>
    )
}

export default FeedbackItem
