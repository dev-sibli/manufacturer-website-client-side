import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import AddReview from './AddReview';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [add, setAdd] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-10'>
            <h4 className='text-2xl font-bold text-center my-12'>Our review</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        setAdd={setAdd}
                    ></ReviewCard>)
                }
            </div>
            {add && <AddReview
                add={add}
                setAdd={setAdd}
            ></AddReview>

            }
        </div>
    );
};

export default Review;