import React from 'react';

const Orders = ({ order, index }) => {
    const { name, email, toolName, quantity, address, phone } = order;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                {/* <td><strong>{name}</strong></td> */}
                {/* <td>{email}</td> */}
                <td>{toolName}</td>
                <td>{quantity}</td>
                {/* <td>{address}</td> */}
                <td>{phone}</td>
                <td>
                    <label for="delete-confirm-modal" class="btn btn-xs btn-error" >Delete</label>
                </td>
            </tr>
        </>
    );
};

export default Orders;