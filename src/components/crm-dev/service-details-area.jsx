import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from  "@assets/img/services/service-details/crm.webp";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';

const service_details_content = {
    service_details_tab: [
        {id: 1, title: "Consumer Product", active: ""},
        {id: 2, title: "Marketing Analysis", active: ""},
        {id: 3, title: "Speed Optimization", active: ""},
        {id: 4, title: "Email Marketing", active: ""},
        {id: 5, title: "Marketing Analysis", active: ""},
        {id: 6, title: "Media Marketing", active: ""},
    ],
    title: <>CRM Development</>,
    description: <>Welcome to <b>Asparrow Tech</b>. CRM Development tailors software solutions to streamline customer interactions, providing businesses with a 
    centralized platform for efficient management of sales, marketing, and customer service. With features like contact management, 
    lead tracking, and analytics, it enhances productivity, fosters customer loyalty, and delivers valuable insights for strategic decision-making. 
    This technology is crucial for businesses seeking to optimize relationships and create personalized experiences throughout the customer lifecycle.</>,
    description_2: <><h4>See three common CRM data categories below:</h4></>,
    feture_list: [
        <><b>Operational CRM</b><br/>Operational CRM data refers to information that allows teams to better perform key tasks, such as sales, marketing, and customer service.

        <br/>For example, customer support tickets or where a customer is in your deal pipeline would fall into this category.</>,
        <><b>Analytical CRM</b><br/>Analytical CRM data is — not surprisingly — used for analysis. By understanding the relationship between specific data points or data types, business leaders are better equipped to make both short- and long-term strategic decisions.</>,
        <><b>Collaborative CRM</b><br/>Collaborative CRM data is shared among team members and across departments to create a unified source of customer truth. This allows staff to complete key tasks more quickly and helps ensure that when customers contact your company, they don’t need to fill in the blanks about previous purchases or problems.

        </>,
    ],
    description_3: <><br/>As every business is different from another, one CRM for all businesses does not suit at all. For this reason, we are also offering custom CRM development solutions as well.

    We are having a very solid track record in building very complex and highly scalable business applications and SaaS based apps.</>,


}
const {service_details_tab, title, description, title_2, description_2, feture_list, description_3} = service_details_content

const ServiceDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isActive, setIsActive] = useState(1)

    return (
        <>
            <section className="tp-service-details-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  {/* <div className="col-lg-4">
                    
                  </div> */}
                  <div className="col-lg-8">
                     <div className="tp-service-details-wrapper">
                        <div className="tp-service-details-thumb">
                           <Image src={service_details_thumb} alt="theme-pure" />
                        </div>
                        <h3 className="tp-service-details-title">{title}</h3>
                        <p>{description}</p>
                        <div className="row">
               
                           {/* <div className="col-lg-6"> */}
                              <div className="tp-service-details-list">
                                 {/* <h3 className="tp-service-details-title">{title_2} </h3> */}
                                 <p>{description_2}</p>
                                 <ul>
                                    {feture_list.map((item, i) => 
                                    <li key={i}><span> <RightSymbol /></span>{item}</li> 
                                    )} 
                                 </ul>
                              </div>
                           {/* </div> */}
                        </div>
                        <p>{description_3}</p>

                        <div className="tp-service-details-faq faq-style-1">
                           <div className="tp-faq-tab-content tp-accordion">
                              <div className="accordion" id="general_accordion">
                                {accordion.map((item, i) => 
                                <div key={i} onClick={() => setIsActive(item.id)} className={`accordion-item ${isActive === item.id && "tp-faq-active"}`}>
                                    <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                    <button 
                                        className={`accordion-button ${item.collapsed}`} 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target={`#collapse${item.accordion_id}`} 
                                        aria-expanded={item.aria_expanded}
                                        aria-controls={`collapse${item.accordion_id}`}>
                                        {item.question}
                                    </button>
                                    </h2>
                                    <div id={`collapse${item.accordion_id}`} 
                                        className={`accordion-collapse collapse ${item?.active && "show"}`} 
                                        aria-labelledby={`heading${item.accordion_id}`} 
                                        data-bs-parent="#general_accordion">
                                        <div className="accordion-body">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </div> 
                                )} 
                               </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </section>

            {/* video modal start */}
            <VideoPopup 
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"csnD5EVL5z8"}
            />
            {/* video modal end */}
        </>
    );
};

export default ServiceDetailsArea;