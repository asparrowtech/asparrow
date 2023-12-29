import React from "react";
import CustomDev from '../components/custom-dev';
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

const Custom = () =>{
    return(
        <Wrapper>
            <SEO pageTitle={"Custom Software Development"}></SEO>
            <CustomDev/>
            
        </Wrapper>
    )
}
export default Custom;