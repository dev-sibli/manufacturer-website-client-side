import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const emailRef = useRef()
    const nameRef = useRef()
    const quantityRef = useRef()
    const priceRef = useRef()
    const addressRef = useRef()
    const phoneRef = useRef()
    const toolRef = useRef()

    const { productId } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/tool/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId, product])

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault()

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const tool = toolRef.current.value;
        const quantity = quantityRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const price = priceRef.current.value;
        const order = {
            name: name,
            email: email,
            toolName: tool,
            quantity: quantity,
            price: price * quantity,
            address: address,
            phone: phone
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your order has been placed. Please pay')
                navigate('/dashboard/myOrder');
            });
    }

    return (
        <div className='flex h-fit justify-center items-center my-16 gap-5'>
            <div className="card w-7/12 bg-base-100 shadow-xl">
                <div className="card-body">
                    <img className='w-6/12 ' src={product.image} alt="" />
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <p><strong>Price: ${product.price}</strong></p>
                    <p>Stock: {product.stockQuantity} Unit</p>
                    <p>Minimum Quantity: {product.minimumQuantity} Unit</p>
                </div>
            </div>
            <div className=" card w-5/12 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Purchase</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                value={user?.displayName}
                                disabled
                                ref={nameRef}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value={user?.email}
                                disabled
                                ref={emailRef}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Tools Name</span>
                            </label>
                            <input
                                type="text"
                                value={product.name}
                                ref={toolRef}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="text"
                                value={product.price}
                                ref={priceRef}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder='Enter Quantity'
                                min={product.minimumQuantity}
                                max={product.stockQuantity}
                                ref={quantityRef}
                                required
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
                                ref={addressRef}
                                className="input input-bordered w-full max-w-xs"
                                name='address'
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Phone"
                                ref={phoneRef}
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