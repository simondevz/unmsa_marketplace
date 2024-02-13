import { RouteObject } from "react-router-dom";
import BlogListPage from "../../pages/blog";

const BlogRoute: RouteObject = {
  path: "/blog",
  Component: BlogListPage,
};

export default BlogRoute;
