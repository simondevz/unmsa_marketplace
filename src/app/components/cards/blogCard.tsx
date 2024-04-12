import { Link } from "react-router-dom";
import { BlogCardType } from "../../types/blogType";

export default function BlogCard({
  title,
  preText,
  author,
  date,
  image,
  id,
}: BlogCardType) {
  return (
    <Link
      className="flex md:gap-4 gap-2 md:p-4 p-2 border border-green border-2 rounded-md"
      to={"/blog/" + id}
    >
      <div
        style={{
          backgroundImage: "url(" + image + ")",
        }}
        className={
          "md:w-36 w-28 md:h-36 h-40 bg-no-repeat bg-center bg-contain bg-origin-border rounded-sm"
        }
      ></div>
      <div className="flex flex-col w-3/5 justify-between py-2">
        <div className="flex flex-col gap-2">
          <span className="font-agrandir_bold text-nowrap truncate max-w-36 md:max-w-full text-green font-bold text-[0.875rem] md:text-[1.2rem]">
            {title}
          </span>
          <span className="font-agrandir_thinItalic line-clamp-2 font-[100] md:text-base text-[0.75rem] text-ash ">
            {preText}
          </span>
        </div>

        <div className="flex flex-col text-ash text-[0.5rem] md:text-[0.875rem]">
          <span className="font-calibri_bold line-clamp-1">
            Author: {author}
          </span>
          <span className="font-calibri">{date}</span>
        </div>
      </div>
    </Link>
  );
}
