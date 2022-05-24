import React from 'react';

const ReviewCard = ({ review }) => {
    const { rating, about } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-xl font-bold text-center text-secondary">{rating} Star</h2>
                <p className='text-center'>{about}</p>

            </div>
        </div>
    );
};

export default ReviewCard;