import BlogCard from "../../components/cards/blogCard";
import Pagination from "../../components/pagination";

export default function BlogListPage() {
  return (
    <section className="flex flex-col py-6 md:px-12 px-4">
      <div className="flex flex-col md:px-8 px-2">
        <h2 className="font-agrandir_grandheavy md:text-[2.5rem] text-[1.2rem] font-bold text-green">
          Blog - UNMSA
        </h2>
        <span className="font-agrandir md:text-[1.5rem] text-[0.875rem] text-green">
          See what’s happening in UNMSA right now...
        </span>
      </div>
      <div>
        <div className="flex flex-col py-2 md:gap-4 gap-2">
          {Array(6)
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
        <Pagination />
      </div>
    </section>
  );
}
