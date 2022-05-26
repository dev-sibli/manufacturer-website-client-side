import React from 'react';

const AllOrders = ({ allOrder, index }) => {
    const { name, email, toolName, quantity, address, phone } = allOrder;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td><strong>{name}</strong></td>
                <td>{email}</td>
                <td>{toolName}</td>
                <td>{quantity}</td>
                <td>{phone}</td>
                <td>
                    <label for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                </td>
            </tr>
        </>
    );
};

export default AllOrders;