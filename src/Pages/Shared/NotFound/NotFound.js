import React from 'react';
import notfound from '../../../images/notfound/404-not-found.jpg'
const NotFound = () => {
    return (
        <div className='container'>
            <img className='mx-auto w-100 my-2' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;