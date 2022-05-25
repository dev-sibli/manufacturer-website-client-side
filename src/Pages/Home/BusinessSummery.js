import React from 'react';

const BusinessSummery = () => {

    return (
        <div className='flex justify-center my-10'>
            <div className="w-full text-center stats stats-vertical lg:stats-horizontal bg-base-200 text-base-content shadow">

                <div className="stat">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">All Users</div>
                    <div className="stat-value"></div>

                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummery;