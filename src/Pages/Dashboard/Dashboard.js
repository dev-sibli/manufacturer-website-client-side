import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-2xl text-center font-bold text-green-500'>Jantrik Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Profile</Link></li>
                        <li><Link to="/dashboard/myOrder">My orders</Link></li>
                        <li><Link to="/dashboard/addReview">Add a Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;