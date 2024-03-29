
// import img here 
import service_img_1 from "@assets/img/services/services-1.jpg";
import service_img_2 from "@assets/img/services/services-2.jpg";
import service_img_3 from "@assets/img/services/services-3.jpg";
import service_img_4 from "@assets/img/services/services-4.jpg";
import Web_app from "../components/web-app"

const service_data = [
    {
        id: 1, 
        alphabet: "P",
        title: <>Web <br /> Development</>,
        img: service_img_1,
        description: <>Designing and building responsive websites for optimal user experiences and functionality </>,  
        link: "/web-app"  

    },
    {
        id: 2, 
        alphabet: "V",
        title: <> CRM<br/> Development</>,
        img: service_img_2,
        description: <>Building online stores for seamless transactions and enhanced user experiences </>,
        link: "/crm-dev"     

    },
    {
        id: 3, 
        alphabet: "C",
        title: <>Mobile <br /> Development</>,
        img: service_img_3,
        description: <>Crafting mobile apps for seamless experiences on various devices and platforms </>, 
        link: "/mobile-app" 

    },
    {
        id: 4, 
        alphabet: "M",
        title: <>Software <br /> Development</>,
        img: service_img_4,
        description: <>Creating efficient, scalable software solutions for diverse business needs and industries</>, 
        link: "custom-dev"      

    },
    {
        id: 5, 
        alphabet: "D",
        title: <>Digital <br /> Marketing</>,
        img: service_img_2,
        description: <>Online strategies to promote products, engage audiences, and drive business growth effectively</>, 
        link: "/digital-marketing"    

    },
    
]
export default service_data
