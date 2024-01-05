import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import service_details_thumb from  "@assets/img/services/service-details/mobile.webp";
// import service_video_thumb from  "@assets/img/services/service-details/img-2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';

const service_details_content = {
    title: <>Mobile Development</>,
    description: <>Welcome to <b>Asparrow Tech</b>. Where mobile app development meets innovation and user-centric design 
    Our team of dedicated developers and designers is passionate about creating mobile applications that not only meet but
    exceed user expectations. With a focus on cutting-edge technology, stunning UI/UX, and a commitment to delivering exceptional 
    results, we bring your app ideas to life.</>,
    title_2: <>Why Marketing Important ?</>,
    description_2: <>We understand that the business needs to move in all areas to prosper. In accordance, we do the following tasks to see that your
     app fulfills all that you expect out of it. </>,
    feture_list: [
        <>Developing the web and portal apps for mobiles and laptops</>,
        <>Developing a middleware app to synchronize end-to-end integration</>,
        <>Developing composite applications that make your present applications geared for the future</>,
        <>Design, support, and maintenance of the web applications</>,
    ],
    description_3: <>We will first discuss with you the actual reason why you are looking for an app. 
    Then we will share with you the different formats that we usually suggest for any new business to choose from. 
    We offer the development and maintenance of the mobile app, so your business reaches everyone’s smartphone.</>,


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
                           <div className="col-lg-6">
                              <div className="tp-service-details-list">
                                 {/* <h3 className="tp-service-details-title">{title_2}</h3> */}
                                 <p>{description_2}</p>
                                 <ul>
                                    {feture_list.map((item, i) => 
                                    <li key={i}><span> <RightSymbol /></span>{item}</li> 
                                    )} 
                                 </ul>
                              </div>
                           </div>
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