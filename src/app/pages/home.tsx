import { Link } from "react-router-dom";
import Bar from "../components/bar";
import ProductRow from "../components/productRow";
import BlogCard from "../components/blogCard";

export default function HomePage() {
  return (
    <>
      <section>
        <div className="bg-home bg-no-repeat bg-cover bg-origin-border flex flex-col justify-end min-h-[50rem] p-20 gap-4">
          <span className="font-gontserrat_bold text-[2.5rem] text-white font-bold max-w-[50rem]">
            Join our most exciting platform where we offer{" "}
            <span className="text-lemon">products</span> directly to people who
            might want it
          </span>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <span className="font-gontserrat_bold tracking-wider text-[1.2rem] text-lemon">
                Tailored exclusively for e-commerce purposes
              </span>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-white font-agrandir rounded-md bg-light_green w-36">
                  Go Shopping
                </button>
                <button className="px-4 py-2 text-white font-agrandir rounded-md border border-2 border-white w-36 ">
                  Login
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="mx-auto font-montserrat_bold font-bold text-[2.5rem] text-white">
                  50+
                </span>
                <span className="mx-auto w-32 text-center text-orange">
                  Students have registered
                </span>
              </div>
              <div className="flex flex-col">
                <span className="mx-auto font-montserrat_bold font-bold text-[2.5rem] text-white">
                  100+
                </span>
                <span className="mx-auto w-32 text-center text-orange">
                  Visitors across the country.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green_home bg-no-repeat bg-cover bg-origin-border min-h-[50rem] p-20 gap-8 flex flex-col">
          <h2 className="font-agrandir_grandheavy text-[2.5rem] font-bold text-center text-white">
            Our Mission
          </h2>
          <p className="text-center text-white font-semibold text-[1.5rem] font-agrandir">
            UNMSA Marketplace; an innovation for UNMSAites and others to empower
            entrepreneurial minds, bringing them closer to their customers and
            enriching their lives through, but not limited to, marketing and
            e-commerce.
          </p>
          <p className="text-center text-white font-semibold text-[1.5rem] font-agrandir">
            Our mission extends beyond commerce. We are dedicated to
            sustainability, ethical practices, and social responsibility. We
            believe in leaving a positive impact on the world. While providing a
            commute for exchange of the best services and products provided by
            our members and other students, we have crafted a demonstration tool
            that will impact the lives of students.
          </p>
          <p className="text-center text-white font-semibold text-[1.5rem] font-agrandir">
            Coming soon: A computer best test (CBT) programme on all medical
            courses offered in UNMSA and beyond.
          </p>
          <p className="text-center text-white font-semibold text-[1.5rem] font-agrandir">
            Go ahead and give the demo a try!
          </p>
          <div className="flex gap-4 mx-auto">
            <button className="px-4 py-2 text-white font-agrandir rounded-md bg-light_green w-40">
              Take CBT(demo)
            </button>
            <button className="px-4 py-2 text-white font-agrandir rounded-md border border-2 border-white w-40 ">
              More about Us
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 p-14">
          <h2 className="font-agrandir_grandheavy text-[2.5rem] font-bold text-center text-green">
            Explore the marketplace 🛍️ 🛒
          </h2>
          <Bar text="Categories" />
          <div className="flex flex-wrap gap-2 mb-4">
            {Array(12)
              .fill("Hair accessories")
              .map((text: string, index: number) => {
                return (
                  <button
                    key={index}
                    className="border border-green text-green px-4 py-2 rounded-3xl border-2 font-agrandir_bold font-bold text-[0.875rem]"
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
              className="font-agrandir text-green text-[0.875rem] underline"
              to={"#"}
            >
              Continue shopping {">>"}
            </Link>
          </div>
          <Bar text="Best sellers outside UNMSA" />
          <div className="flex flex-col gap-6 mb-4">
            <ProductRow />
            <Link
              className="font-agrandir text-green text-[0.875rem] underline"
              to={"#"}
            >
              Continue shopping {">>"}
            </Link>
          </div>
          <Bar text="Verified" />
          <div className="flex flex-col gap-6 mb-4">
            <ProductRow />
            <Link
              className="font-agrandir text-green text-[0.875rem] underline"
              to={"#"}
            >
              Continue shopping {">>"}
            </Link>
          </div>

          <h3 className="font-agrandir_bold text-[1.5rem] font-bold text-green">
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
              className="font-agrandir text-green text-[0.875rem] underline"
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
