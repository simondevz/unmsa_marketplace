import FilledButton from "./filledButton";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  image_url,
  price,
  name,
  location,
  product,
}: {
  product: any;
  image_url: string;
  price: number;
  name: string;
  location: string;
}) {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col border border-2 border-green rounded-lg md:min-w-48 min-w-36">
      <div
        style={{
          backgroundImage: "url(" + image_url + ")",
        }}
        className={
          "w-full md:h-36 h-28 bg-no-repeat bg-cover bg-origin-border rounded-t-lg"
        }
      ></div>
      <div className="flex flex-col md:gap-2 gap-1 md:p-3 p-2">
        <span className="text-darker_lemon font-semibold md:text-[1.2rem] font-agrandir_bold">
          N {price}
        </span>
        <span className="font-agrandir text-pretty md:text-base text-[0.875rem] line-clamp-2 min-h-10 md:line-clamp-1 md:min-h-4 text-black overflow-x-hidden">
          {name}
        </span>
        <span className="md:text-[0.875rem] text-[0.75rem] text-light_ash font-agrandir">
          {location}
        </span>
        <FilledButton
          onClick={() => navigate("/shop/product-page", { state: { product } })}
          text="Buy"
        />
      </div>
    </div>
  );
}
