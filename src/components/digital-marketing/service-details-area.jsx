import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from  "@assets/img/services/service-details/digital.webp";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';

const service_details_content = {
   //  service_details_tab: [
   //      {id: 1, title: "Consumer Product", active: ""},
   //      {id: 2, title: "Marketing Analysis", active: ""},
   //      {id: 3, title: "Speed Optimization", active: ""},
   //      {id: 4, title: "Email Marketing", active: ""},
   //      {id: 5, title: "Marketing Analysis", active: ""},
   //      {id: 6, title: "Media Marketing", active: ""},
   //  ],
    title: <>Digital Marketing</>,
    description: <>Welcome to <b>Asparrow Tech</b>, where digital marketing meets innovation and strategy. 
    Our team of skilled marketers is passionate about crafting digital campaigns that drive results and exceed your business goals.
     With a focus on data-driven insights, creativity, and a commitment to delivering exceptional ROI, we help you thrive in the digital landscape.</>,
    title_2: <>Why Marketing Important ?</>,
    description_2: <>Digital marketing is essential for businesses seeking to connect with a broader audience, 
    drive brand growth, and adapt to the ever-changing landscape of the digital world. Its effectiveness, cost-efficiency, 
    and ability to provide measurable results make it a cornerstone of modern marketing strategies. </>,
    feture_list: [
        <>Connect with a worldwide audience beyond geographical constraints.</>,
        <>Often more budget-friendly than traditional marketing methods.</>,
        <>Precisely reach specific demographics, interests, and behaviors.</>,
        <>Real-time analytics provide insights for immediate adjustments.</>,
        <>Foster audience participation and build brand relationships.</>,
        <>Increase recognition and awareness through online channels.</>,
        <>Quickly adjust campaigns based on performance and market changes.</>,
        <>Gain an edge over competitors embracing digital strategies.</>,
        <>Obtain valuable insights into market trends, customer behavior, and competitors.</>
    ],
    description_3: <>Need something changed or is there something not quite working the way you envisaged? Is your van a
    little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
    unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</>,


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
                                 <h3 className="tp-service-details-title">{title_2}</h3>
                                 <p>{description_2}</p>
                                 <ul>
                                    {feture_list.map((item, i) => 
                                    <li key={i}><span> <RightSymbol /></span>{item}</li> 
                                    )} 
                                 </ul>
                              </div>
                           {/* </div> */}
                        </div>
                        {/* <p>{description_3}</p> */}
                        <br/>

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