import mic from "../Images/product-img/mic.png";
import drone from "../Images/product-img/drone.png";
import cam from "../Images/product-img/cam.png";
//
import service1 from "../Icons/service-icons/service-1.png";
import service2 from "../Icons/service-icons/service-2.png";
import service3 from "../Icons/service-icons/service-3.png";
//
import test1 from "../Icons/testimonial-icons/test-1.png";
import test2 from "../Icons/testimonial-icons/test-2.png";
import test3 from "../Icons/testimonial-icons/test-3.png";
//
import logo from "../Icons/logo-nav.png";

export const navLinkData = [
  {
    label: <img src={logo} alt="Logo" className="w-28 lg:w-36" />,
    path: "/",
  },

  {
    label: "Services",
    path: "/services",
  },

  {
    label: "Testimonials",
    path: "/testimonials",
  },

  {
    label: "About Us",
    path: "/about-us",
  },
];

//

export const featuresData = [
  {
    value: "230K",
    icon: "+",
    label: "Successful \n Deliveries",
  },
  {
    value: "3.4K",
    icon: "+",
    label: "Verified \n Vendors",
  },
  {
    value: "530K",
    icon: "+",
    label: "Satisfied \n Customers",
  },
];

//

export const prodCategoryData = [
  "All",
  "Electronics",
  "Wedding",
  "Furniture",
  "Clothing",
  "Gadgets",
];

//

export const prodData = [
  {
    img: { cam },
    desc: "Canon EOS 7000",
    price: "45",
    rating: "5",
  },
  {
    img: { mic },
    desc: "Spirit dual microphones",
    price: "70",
    rating: "4",
  },
  {
    img: { drone },
    desc: "DJI Surveillance Drone",
    price: "45",
    rating: "5",
  },
  {
    img: { cam },
    desc: "Canon EOS 7000",
    price: "45",
    rating: "5",
  },
  {
    img: { drone },
    desc: "DJI Surveillance Drone",
    price: "85",
    rating: "4",
  },
  {
    img: { mic },
    desc: "Spirit dual microphones",
    price: "72",
    rating: "6",
  },
];

//

export const serviceData = [
  {
    icon: { service1 },
    label: "Location Based Searches",
    desc: "with a well integrated advanced location technology, rental is streamlined for a faster process. \n with a well integrated advanced location technology, rental is streamlined for a faster process.",
  },
  {
    icon: { service2 },
    label: "Advanced filters for date and price ranges",
    desc: "To accelerate the rental process, we introduced an advanced search filter for categories, date and price ranges. \n To accelerate the rental process, we introduced an advanced search filter for categories, date and price ranges.",
  },
  {
    icon: { service3 },
    label: "Tranparent pricing and seamless transactions",
    desc: "We provide users with transparent pricing by displaying a breakdown of pricing including additional fees during the booking process. The well secured payment gateway ensures a seamless transaction.",
  },
];

//

export const testimonialData = [
  {
    img: { test1 },
    name: "Jenifer Ihuoma",
    title: "Event Planner",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis ",
  },
  {
    img: { test2 },
    name: "Melissa Andrews",
    title: "Photographer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis ",
  },
  {
    img: { test3 },
    name: "Komolafe Coker",
    title: "Senior Chef",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis ",
  },
];

//
