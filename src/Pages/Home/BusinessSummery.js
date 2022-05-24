import React from 'react';

const BusinessSummery = () => {

    return (
        <div className='flex justify-center my-10'>
            <div class="w-full text-center stats stats-vertical lg:stats-horizontal bg-base-200 text-base-content shadow">

                <div class="stat">
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title">All Users</div>
                    <div class="stat-value"></div>

                </div>

                <div class="stat">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummery;