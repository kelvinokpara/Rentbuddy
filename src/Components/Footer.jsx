import googlePlay from "../assets/Icons/footer-icons/google-play.png";
import appStore from "../assets/Icons/footer-icons/apple-store.png";

const Footer = () => {
  return (
    <footer className="bg-primHue text-white flex  gap-12 lg:gap-2 flex-wrap lg:flex-nowrap items-end p-16 sm:p-20">
      <div className="w-4/5 flex flex-wrap gap-x-32 gap-y-12">
        <ul className="flex flex-col gap-3">
          <li className="listHead">HELP AND SUPPORT</li>
          <li>Chat with us</li>
          <li>Contact us</li>
          <li>Help Center</li>
          <li>How to use iRenta</li>
          <li>Your account</li>
        </ul>
        {/*  */}
        <ul className="flex flex-col gap-3">
          <li className="listHead">ABOUT US</li>
          <li>About iRental</li>
          <li>Terms and condition</li>
          <li>Privacy</li>
          <li>iRental payment conditions</li>
          <li>FAQ</li>
        </ul>
        {/*  */}
        <ul className="flex flex-col gap-3">
          <li className="listHead">MAKE MONEY ON RENTBUDDY</li>
          <li>Become a vendor</li>
          <li>Become a user</li>
        </ul>
        {/*  */}
        <ul className="flex flex-col gap-3">
          <li className="listHead">FOLLOW US ON</li>
          <div></div>
        </ul>
        {/*  */}
        <ul className="flex flex-col gap-3">
          <li className="listHead">PAYMENT METHODS</li>
          <div></div>
        </ul>
      </div>

      {/*  */}

      <div className="flex flex-col gap-4">
        <p className="listHead">DOWNLOAD RENTBUDDY FREE APP</p>
        <p>Get access to exclusive offers</p>
        <div className="flex gap-4">
          <img src={googlePlay} alt="google play" />
          <img src={appStore} alt="apple store" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
