import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = (props) => {
    console.log(props);
    // const { rating, about } = review;
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);
        // const review = {
        //     rating: rating,
        //     about: about
        // }

        // fetch('http://localhost:5000/review', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(review)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.success) {
        //             toast(`Thank you for your Review`)
        //         }
        //         else {
        //             toast.error(`Something went wrong`)
        //         }
        //         setAdd(null)
        //     });
    }

    return (
        <div className='flex mt-6 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold">Add a Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Make 1-5 Rating"
                                className="input input-bordered w-full max-w-xs"
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Rating is Required'
                                    },
                                    max: {
                                        value: 5,
                                        message: 'Maximum rating is 5'
                                    },
                                    min: {
                                        value: 1,
                                        message: 'Minimum rating is 1'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.rating?.type === 'required' && <span className="label-text-alt text-red-600">{errors.rating.message}</span>}
                                {errors.rating?.type === 'min' && <span className="label-text-alt text-red-600">{errors.rating.message}</span>}
                                {errors.rating?.type === 'max' && <span className="label-text-alt text-red-600">{errors.rating.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Review"
                                className="input input-bordered w-full max-w-xs"
                                {...register("about", {
                                    required: {
                                        value: true,
                                        message: 'Review text is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.about?.type === 'required' && <span className="label-text-alt text-red-600">{errors.about.message}</span>}

                            </label>
                        </div>
                        <input className='btn w-full max-w-xs text-white ' type="submit" value="Add Review" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default AddReview;