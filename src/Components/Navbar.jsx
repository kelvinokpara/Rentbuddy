import Button from "./Button.jsx";
import userIcon from "../assets/Icons/btn-icons/btn-user.png";
import arrowWhite from "../assets/Icons/btn-icons/btn-arrow-white.png";

//
import { navLinkData } from "../assets/Data/HomeData";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-primHue py-5 lg:px-11 sm:px-8 px-5">
      <ul className="flex items-center gap-6 lg:gap-12">
        {navLinkData.map((link) => (
          <li
            key={link}
            className="font-medium text-white text-sm lg:text-base"
          >
            {link.label}
          </li>
        ))}
      </ul>
      <div className="flex gap-8">
        <Button btnType="type2" icon_L={userIcon}>
          Log In
        </Button>
        <Button icon_R={arrowWhite}>Sign Up Free</Button>
      </div>
    </nav>
  );
};

export default Navbar;
