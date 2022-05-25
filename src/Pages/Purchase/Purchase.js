import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/tool/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='flex h-fit justify-center items-center my-16'>
            <div className=" card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder={user?.displayName}
                                disabled
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder={user?.email}
                                disabled
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Phone"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <input className='mt-4 btn w-full max-w-xs text-white' type="submit" value="Purchase" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Purchase;