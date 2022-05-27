import React from 'react';

const AllOrders = ({ manageOrder, index, setDeletingOrder, refetch }) => {
    const { name, email, toolName, quantity, phone } = manageOrder;
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
                    <label onClick={() => setDeletingOrder(manageOrder)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                </td>
            </tr>
        </>
    );
};

export default AllOrders;