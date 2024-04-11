import { GiCheckMark } from "react-icons/gi";
import CheckoutProductCards from "../../components/cards/checkoutProductCards";
import { useState } from "react";
import { OrderMetaDataType } from "../../types/shopTypes";

export default function CheckoutPage() {
  const [metaData, setMetadata] = useState<OrderMetaDataType>({
    contactInfo: {
      email: "",
      phoneNumber: "",
    },

    shippingInfo: {
      fullName: "",
      homeAddress: "",
      pickUpStation: "",
      state: "Enugu",
      city: "Enugu",
    },
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    property: "contactInfo" | "shippingInfo"
  ) => {
    setMetadata({
      ...metaData,
      [property]: {
        ...metaData[property],
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <>
      <div className="flex w-full px-10 py-4 bg-green text-white font-agrandir_bold text-[1.2rem]">
        <span className="my-auto">Checkout</span>
      </div>
      <section className="flex px-12 py-6 font-agrandir">
        <div className="border-2 border-green p-6 flex gap-12 w-full rounded-lg justify-between">
          <div className="flex w-full">
            <form className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2">
                <span className="text-[1.5rem]">Contact Information</span>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email">Email address</label>
                  <input
                    name="email"
                    id="email"
                    type="text"
                    value={metaData.contactInfo.email}
                    onChange={(event) => handleChange(event, "contactInfo")}
                    className="p-2 bg-milky_white border-2 border-ash rounded-md w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[1.5rem]">Shipping information</span>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    name="fullName"
                    id="fullName"
                    value={metaData.shippingInfo.fullName}
                    onChange={(event) => handleChange(event, "shippingInfo")}
                    className="p-2 bg-milky_white border-2 border-ash rounded-md w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={(event) => handleChange(event, "contactInfo")}
                    value={metaData.contactInfo.phoneNumber}
                    className="p-2 bg-milky_white border-2 border-ash rounded-md w-full"
                  />
                </div>
                <div className="flex gap-2 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="city">City</label>
                    <select
                      name="city"
                      id="city"
                      onChange={(event) => handleChange(event, "shippingInfo")}
                      value={metaData.shippingInfo.city}
                      className="p-2 bg-milky_white border-2 border-ash rounded-md w-full"
                    >
                      <option value={"Enugu"}>Enugu</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="state">State</label>
                    <select
                      name="state"
                      id="state"
                      onChange={(event) => handleChange(event, "shippingInfo")}
                      value={metaData.shippingInfo.state}
                      className="p-2 bg-milky_white border-2 border-ash rounded-md w-full"
                    >
                      <option value={"Enugu"}>Enugu</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="homeAddress">Home address</label>
                  <input
                    name="homeAddress"
                    id="homeAddress"
                    value={metaData.shippingInfo.homeAddress}
                    className="p-2 bg-milky_white border-2 border-ash rounded-md w-full"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <span>Delivery method</span>
                  <div className="flex gap-4 ">
                    <button
                      type={"button"}
                      className="flex border border-green bg-lighter_green/30 gap-24 p-2 rounded-md"
                    >
                      <div className="flex gap-4 flex-col">
                        <div className="flex flex-col">
                          <span>Pick-Up</span>
                          <span>2-3 days</span>
                        </div>
                        <span>N1500</span>
                      </div>
                      <span>
                        <GiCheckMark />
                      </span>
                    </button>

                    <button
                      type={"button"}
                      className="flex border border-green bg-lighter_green/30 gap-20 p-2 rounded-md"
                    >
                      <div className="flex gap-4 flex-col">
                        <div className="flex flex-col">
                          <span>Door-delivery</span>
                          <span>2-3 days</span>
                        </div>
                        <span>N1500</span>
                      </div>
                      <span>
                        <GiCheckMark />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="flex w-full border border-green rounded-md flex flex-col">
            <CheckoutProductCards />
            <CheckoutProductCards />
            <CheckoutProductCards />
            <div className="flex p-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between w-full">
                  <span>Subtotal:</span>
                  <span>N18000</span>
                </div>
                <div className="flex justify-between w-full">
                  <span>Shipping fee:</span>
                  <span>N1800</span>
                </div>
                <div className="flex justify-between w-full font-agrandir_bold">
                  <span>Total:</span>
                  <span>N18000</span>
                </div>
                <div className="flex justify-center w-full">
                  <button className="w-32 flex py-2 rounded-md bg-darker_lemon text-white font-agrandir_bold">
                    <span className="mx-auto">Proceed</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
