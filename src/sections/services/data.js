import { FaShoppingCart } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { MdDeveloperBoard } from "react-icons/md";
import { MdImportantDevices } from "react-icons/md";
import { HiSearchCircle } from "react-icons/hi";

const data = [
  {
    id: 1,
    title: "Web Development",
    desc: "Responsive websites built for an optimal user experience that works best in desktop as well as Mobile devices without the need for panning, scrolling or resizes the pages.",
    icon: <MdDeveloperBoard />,
  },
  {
    id: 2,
    title: "UI/UX Development",
    desc: "My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.",
    icon: <MdImportantDevices />,
  },
  {
    id: 3,
    title: "SEO Marketing",
    desc: "Customised SEO (Search Engine Optimisation) to ensure your website is rising the ranks in Google and staying at the top.",
    icon: <HiSearchCircle />,
  },
  {
    id: 4,
    title: "Photoshop",
    desc: "My goal is to design a professional yet creative logo, Banners, advertisements, product designs that reflects your organization spirit and leaves a lasting, memorable effect.",
    icon: <SiAdobephotoshop />,
  },
  {
    id: 5,
    title: "Wordpress",
    desc: "Manage your website using the web's most popular content management system, creating Custom wordpress themes which are coded from scratch.",
    icon: <FaWordpress />,
  },
  {
    id: 6,
    title: "eCommerce Solution",
    desc: "An eCommerce solution is a feature-filled, customisable online storefront and shopping cart that will be directly integrated into your website.",
    icon: <FaShoppingCart />,
  },
];

export default data;
