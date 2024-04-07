import { Form } from "react-router-dom";
import default_image_url from "../../assets/image/default_profile_pic.png";
import edit_icon from "../../assets/icons/edit_icon.png";
// import ProductRow from "../../components/productRow";

export default function EditProfilePage() {
  // const navigate = useNavigate();
  const Divider = () => {
    return <div className="bg-ash h-[2px] rounded-full w-full flex "></div>;
  };

  return (
    <>
      <div className="flex w-full px-10 py-4 bg-green text-white font-agrandir_bold text-[1.2rem]">
        <span className="my-auto">Vendor's Profile</span>
      </div>
      <section className="px-10 py-6 flex">
        <div className="flex flex-col gap-4 border-light_green border-2 w-full rounded-xl p-8 shadow-lg">
          <div className="flex gap-6 justify-between w-full">
            <div>
              <div
                className="bg-no-repeat bg-cover h-52 w-52 flex rounded-sm"
                style={{
                  backgroundImage: "url(" + default_image_url + ")",
                }}
              ></div>
            </div>
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Brand Name:
                  </span>
                  <span className="flex font-agrandir">Mahley</span>
                  <button
                    className="w-6 h-6 bg-no-repeat bg-cover rounded-full"
                    style={{
                      backgroundImage: `url(${edit_icon})`,
                    }}
                  ></button>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Owner:
                  </span>
                  <span className="flex font-agrandir">Emmanuel Emmanuel</span>
                  <button
                    className="w-6 h-6 bg-no-repeat bg-cover rounded-full"
                    style={{
                      backgroundImage: `url(${edit_icon})`,
                    }}
                  ></button>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Location:
                  </span>
                  <span className="flex font-agrandir">
                    Old site, UNTH, Enugu.
                  </span>
                  <button
                    className="w-6 h-6 bg-no-repeat bg-cover rounded-full"
                    style={{
                      backgroundImage: `url(${edit_icon})`,
                    }}
                  ></button>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Gender:
                  </span>
                  <span className="flex font-agrandir">M</span>
                  <button
                    className="w-6 h-6 bg-no-repeat bg-cover rounded-full"
                    style={{
                      backgroundImage: `url(${edit_icon})`,
                    }}
                  ></button>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Department:
                  </span>
                  <span className="flex font-agrandir">Medicine</span>
                  <button
                    className="w-6 h-6 bg-no-repeat bg-cover rounded-full"
                    style={{
                      backgroundImage: `url(${edit_icon})`,
                    }}
                  ></button>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Level:
                  </span>
                  <span className="flex font-agrandir">500</span>
                  <button
                    className="w-6 h-6 bg-no-repeat bg-cover rounded-full"
                    style={{
                      backgroundImage: `url(${edit_icon})`,
                    }}
                  ></button>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Contact Info:
                  </span>
                  <span className="flex font-agrandir">
                    08000000000, mahley@email.com
                  </span>
                  <button
                    className="w-6 h-6 bg-no-repeat bg-cover rounded-full"
                    style={{
                      backgroundImage: `url(${edit_icon})`,
                    }}
                  ></button>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            {/* <div className="flex justify-between">
              <span className="my-auto font-agrandir text-green">
                Your Services/Products
              </span>
              <button
                onClick={() => navigate("/shop/product/create/new")}
                className={
                  "bg-green text-white  flex whitespace-nowrap font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-sm"
                }
              >
                <span className="mx-6 my-auto">Add Product</span>
              </button>
            </div> */}

            <div className="flex justify-between">
              <span className="my-auto font-agrandir text-green">
                Payment Details
              </span>
            </div>
            <Form className="flex flex-col gap-4 p-4 w-full font-agrandir shadow-lg p-2 rounded-md">
              <span className="flex bg-lighter_ash px-6 text-[0.875rem] rounded-md py-4 w-full text-dark_ash_2 font-agrandir_bold">
                <span className="my-auto">
                  At the time, vendors on UNMSA marketplace may be required to
                  own a Paystack account to receive payments.
                </span>
              </span>
              <div className="flex flex-col gap-4">
                <label>
                  <span className="text-[1.2rem]">Your Paystack E-mail</span>
                </label>
                <div className="max-w-[25rem]">
                  <input
                    type="text"
                    className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <span className="text-[1.2rem]">Your full name</span>
                  <span className="text-[0.875rem]">
                    Must comply with your bank information
                  </span>
                </label>
                <div className="max-w-[25rem]">
                  <input
                    type="text"
                    className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <span className="text-[1.2rem]">
                    Preferred mode of payment
                  </span>
                  <span className="text-[0.875rem]">
                    Buyers will see this option will making payments
                  </span>
                </label>
                <div className="max-w-[25rem]">
                  <select className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white">
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="flex flex-col">
                    <span className="text-[1.2rem]">Bank Details</span>
                  </label>
                  <div className="max-w-[25rem] flex flex-col gap-4">
                    <select className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white">
                      <option>ACCESS BANK</option>
                    </select>
                    <input className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white" />
                  </div>
                </div>
              </div>
            </Form>
            <span className="flex w-full px-16 bg-light_orange rounded-xl py-4 font-agrandir_bold text-dark_orange text-[0.875rem]">
              While you have reviewed our policies, you are advised to upload
              only products that are readily available in stock for delivery and
              remove those that are not. Infringing such policy may attract a
              penalty of suspension or disqualification form the market place.
              To review our policies, click here.
            </span>
            <div className="flex w-full flex-row-reverse">
              <button className="flex bg-orange text-white font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-md text-[0.75rem]">
                <span className="my-[0.25rem] mx-8">Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
