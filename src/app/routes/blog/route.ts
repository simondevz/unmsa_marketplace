import { RouteObject } from "react-router-dom";
import BlogListRoute from "./blogIndex/route";
import ArticleRoute from "./article/route";

const BlogRoute: RouteObject = {
  path: "/blog",
  children: [BlogListRoute, ArticleRoute],
};

export default BlogRoute;
