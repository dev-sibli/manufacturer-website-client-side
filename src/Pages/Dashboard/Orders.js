import React from 'react';

const Orders = ({ order, index }) => {
    const { price, toolName, quantity } = order;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{toolName}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <label for="delete-confirm-modal" className="btn btn-xs btn-success" >Pay Now</label>
                </td>
                <td>
                    <label for="delete-confirm-modal" className="btn btn-xs btn-error" >Delete</label>
                </td>
            </tr>
        </>
    );
};

export default Orders;