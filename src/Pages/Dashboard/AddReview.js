import React from 'react';

const AddReview = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Add a review</h1>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Rating</span>
                </label>
                <input type="number" placeholder="Provide 1-5 Rating" class="input input-bordered w-full max-w-xs" />
                <label class="label">
                    <span class="label-text">Review</span>
                </label>
                <input type="text" placeholder="Enter Your Review" class="input input-bordered w-full max-w-xs" />
                <input className='mt-4 btn w-full max-w-xs text-white ' type="submit" value="Add Review" />
            </div>
        </div>
    );
};

export default AddReview;