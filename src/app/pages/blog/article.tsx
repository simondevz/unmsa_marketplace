import { useParams } from "react-router-dom";
import { blogData } from "../../utils/blogStuff";
import { useEffect, useState } from "react";
import { BlogCardType } from "../../types/blogType";
import ReactMarkdown from "react-markdown";

export default function ArticlePage() {
  const param = useParams();
  const [data, setData] = useState<BlogCardType>({
    title: "",
    preText: "",
    author: "",
    date: "",
    image: null,
  });

  useEffect(() => {
    setData(blogData[Number(param.id)]);
  }, [param.id]);

  return (
    <>
      <section className="flex p-4 flex-col gap-4 text-[0.875rem] font-agrandir">
        <div className="flex flex-col gap-2">
          <span className=" text-green text-[1.2rem] font-agrandir_bold">
            {data.title}
          </span>
          <span className="text-[0.75rem] text-ash">{data.date}</span>
        </div>

        <div className="flex flex-col p-2 gap-2 shadow-lg rounded-md">
          <div
            style={{
              backgroundImage: "url(" + data.image + ")",
            }}
            className={
              "w-full md:h-36 h-36 bg-no-repeat bg-center bg-cover bg-origin-border rounded-sm"
            }
          ></div>
          <div>
            <ReactMarkdown>{data.content as string}</ReactMarkdown>
          </div>
        </div>
      </section>
    </>
  );
}
