import React from "react";
import DigitalMarketing from '../components/digital-marketing';
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

const Digital = () =>{
    return(
        <Wrapper>
            <SEO pageTitle={"Digital Marketing"}></SEO>
            <DigitalMarketing/>
            
        </Wrapper>
    )
}
export default Digital;