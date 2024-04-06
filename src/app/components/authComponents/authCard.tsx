import authBg from "../../assets/image/authBg.png";

export default function AuthCard() {
  return (
    <div className="flex flex-col justify-center w-3/5 gap-4">
      <span className="font-agrandir_bold text-darker_lemon w-[25rem] text-[1.5rem] text-center mx-auto">
        Ready to explore the all new opportunity to get your services to your
        customers as an UNMSAite?
      </span>
      <div
        className="flex w-[30rem] h-[25rem] mx-auto bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${authBg})` }}
      ></div>
      <div className="flex gap-6 mx-auto text-[0.875rem]">
        <button className="bg-darker_lemon text-white font-br_firma w-36 py-2 rounded-sm">
          <span className="mx-auto">About Us</span>
        </button>
        <button className="bg-darker_lemon text-white font-br_firma w-36 py-2 rounded-sm">
          <span className="mx-auto">How to start</span>
        </button>
      </div>
    </div>
  );
}
