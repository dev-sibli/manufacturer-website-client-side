import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Orders from './Orders'

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const email = user?.email;
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/myOrder?email=${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user, email, navigate])
    return (
        <div>
            <h1>My order</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Tool Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <Orders key={order._id}
                                    order={order}
                                    index={index}
                                ></Orders>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrder;