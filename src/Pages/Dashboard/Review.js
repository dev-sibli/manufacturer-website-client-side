import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://fierce-wildwood-20183.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-10'>
            <h4 className='text-2xl font-bold text-center my-12'>Our review</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.slice(-6).map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>

        </div>
    );
};

export default Review;