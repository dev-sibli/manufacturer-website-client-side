import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../firebase.init';

const Tool = ({ tool }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)

    const { _id, name, image, price, description, minimumQuantity, stockQuantity } = tool;

    const navigate = useNavigate();

    const handleOrder = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <img src={image} alt={name} />
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>Price: ${price}</p>
                <p><small>{description}</small></p>
                <p><small>Minimum Quantity: {minimumQuantity} Unit</small></p>
                <p><small>Stock: {stockQuantity} Unit</small></p>
                <div className="card-actions">
                    {!admin && <button onClick={() => handleOrder(_id)} className='btn btn-primary w-full'>Order Now</button>}
                </div>
            </div>
        </div>
    );
};

export default Tool;