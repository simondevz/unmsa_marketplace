import ProductCard from "./productCard";
import mock_product2 from "../assets/image/mock_product2.jpg";
import mock_product3 from "../assets/image/mock_product3.jpg";
import mock_product4 from "../assets/image/mock_product4.jpg";
import mock_product5 from "../assets/image/mock_product5.jpg";
import mock_product6 from "../assets/image/zobo-bottle.webp";
import vendor1_img from "../assets/image/vendor1.jpg";
import vendor2_img from "../assets/image/vendor2.jpg";
import vendor3_img from "../assets/image/vendor3.jpg";

export default function ProductRow() {
  const vendor1 = {
    image: vendor1_img,
    name: "Mbakwe Kenechukwu",
    store_name: "Mkay Stores",
  };
  const vendor2 = {
    image: vendor2_img,
    name: "Ezechukwu Claire",
    store_name: "Preorder with Claire",
  };
  const vendor3 = {
    image: vendor3_img,
    name: "Adaeze Ezeome",
    store_name: "Zobo Delight",
  };
  const products = [
    {
      image_url: mock_product2,
      price: 7000,
      name: "Headsets",
      location: "Old UNTH, Enugu.",
      category: "Electronics",
      description:
        "Pre-order with Claire is a marketing hub for high-quality electronics including power banks, headsets, chargers, etc.",
      vendor: vendor2,
    },
    {
      image_url: mock_product3,
      price: 12000,
      name: "Oraimo Power bank",
      category: "Electronics",
      description:
        "Pre-order with Claire is a marketing hub for high-quality electronics including power banks, headsets, chargers, etc.",
      location: "Old UNTH, Enugu.",
      vendor: vendor2,
    },
    {
      image_url: mock_product4,
      price: 3500,
      name: "Sphyghygmomanometer",
      category: "Medical Equipment",
      description:
        "Mkay Stores deals on medical textbooks for both preclinical and clinical class at affordable rates. We also deal on high quality medical equipments that students need for their clinical posting and medical practice",
      location: "Old UNTH, Enugu.",
      vendor: vendor1,
    },
    {
      image_url: mock_product5,
      price: 5000,
      name: "Litman Stethoscope",
      category: "Medical Equipment",
      description:
        "Mkay Stores deals on medical textbooks for both preclinical and clinical class at affordable rates. We also deal on high quality medical equipments that students need for their clinical posting and medical practice",
      location: "Old UNTH, Enugu.",
      vendor: vendor1,
    },
    {
      image_url: mock_product6,
      price: 500,
      name: "1 liter Zobo drink",
      location: "Imoke hostel",
      category: "Drinks and Refreshments",
      description:
        "Product description: ⁠It is a non-carbonated, highly nutritious drink made from natural fruits",
      vendor: vendor3,
    },
    {
      image_url: mock_product2,
      price: 7000,
      name: "Headsets",
      category: "Electronics",
      description:
        "Pre-order with Claire is a marketing hub for high-quality electronics including power banks, headsets, chargers, etc.",
      location: "Old UNTH, Enugu.",
      vendor: vendor2,
    },
    {
      image_url: mock_product3,
      price: 12000,
      name: "Oraimo Power bank",
      category: "Electronics",
      description:
        "Pre-order with Claire is a marketing hub for high-quality electronics including power banks, headsets, chargers, etc.",
      location: "Old UNTH, Enugu.",
      vendor: vendor2,
    },
    {
      image_url: mock_product4,
      price: 3500,
      name: "Sphyghygmomanometer",
      category: "Medical Equipment",
      description:
        "Mkay Stores deals on medical textbooks for both preclinical and clinical class at affordable rates. We also deal on high quality medical equipments that students need for their clinical posting and medical practice",
      location: "Old UNTH, Enugu.",
      vendor: vendor1,
    },
    {
      image_url: mock_product5,
      price: 5000,
      name: "Litman Stethoscope",
      category: "Medical Equipment",
      description:
        "Mkay Stores deals on medical textbooks for both preclinical and clinical class at affordable rates. We also deal on high quality medical equipments that students need for their clinical posting and medical practice",
      location: "Old UNTH, Enugu.",
      vendor: vendor1,
    },
    {
      image_url: mock_product6,
      price: 500,
      name: "1 liter Zobo drink",
      location: "Imoke hostel",
      category: "Drinks and Refreshments",
      description:
        "Product description: ⁠It is a non-carbonated, highly nutritious drink made from natural fruits",
      vendor: vendor3,
    },
  ];

  return (
    <div className="shadow-lg p-2 rounded-md">
      <div className="flex gap-2 overflow-x-scroll">
        {products.map((item, index) => {
          return (
            <ProductCard
              key={index}
              product={item}
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
