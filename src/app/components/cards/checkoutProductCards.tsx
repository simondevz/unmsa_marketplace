import image_url from "../../assets/image/mock_product.jpg";
import { MdDelete } from "react-icons/md";

export default function CheckoutProductCards() {
  return (
    <div className="border-b border-green relative flex gap-4 p-4">
      <div
        style={{
          backgroundImage: "url(" + image_url + ")",
        }}
        className={
          "w-28 md:w-36 md:h-36 h-28 bg-no-repeat bg-cover bg-origin-border rounded-md"
        }
      ></div>
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="font-agrandir_bold">Iphone 13 Mini pouch.</span>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between w-full gap-6">
            <span>Units:</span>
            <span className="text-left w-20">2</span>
          </div>
          <div className="flex justify-between w-full gap-6">
            <span>Total Amount:</span>
            <span className="text-left w-20">6000</span>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <button>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
