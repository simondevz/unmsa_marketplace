import { Form } from "react-router-dom";

export default function EditProductPage() {
  const Divider = () => {
    return <div className="bg-ash h-[2px] rounded-full w-full flex "></div>;
  };

  return (
    <>
      <div className="flex w-full px-10 py-4 bg-green text-white font-agrandir_bold text-[1.2rem]">
        <span className="my-auto">Edit Product</span>
      </div>
      <section className="px-10 py-6 flex">
        <div className="flex flex-col gap-4 border-light_green border-2 w-full rounded-xl p-8 shadow-lg">
          <span className="my-auto font-agrandir text-green text-[1.2rem]">
            Edit Product
          </span>
          <Divider />
          <Form className="flex gap-10 p-8 w-full font-agrandir shadow-lg rounded-md">
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <span className="text-[1.2rem]">Product name</span>
                </label>
                <div className="max-w-[30rem]">
                  <input className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <span className="text-[1.2rem]">Choose category</span>
                </label>
                <div className="max-w-[30rem]">
                  <input className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <span className="text-[1.2rem]">
                    Number in stock (0-1000)
                  </span>
                </label>
                <div className="max-w-[30rem] flex gap-4">
                  <input
                    type={"range"}
                    min={0}
                    max={1000}
                    color="#18661B"
                    className="w-full h-[5px] my-auto"
                  />
                  <span>200</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <span className="text-[1.2rem]">Description</span>
                </label>
                <div className="max-w-[30rem]">
                  <textarea className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className="flex justify-around bg-ash_2 rounded-sm w-80 h-72">
                  <span className="flex font-agrandir_bold text-[0.875rem] text-center w-36 my-auto">
                    Upload up to 3 images 200*200px
                  </span>
                </label>
                <input className="hidden" />
              </div>
              <div className="flex flex-col gap-4">
                <span>Select more details</span>
                <div className="flex gap-4">
                  <label>
                    <span className="font-agrandir_bold">Color:</span>
                  </label>
                  <div>
                    <input />
                  </div>
                </div>
                <div className="flex gap-4">
                  <label>
                    <span className="font-agrandir_bold">Size:</span>
                  </label>
                  <div>
                    <input />
                  </div>
                </div>
                <span className="text-green">Add...</span>
              </div>
            </div>
          </Form>
          <span className="flex w-full px-16 bg-light_orange rounded-xl py-4 font-agrandir_bold text-dark_orange text-[0.875rem]">
            While you have reviewed our policies, you are advised to upload only
            products that are readily available in stock for delivery and remove
            those that are not. Infringing such policy may attract a penalty of
            suspension or disqualification form the market place. To review our
            policies, click here.
          </span>
          <div className="flex w-full flex-row-reverse">
            <button className="flex bg-orange text-white font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-md text-[0.75rem]">
              <span className="my-[0.25rem] mx-8">Save Changes</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
