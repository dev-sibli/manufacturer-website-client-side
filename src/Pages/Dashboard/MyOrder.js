import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Order from './Orders'

const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const email = user?.email;
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/order/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }
        else {
            return navigate('/');
        }
    }, [user])
    return (
        <div>
            <h1>My order</h1>
            {
                orders.map((order, index) => {
                    <Order key={order._id}
                        order={order}
                        index={index}
                    ></Order>
                })
            }
        </div>
    );
};

export default MyOrder;