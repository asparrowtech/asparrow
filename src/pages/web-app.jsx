import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import ServiceDetails from '../components/web-app';


const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Web Development"} />
            <ServiceDetails />
        </Wrapper>
    );
};

export default index;