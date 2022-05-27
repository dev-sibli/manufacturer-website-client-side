import React from 'react';
import { Link } from 'react-router-dom';

const Orders = ({ order, index }) => {
    const { _id, price, toolName, quantity, paid, transactionId } = order;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{toolName}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    {!paid && <label htmlFor="delete-confirm-modal" className="btn btn-xs btn-success" >Cancel</label>}
                </td>
                <td>{(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                    {(price && paid) && <div>
                        <p><span className='text-success'>{paid}</span></p>
                        <p><span className='text-success'>{transactionId}</span></p>
                    </div>}
                </td>
            </tr>
        </>
    );
};

export default Orders;