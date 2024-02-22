import { Link } from "react-router-dom";

export default function VendorCard({ vendor }: { vendor: any }) {
  return (
    <div className="flex md:flex-col gap-4 border-2 text-center border-green px-4 pt-2 pb-4 md:gap-0.5 rounded-md">
      <div
        style={{ backgroundImage: `url(${vendor.image})` }}
        className="w-32 h-32 bg-no-repeat bg-cover bg-origin-border bg-center mx-auto flex"
      ></div>
      <div className="w-40">
        <span className="text-green font-agrandir_bold md:text-base text-[0.75rem]">
          {vendor.store_name}
        </span>
        <div className="flex flex-col font-agrandir md:text-base text-[0.75rem]">
          <span>
            <span>Rating:</span>
            <span>5</span>
          </span>
          <span>
            <span>Reviews:</span>
            <span>38</span>
          </span>
        </div>
        <Link
          className="font-agrandir text-green md:text-[0.875rem] text-[0.75rem]"
          to={"#"}
        >
          Full Profile {">>"}
        </Link>
      </div>
    </div>
  );
}
