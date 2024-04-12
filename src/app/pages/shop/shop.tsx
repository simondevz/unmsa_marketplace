import { Link, useLocation, useNavigate } from "react-router-dom";
import Bar from "../../components/bar";
import BlogCard from "../../components/cards/blogCard";
import ProductRow from "../../components/productRow";
import VendorRow from "../../components/vendorRow";
import { useGetProductsQuery } from "../../api.routes";
import Loading from "../../components/loading";
import { useEffect, useState } from "react";
import { ProductType } from "../../types/productTypes";
import { useAppSelector } from "../../redux/hooks";

export default function ShopPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const userId = useAppSelector((state) => state.auth._id);
  const { data, isLoading, isSuccess } = useGetProductsQuery({});
  const [displayList, setDisplayList] = useState<ProductType[][]>();

  console.log(data);

  useEffect(() => {
    function splitArray(arr: ProductType[]) {
      let biggerArr: ProductType[][] = [];
      let tempArr: ProductType[] = [];

      for (let index2 = 0; index2 < arr.length + 1; index2++) {
        if (index2 === arr.length) {
          biggerArr = [...biggerArr, tempArr];
          break;
        }

        if (tempArr.length < 10) {
          tempArr.push(arr[index2]);
        } else {
          biggerArr = [...biggerArr, tempArr];
          tempArr = [];
          tempArr.push(arr[index2]);
        }
      }
      return biggerArr;
    }

    if (isSuccess) setDisplayList(splitArray(data));
  }, [data, isSuccess]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <div
            className={
              (userId ? "hidden " : "flex ") +
              " flex-col md:gap-4 gap-2 w-full justify-center p-2"
            }
          >
            <span className="flex mx-auto font-agrandir_bold text-black md:text-base text-[0.5rem] ">
              You have to create an account or log in to be able to buy or sell
            </span>
            <div className="flex md:gap-4 gap-2 mx-auto">
              <button
                onClick={() =>
                  navigate("/auth/signup", {
                    state: { redirectUrl: location.pathname },
                  })
                }
                className="md:px-4 px-2 md:py-2 py-1 text-white font-agrandir_bold rounded bg-light_green md:w-32 w-24 md:text-base text-[0.75rem]"
              >
                Sign Up
              </button>
              <button
                onClick={() =>
                  navigate("/auth/login", {
                    state: { redirectUrl: location.pathname },
                  })
                }
                className="md:px-4 px-2 md:py-2 py-1 text-light_green font-agrandir_bold rounded border border-2 border-light_green md:w-32 w-24 text-[0.75rem]"
              >
                Login
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 p-4 md:p-14">
            <h2 className="font-agrandir_grandheavy md:text-[2.5rem] text-[1rem] font-bold text-center text-green">
              Explore the marketplace 🛍️ 🛒
            </h2>
            <Bar text="Categories" />
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "electronics",
                "Food & Snacks",
                "Clothing items",
                "Cosmetics",
                "Stationeries",
                "Prints",
              ].map((text: string, index: number) => {
                return (
                  <button
                    key={index}
                    className="border border-green text-green md:px-4 px-2 md:py-2 py-1 rounded-3xl border-2 font-agrandir_bold font-bold text-[0.75rem] md:text-[0.875rem]"
                  >
                    {text}
                  </button>
                );
              })}
            </div>
            <Bar text="All Products & Services" />
            <div className="flex flex-col gap-6 mb-4">
              {displayList?.length ? (
                displayList.map((productList, index) => (
                  <ProductRow key={index} showAll={true} list={productList} />
                ))
              ) : (
                <>No Listed Products Yet...</>
              )}
              <Link
                className="font-agrandir text-green text-[0.75rem] md:text-[0.875rem] underline"
                to={"#"}
              >
                Show More {">>"}
              </Link>
            </div>
            <Bar text="Top selling products" />
            <div className="flex flex-col gap-6 mb-4">
              {/* todo: fix this to show top products */}
              {displayList?.length ? (
                displayList.map((productList, index) => (
                  <ProductRow key={index} showAll={true} list={productList} />
                ))
              ) : (
                <>No Top Products Yet...</>
              )}
              {/* <Link
                className="font-agrandir text-green text-[0.75rem] md:text-[0.875rem] underline"
                to={"#"}
              >
                Continue shopping {">>"}
              </Link> */}
            </div>

            {/* <Bar text="UMNSA’s Top Sellers" />
            <div className="flex flex-col gap-6 mb-4">
              <VendorRow />
            </div> */}

            <h3 className="font-agrandir_bold md:text-[1.5rem] text-[0.875rem] font-bold text-green">
              See what’s happening in UNMSA
            </h3>
            <div>
              <div className="flex flex-col py-2 gap-4">
                {Array(2)
                  .fill({
                    title: "Meet the new Execs",
                    preText: "Post preamble blah blah blah...",
                    author: "Mahley",
                    date: "12th January, 2024",
                  })
                  .map((post, index) => {
                    return (
                      <BlogCard
                        key={index}
                        title={post.title}
                        preText={post.preText}
                        author={post.author}
                        date={post.date}
                      />
                    );
                  })}
              </div>
              <Link
                className="font-agrandir text-green text-[0.75rem] md:text-[0.875rem] underline"
                to={"#"}
              >
                Continue reading {">>"}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
