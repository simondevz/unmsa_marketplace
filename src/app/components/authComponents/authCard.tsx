import authBg from "../../assets/image/authBg.png";

export default function AuthCard() {
  return (
    <div className="flex md:flex-col flex-col-reverse justify-center md:w-2/5 lg:w-3/5 w-full gap-4">
      <span className="hidden md:inline md:order-1 font-agrandir_bold text-darker_lemon w-[20rem] lg:w-[25rem] md:text-[1.2rem] lg:text-[1.5rem] text-center mx-auto">
        Ready to explore the all new opportunity to get your services to your
        customers as an UNMSAite?
      </span>
      <span className="text-center md:order-3 text-[0.875rem] px-6 font-calibri_italic">
        Bringing the best of UNMSA together through market...
      </span>
      <div
        className="flex md:w-[22rem] md:order-2 lg:w-[30rem] w-full md:h-[20rem] lg:h-[25rem] h-[15rem] mx-auto bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${authBg})` }}
      ></div>
      <div className="flex md:gap-6 gap-4 md:order-4 mx-auto md:text-[0.875rem] text-[.75rem]">
        <button className="bg-darker_lemon text-white font-br_firma md:w-36 w-32 py-2 rounded-sm">
          <span className="mx-auto">About Us</span>
        </button>
        <button className="bg-darker_lemon text-white font-br_firma md:w-36 w-32 py-2 rounded-sm">
          <span className="mx-auto">How to start</span>
        </button>
      </div>
    </div>
  );
}
