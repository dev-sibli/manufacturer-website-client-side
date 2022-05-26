import React from 'react';
import { Link } from 'react-router-dom';

const Orders = ({ order, index }) => {
    const { _id, price, toolName, quantity } = order;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{toolName}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <label htmlFor="delete-confirm-modal" className="btn btn-xs btn-success" >Pay Now</label>
                </td>
                <td>{(price) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                    {/* {(price && paid) && <div>
                        <p><span className='text-success'>Paid</span></p>
                        <p>Transaction id: <span className='text-success'>Done</span></p>
                    </div>} */}
                </td>
                {/* <td>
                    <label htmlFor="delete-confirm-modal" className="btn btn-xs btn-error" >Delete</label>
                </td> */}
            </tr>
        </>
    );
};

export default Orders;