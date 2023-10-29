import Button from "../Button";
import arrowWhite from "../../assets/Icons/btn-icons/btn-arrow-white.png";
import headset from "../../assets/Images/hero-img/hero-headset.png";
import rentBtn from "../../assets/Icons/rent-icon.png";
import speaker from "../../assets/Images/hero-img/hero-speaker.png";

const HeroSection = () => {
  return (
    <section
      className="lg:p-40 lg:pt-28 sm:p-20 p-10 
    sm:flex justify-between items-center"
    >
      <div className="flex flex-col gap-10 sm:w-2/5">
        <h1 className="text-textBlack font-bold lg:text-5xl sm:text-4xl text-3xl lg:leading-[52.5px] tracking-[-2px] font-inter">
          Rent your best equipment, furniture... with Rent
          <span className="text-secHue">Buddy</span>
        </h1>
        <p className="text-textGray font-inter lg:text-base text-sm font-normal leading-7">
          Location based searches, advanced filters for categories, date and
          price ranges. Transparent pricing and seamless transactions.
        </p>
        <div className="inline">
          <Button icon_R={arrowWhite}>Get Started For Free</Button>
        </div>
      </div>
      <div className="w-3/5 hidden sm:flex lg:w-3/6">
        <img src={headset} alt="" className="w-[75%] h-fit" />
        <div className="flex flex-col justify-between items-center">
          <img src={speaker} alt="" width={200} />
          <img src={rentBtn} alt="" width={200} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
