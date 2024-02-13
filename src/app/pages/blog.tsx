import BlogCard from "../components/blogCard";
import Pagination from "../components/pagination";

export default function BlogListPage() {
  return (
    <section className="flex flex-col py-6 px-12">
      <div className="flex flex-col px-8">
        <h2 className="font-agrandir_grandheavy text-[2.5rem] font-bold text-green">
          Blog - UNMSA
        </h2>
        <span className="font-agrandir text-[1.5rem] text-green">
          See what’s happening in UNMSA right now...
        </span>
      </div>
      <div>
        <div className="flex flex-col py-2 gap-4">
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
