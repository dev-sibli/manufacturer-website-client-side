import React from 'react';

const ProfileCard = ({ profile }) => {
    const { email } = profile;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-xl font-bold text-center text-secondary">{email} Star</h2>
                {/* <p className='text-center'>{about}</p> */}

            </div>
        </div>
    );
};

export default ProfileCard;