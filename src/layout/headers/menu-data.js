import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  // {
  //   id: 1,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   home_icon: <HomeIcon />,
  //   title: "Home",
  //   link: "/",
  //   active: "",
  //   sub_menus: [ 
  //     { link: "/", title: "Home " },
  //     { link: "/home-2", title: "Home 2" },
  //     { link: "/home-3", title: "Home 3" }, 
  //   ],
  // },
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/home", 
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "",
  },   
  // {
  //   id: 3,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Services",
  //   link: "/service",
  //   active: "",
  //   sub_menus: [
  //     { link: "/service", title: "Service" },
  //     { link: "/service-details", title: "Services Details" }, 
  //   ],
  // },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "",
    active:"",
    sub_menus: [
      { link: "/web-app", title: "Web Application"},
      { link: "/mobile-app", title: "Mobile Application"},
      { link: "/crm-dev", title: "CRM Development"},
      { link: "/cms-dev", title: "CMS Development"},
      { link: "/custom-dev", title: "Custom Software Development"},
      { link: "/digital-marketing", title: "Digital Marketing"}
    ]

  },
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Pages",
  //   link: "/about",
  //   active: "",
  //   sub_menus: [
  //     { link: "/portfolio", title: "Portfolio" },
  //     { link: "/portfolio-details", title: "Portfolio Details" },
  //     { link: "/team", title: "Team" }, 
  //     { link: "/team-details", title: "Team Details" },
  //     { link: "/404", title: "404" }, 
  //   ],
  // },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Portfolio",
    link: "/portfolio"
  },

  // {
  //   id: 5,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Blog",
  //   link: "/blog",
  //   active: "",
  //   sub_menus: [
  //     { link: "/blog", title: "Blog" }, 
  //     { link: "/blog-details", title: "Blog Details" }, 
  //   ],
  // },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blog-details"
    
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
