import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllOrders from './AllOrders';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
        .then(data => setAllOrders(data))
    )
        ;
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-10'>
            <h4 className='text-2xl font-bold text-center my-12'>All orders</h4>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Tool Name</th>
                            <th>Quantity</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((allOrders, index) => <AllOrders
                                key={allOrders._id}
                                allOrder={allOrders}
                                index={index}
                                refetch={refetch}></AllOrders>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ManageAllOrders;