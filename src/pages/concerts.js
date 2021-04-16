import React from 'react';

import Layout from '../components/Layout';
import HomeHero from '../components/Hero/HomeHero';
import FeaturedConcerts from '../components/Concerts/FeaturedConcerts';

const Concerts = () => {
    return (
        <Layout>
            <HomeHero />
            <FeaturedConcerts />
        </Layout>
    );
}

export default Concerts;
