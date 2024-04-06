import ProductCard from "./cards/productCard";
import { ProductType } from "../types/productTypes";

export default function ProductRow({ list }: { list: ProductType[] }) {
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
            />
          );
        })}
      </div>
    </div>
  );
}
