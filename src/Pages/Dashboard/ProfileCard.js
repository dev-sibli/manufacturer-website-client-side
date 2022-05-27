import React from 'react';

const ProfileCard = ({ profile }) => {
    const { email, address } = profile;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-xl text-secondary">{email}</h2>
                <p className='text-center'>{address}</p>

            </div>
        </div>
    );
};

export default ProfileCard;