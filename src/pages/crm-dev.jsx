import React from "react";
import CRMDev from '../components/crm-dev';
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

const CRM = () =>{
    return(
        <Wrapper>
            <SEO pageTitle={"CRM Development"}></SEO>
            <CRMDev/>
            
        </Wrapper>
    )
}
export default CRM;