import React from 'react';
import Review from '../Dashboard/Review';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools />
            <Review></Review>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;