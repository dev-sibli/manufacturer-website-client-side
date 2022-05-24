import React from 'react';
import Tool from '../Tools/Tool';
import Tools from '../Tools/Tools';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Banner></Banner>
            <Tools />
        </div>
    );
};

export default Home;