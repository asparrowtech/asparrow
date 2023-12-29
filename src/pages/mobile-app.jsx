import React from 'react'
import SEO from '../common/seo'
import MobileApp from '../components/mobile-app'
import Wrapper from '../layout/wrapper'

const Mobile = () =>{
    return(
        <Wrapper>
           <SEO pageTitle={"Mobile Development"}></SEO>
           <MobileApp/>
        </Wrapper>
    )
}
export default Mobile;