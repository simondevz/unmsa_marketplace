import { useAppSelector } from "../../redux/hooks";
import FilledButton from "../buttons/filledButton";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductCard({
  image_url,
  price,
  name,
  quantity,
  product_id,
  ownerId,
  showAll,
}: {
  product_id: string;
  image_url: string;
  price: number;
  name: string;
  quantity: number;
  ownerId: string;
  showAll?: boolean;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = useAppSelector((state) => state.auth._id);
  const pathname = location.pathname;

  return (
    <div
      className={
        (showAll
          ? "flex "
          : userId === ownerId && pathname.includes("/profile/")
          ? "flex "
          : "hidden ") +
        " flex-col border border-2 border-green rounded-lg md:min-w-48 min-w-36"
      }
    >
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
          Number Left: {quantity}
        </span>
        {userId === ownerId && pathname.includes("/profile/") ? (
          <FilledButton
            onClick={() => navigate(`/shop/product/edit/${product_id}`)}
            text="Edit"
            color="green"
          />
        ) : (
          <FilledButton
            onClick={() => navigate(`/shop/products/${name}/${product_id}`)}
            text="Buy"
            color="green"
          />
        )}
      </div>
    </div>
  );
}
