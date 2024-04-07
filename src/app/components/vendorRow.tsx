import { ProfileDetailsType } from "../types/profileTypes";
import VendorCard from "./cards/vendorCard";

export default function VendorRow({
  vendors,
}: {
  vendors: ProfileDetailsType[];
}) {
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
