import FilledButton from "./filledButton";
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard({
  price,
  name,
  location,
}: {
  price: number;
  name: string;
  location: string;
}) {
  const navigate = useNavigate();
  return (
    <Link
      className=" flex flex-col border border-2 border-green rounded-lg min-w-48"
      to={"#"}
    >
      <div
        className={`w-full h-36 bg-no-repeat bg-cover bg-origin-border rounded-t-lg bg-[url("https://s3-alpha-sig.figma.com/img/8ddf/9a14/fcf5e27fbce40a84d847549220a52d9a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0ki3RcvTWDzavqat6dwyzPW7lKx9NYFYhKqAhb4fQYmQVOMKp7D-1fM~EbP4IrOQkAhSoTcMIM2GGHyztZCMZqzzo44ag7aqT3gavDZVKvVL0mJuuSfahvumk3sg~PNjT7G4XK6GzHTLlu7wYtGPXVBuSg~M1xZFUNSQKClbFx3CQbBAaWB2vC8j5Z7AnstBXNhd-0V6~TZRWAFHWoZqnZGiyan8Glq6mVtW30XC-OSCwSoYFXTB6Mqc79yompvxcmon~ctOsYomiw~yvx1Xiqev0h3l-XwCgLLxYwjYC4AATTNqa7s2l07yLcwSQAhaVhtcNMaMnQ9QZgkR0HsTw__")]`}
      ></div>
      <div className="flex flex-col gap-2 p-3">
        <span className="text-darker_lemon font-semibold text-[1.2rem] font-agrandir_bold">
          N {price}
        </span>
        <span className="font-agrandir text-black">{name}</span>
        <span className="text-[0.875rem] text-light_ash font-agrandir">
          {location}
        </span>
        <FilledButton
          onClick={() => navigate("/shop/product-page")}
          text="Buy"
        />
      </div>
    </Link>
  );
}
