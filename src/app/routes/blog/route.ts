import { RouteObject } from "react-router-dom";
import BlogListPage from "../../pages/blog/blog";

const BlogRoute: RouteObject = {
  path: "/blog",
  Component: BlogListPage,
};

export default BlogRoute;
