import ProductCard from "./cards/productCard";
import { ProductType } from "../types/productTypes";

export default function ProductRow({
  list,
  showAll,
}: {
  list: ProductType[];
  showAll: boolean;
}) {
  return (
    <div className="shadow-lg p-2 rounded-md">
      <div className="flex gap-2 overflow-x-scroll">
        {list.map((item, index) => {
          return (
            <ProductCard
              key={index}
              image_url={item.image_url}
              price={item.price}
              name={item.name}
              quantity={item.quantity}
              product_id={item.product_id}
              ownerId={item.owner}
              showAll={showAll}
            />
          );
        })}
      </div>
    </div>
  );
}
