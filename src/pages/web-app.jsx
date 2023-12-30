import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import ServiceDetails from '../components/web-app';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';


const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Web Development"} />
            <ServiceDetails />
            <Analytics />;
            <SpeedInsights />
        </Wrapper>
    );
};

export default index;