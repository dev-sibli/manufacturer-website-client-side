import React from 'react';

const AddReview = () => {
    return (
        <div>
            <h1>Add a review</h1>
            <div class="rating">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
            </div>
        </div>
    );
};

export default AddReview;