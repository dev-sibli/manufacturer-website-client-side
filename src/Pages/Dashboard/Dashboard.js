import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-2xl text-center font-bold text-green-500'>Jantrik Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Profile</Link></li>

                        {!admin &&
                            <ul>
                                <li><Link to="/dashboard/myOrder">My orders</Link></li>
                                <li><Link to="/dashboard/addReview">Add a Review</Link></li>
                            </ul>}
                        {admin && <ul>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/allOrders">All Orders</Link></li>
                        </ul>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;