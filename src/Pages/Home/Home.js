import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools />
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;