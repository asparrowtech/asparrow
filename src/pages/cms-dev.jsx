import React from "react";
import CMSDev from '../components/cms-dev';
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

const CMS = () =>{
    return(
        <Wrapper>
            <SEO pageTitle={"CMS Development"}></SEO>
            <CMSDev/>
            
        </Wrapper>
    )
}
export default CMS;