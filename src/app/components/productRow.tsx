import ProductCard from "./productCard";

export default function ProductRow() {
  return (
    <div className="shadow-lg p-2 rounded-md">
      <div className="flex gap-2 overflow-x-scroll">
        {Array(10)
          .fill({
            price: 3000,
            name: "iPhone XR Generic Black pouch",
            location: "Old UNTH, Enugu.",
          })
          .map((item, index) => {
            return (
              <ProductCard
                key={index}
                price={item.price}
                name={item.name}
                location={item.location}
              />
            );
          })}
      </div>
    </div>
  );
}
