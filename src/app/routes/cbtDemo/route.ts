import { RouteObject } from "react-router-dom";
import CBTDemoPage from "../../pages/cbtDemo";
import SelectQuestionRoute from "./selectQuestions/route";
import CbtTestRoute from "./cbtTest/route";
import ScoreRoute from "./score/route";

const CbtDemoRoute: RouteObject = {
  path: "/cbt-demo",
  Component: CBTDemoPage,
  children: [SelectQuestionRoute, CbtTestRoute, ScoreRoute],
};

export default CbtDemoRoute;
