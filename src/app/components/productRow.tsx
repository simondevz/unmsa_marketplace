import ProductCard from "./productCard";
import mock_product2 from "../assets/image/mock_product2.jpg";
import mock_product3 from "../assets/image/mock_product3.jpg";
import mock_product4 from "../assets/image/mock_product4.jpg";
import mock_product5 from "../assets/image/mock_product5.jpg";

export default function ProductRow() {
  const products = [
    {
      image_url:
        "https://s3-alpha-sig.figma.com/img/8ddf/9a14/fcf5e27fbce40a84d847549220a52d9a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0ki3RcvTWDzavqat6dwyzPW7lKx9NYFYhKqAhb4fQYmQVOMKp7D-1fM~EbP4IrOQkAhSoTcMIM2GGHyztZCMZqzzo44ag7aqT3gavDZVKvVL0mJuuSfahvumk3sg~PNjT7G4XK6GzHTLlu7wYtGPXVBuSg~M1xZFUNSQKClbFx3CQbBAaWB2vC8j5Z7AnstBXNhd-0V6~TZRWAFHWoZqnZGiyan8Glq6mVtW30XC-OSCwSoYFXTB6Mqc79yompvxcmon~ctOsYomiw~yvx1Xiqev0h3l-XwCgLLxYwjYC4AATTNqa7s2l07yLcwSQAhaVhtcNMaMnQ9QZgkR0HsTw__",
      price: 3000,
      name: "iPhone XR Generic Black pouch",
      location: "Old UNTH, Enugu.",
    },
    {
      image_url: mock_product2,
      price: 7000,
      name: "Headsets",
      location: "Old UNTH, Enugu.",
    },
    {
      image_url: mock_product3,
      price: 12000,
      name: "Oraimo Power bank",
      location: "Old UNTH, Enugu.",
    },
    {
      image_url: mock_product4,
      price: 3500,
      name: "Sphyghygmomanometer",
      location: "Old UNTH, Enugu.",
    },
    {
      image_url: mock_product5,
      price: 5000,
      name: "Litman Stethoscope",
      location: "Old UNTH, Enugu.",
    },
    {
      image_url:
        "https://s3-alpha-sig.figma.com/img/8ddf/9a14/fcf5e27fbce40a84d847549220a52d9a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0ki3RcvTWDzavqat6dwyzPW7lKx9NYFYhKqAhb4fQYmQVOMKp7D-1fM~EbP4IrOQkAhSoTcMIM2GGHyztZCMZqzzo44ag7aqT3gavDZVKvVL0mJuuSfahvumk3sg~PNjT7G4XK6GzHTLlu7wYtGPXVBuSg~M1xZFUNSQKClbFx3CQbBAaWB2vC8j5Z7AnstBXNhd-0V6~TZRWAFHWoZqnZGiyan8Glq6mVtW30XC-OSCwSoYFXTB6Mqc79yompvxcmon~ctOsYomiw~yvx1Xiqev0h3l-XwCgLLxYwjYC4AATTNqa7s2l07yLcwSQAhaVhtcNMaMnQ9QZgkR0HsTw__",
      price: 3000,
      name: "iPhone XR Generic Black pouch",
      location: "Old UNTH, Enugu.",
    },
    {
      image_url: mock_product2,
      price: 7000,
      name: "Headsets",
      location: "Old UNTH, Enugu.",
    },
    {
      image_url: mock_product3,
      price: 12000,
      name: "Oraimo Power bank",
      location: "Old UNTH, Enugu.",
    },
    {
      image_url: mock_product4,
      price: 3500,
      name: "Sphyghygmomanometer",
      location: "Old UNTH, Enugu.",
    },
    {
      image_url: mock_product5,
      price: 5000,
      name: "Litman Stethoscope",
      location: "Old UNTH, Enugu.",
    },
  ];

  return (
    <div className="shadow-lg p-2 rounded-md">
      <div className="flex gap-2 overflow-x-scroll">
        {products.map((item, index) => {
          return (
            <ProductCard
              key={index}
              image_url={item.image_url}
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
