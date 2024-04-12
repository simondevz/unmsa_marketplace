import { RouteObject } from "react-router-dom";
import ArticlePage from "../../../pages/blog/article";

const ArticleRoute: RouteObject = {
  path: ":id",
  Component: ArticlePage,
};

export default ArticleRoute;
