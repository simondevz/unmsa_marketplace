import unmsaBadge from "../../assets/logo/unmsa_logo.png";

export default function AuthHeader() {
  return (
    <nav className="flex gap-4 justify-center pb-4 pt-12 border-b-[1px] border-ash">
      <div
        className="flex w-14 h-14 my-auto bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url(" + unmsaBadge + ")" }}
      ></div>
      <div className="flex flex-col leading-none gap-2">
        <span className="font-agrandir_grandheavy text-darker_lemon text-[1.2rem] tracking-[0.5rem] mx-auto">
          UNMSA
        </span>
        <span className="font-agrandir_grandheavy text-black text-[1.2rem] mx-auto">
          MARKETPLACE
        </span>
        <span className="font-calibri_italic text-black text-[0.875rem] mx-auto">
          Bringing the best of UNMSA together through market...
        </span>
      </div>
    </nav>
  );
}
