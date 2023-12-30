import React from 'react'
import SEO from '../common/seo'
import MobileApp from '../components/mobile-app'
import Wrapper from '../layout/wrapper'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const Mobile = () =>{
    return(
        <Wrapper>
           <SEO pageTitle={"Mobile Development"}></SEO>
           <MobileApp/>
           <Analytics />;
           <SpeedInsights />
        </Wrapper>
    )
}
export default Mobile;