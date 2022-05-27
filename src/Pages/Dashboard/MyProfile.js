import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ProfileCard from './ProfileCard';

const MyProfile = () => {
    const [profiles, setProfiles] = useState()
    const [user] = useAuthState(auth);
    const email = user?.email;
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/myProfile?email=${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setProfiles(data);
                });
        }

    }, [user, email])
    return (
        <div>
            <h1>My Profile</h1>
            {/* {
                profiles.map(profile =>
                    <ProfileCard
                        key={profile._id}
                        profile={profile}
                    ></ProfileCard>)
            } */}
        </div>
    );
};

export default MyProfile;