import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllOrders from './AllOrders';

const ManageAllOrders = () => {

    const { data: ManageOrders, isLoading, refetch } = useQuery('ManageOrders', () => fetch('http://localhost:5000/order', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
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
                            <th></th>
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
                            ManageOrders.map((manageOrder, index) => <AllOrders
                                key={manageOrder._id}
                                manageOrder={manageOrder}
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