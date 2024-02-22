import vendor1_img from "../assets/image/vendor1.jpg";
import vendor2_img from "../assets/image/vendor2.jpg";
import vendor3_img from "../assets/image/vendor3.jpg";
import VendorCard from "./vendorCard";

export default function VendorRow() {
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
  const vendors = [
    vendor1,
    vendor2,
    vendor3,
    vendor2,
    vendor3,
    vendor1,
    vendor1,
    vendor2,
    vendor3,
    vendor2,
    vendor3,
    vendor1,
  ];

  return (
    <div className="shadow-lg p-2 rounded-md">
      <div className="flex gap-2 overflow-x-scroll">
        {vendors.map((item, index) => {
          return <VendorCard key={index} vendor={item} />;
        })}
      </div>
    </div>
  );
}
