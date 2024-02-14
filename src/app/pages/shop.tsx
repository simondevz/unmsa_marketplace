import { Link } from "react-router-dom";
import Bar from "../components/bar";
import BlogCard from "../components/blogCard";
import ProductRow from "../components/productRow";

export default function ShopPage() {
  return (
    <section>
      <div className="flex flex-col md:gap-4 gap-2 w-full justify-center p-2">
        <span className="flex mx-auto font-agrandir_bold text-black md:text-base text-[0.5rem] ">
          You have to create an account or log in to be able to buy or sell
        </span>
        <div className="flex md:gap-4 gap-2 mx-auto">
          <button className="md:px-4 px-2 md:py-2 py-1 text-white font-agrandir_bold rounded bg-light_green md:w-32 w-24 md:text-base text-[0.75rem]">
            Sign Up
          </button>
          <button className="md:px-4 px-2 md:py-2 py-1 text-light_green font-agrandir_bold rounded border border-2 border-light_green md:w-32 w-24 text-[0.75rem]">
            Login
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-4 p-4 md:p-14">
        <h2 className="font-agrandir_grandheavy md:text-[2.5rem] text-[1rem] font-bold text-center text-green">
          Explore the marketplace 🛍️ 🛒
        </h2>
        <Bar text="UMNSA’s Top Sellers" />
        <div className="flex flex-col gap-6 mb-4">
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <Link
            className="font-agrandir text-green text-[0.75rem] md:text-[0.875rem] underline"
            to={"#"}
          >
            Continue shopping {">>"}
          </Link>
        </div>
        {/* <Bar text="Best sellers outside UNMSA" />
        <div className="flex flex-col gap-6 mb-4">
          <ProductRow />
          <ProductRow />
          <Link
            className="font-agrandir text-green text-[0.75rem] md:text-[0.875rem] underline"
            to={"#"}
          >
            Continue shopping {">>"}
          </Link>
        </div> */}
        <Bar text="Verified" />
        <div className="flex flex-col gap-6 mb-4">
          <ProductRow />
          <Link
            className="font-agrandir text-green text-[0.75rem] md:text-[0.875rem] underline"
            to={"#"}
          >
            Continue shopping {">>"}
          </Link>
        </div>

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
  );
}
