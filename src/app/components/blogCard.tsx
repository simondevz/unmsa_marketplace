import { Link } from "react-router-dom";
import mock_blog from "../assets/image/mock_blog.jpg";

export default function BlogCard({
  title,
  preText,
  author,
  date,
}: {
  title: string;
  preText: string;
  author: string;
  date: string;
}) {
  return (
    <Link
      className="flex gap-4 p-4 border border-green border-2 rounded-md"
      to={"#"}
    >
      <div>
        <img className="w-40 h-40 object-cover" src={mock_blog} alt={title} />
      </div>
      <div className="flex flex-col justify-between py-2">
        <div className="flex flex-col gap-2">
          <span className="font-agrandir_bold text-green font-bold text-[1.2rem]">
            {title}
          </span>
          <span className="font-agrandir_thinItalic font-[100] text-ash ">
            {preText}
          </span>
        </div>

        <div className="flex flex-col text-ash text-[0.875rem]">
          <span className="font-calibri_bold">Author: {author}</span>
          <span className="font-calibri">{date}</span>
        </div>
      </div>
    </Link>
  );
}
