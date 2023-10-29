const Button = ({ children, btnType = "type1", icon_L, icon_R }) => {
  return (
    <button
      className={`sm:py-3 py-2 sm:px-7 px-5  lg:text-base text-sm lg:font-bold font-medium flex place-items-center gap-1
      ${
        btnType === "type1"
          ? "bg-secHue text-white rounded-2xl"
          : btnType === "type2"
          ? "border border-btnBorder1 rounded-lg text-white"
          : btnType === "type3"
          ? "border border-btnBorder2 text-btnBorder2 rounded-full"
          : ""
      }
      `}
    >
      {icon_L ? <img src={icon_L} alt="button icon" /> : ""}
      {children ?? "..."}
      {icon_R ? <img src={icon_R} alt="button icon" /> : ""}
    </button>
  );
};

export default Button;
