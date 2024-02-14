import { Link } from "react-router-dom";
import Bar from "../components/bar";
import ProductRow from "../components/productRow";
import BlogCard from "../components/blogCard";

export default function HomePage() {
  return (
    <>
      <section>
        <div className="bg-home bg-no-repeat bg-cover bg-origin-border bg-center flex flex-col justify-end md:min-h-[50rem] min-h-[30rem] p-4 md:p-20 md:gap-4 gap-2">
          <span className="font-gontserrat_bold md:text-[2.5rem] text-[1.2rem] text-white font-bold w-4/5">
            Join our most exciting platform where we offer{" "}
            <span className="text-lemon">products</span> directly to people who
            might want it
          </span>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:gap-4 gap-2">
              <span className="font-gontserrat_bold tracking-wider md:text-[1.2rem] text-[0.875rem] text-lemon">
                Tailored exclusively for e-commerce purposes
              </span>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-white font-agrandir md:text-base text-[0.75rem] rounded-md bg-light_green md:w-36 w-28">
                  Go Shopping
                </button>
                <button className="px-4 py-2 text-white font-agrandir md:text-base text-[0.75rem] rounded-md border border-2 border-white md:w-36 w-28">
                  Login
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="mx-auto font-montserrat_bold font-bold md:text-[2.5rem] text-[1.2rem] text-white">
                  50+
                </span>
                <span className="mx-auto w-32 text-center md:text-base text-[0.75rem] text-orange">
                  Students have registered
                </span>
              </div>
              <div className="flex flex-col">
                <span className="mx-auto font-montserrat_bold font-bold md:text-[2.5rem] text-[1.2rem] text-white">
                  100+
                </span>
                <span className="mx-auto w-32 text-center md:text-base text-[0.75rem] text-orange">
                  Visitors across the country.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green_home bg-no-repeat bg-center bg-cover bg-origin-border md:min-h-[50rem] px-4 py-16  md:p-20 md:gap-8 gap-4 flex flex-col">
          <h2 className="font-agrandir_grandheavy md:text-[2.5rem] text-[1rem] font-bold text-center text-white">
            Our Mission
          </h2>
          <p className="text-center text-white font-semibold text-[0.75rem] md:text-[1.5rem] font-agrandir">
            UNMSA Marketplace; an innovation for UNMSAites and others to empower
            entrepreneurial minds, bringing them closer to their customers and
            enriching their lives through, but not limited to, marketing and
            e-commerce.
          </p>
          <p className="text-center text-white font-semibold text-[0.75rem] md:text-[1.5rem] font-agrandir">
            Our mission extends beyond commerce. We are dedicated to
            sustainability, ethical practices, and social responsibility. We
            believe in leaving a positive impact on the world. While providing a
            commute for exchange of the best services and products provided by
            our members and other students, we have crafted a demonstration tool
            that will impact the lives of students.
          </p>
          <p className="text-center text-white font-semibold text-[0.75rem] md:text-[1.5rem] font-agrandir">
            Coming soon: A computer best test (CBT) programme on all medical
            courses offered in UNMSA and beyond.
          </p>
          <p className="text-center text-white font-semibold text-[0.75rem] md:text-[1.5rem] font-agrandir">
            Go ahead and give the demo a try!
          </p>
          <div className="flex md:gap-4 gap-2 mx-auto">
            <button className="md:px-4 px-2 py-2 text-white md:text-base text-[0.75rem] font-agrandir_bold rounded-md bg-light_green md:w-40 w-32">
              Take CBT(demo)
            </button>
            <button className="md:px-4 px-2 py-2 text-white md:text-base text-[0.75rem] font-agrandir_bold rounded-md border border-2 border-white md:w-40 w-32 ">
              More about Us
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:gap-4 gap-2 p-4 md:p-14">
          <h2 className="font-agrandir_grandheavy text-[1rem] md:text-[2.5rem] font-bold text-center text-green">
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
          <Bar text="UMNSA’s Top Sellers" />
          <div className="flex flex-col gap-6 mb-4">
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
    </>
  );
}
