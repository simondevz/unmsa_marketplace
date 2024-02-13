import { useNavigate } from "react-router-dom";

export default function ScorePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 mt-8 md:mt-12 mb-6 md:mb-10 w-full">
      <h2 className="flex mx-auto font-agrandir_grandheavy md:text-[1.5rem] text-green">
        Your Score is 76
      </h2>
      <span className="flex text-[0.75rem] md:text-base font-agrandir_bold mx-auto">
        Time record: 5:49
      </span>
      <div className="flex gap-2 md:gap-4 mx-auto">
        <button
          onClick={() => navigate("../../cbt-demo")}
          className="flex px-4 md:px-8 py-1 md:py-2 text-[0.75rem] md:text-base border border-2 border-light_green text-light_green font-agrandir_bold rounded"
        >
          Go back
        </button>
        <button className="flex px-4 md:px-8 py-1 md:py-2 bg-light_green text-[0.75rem] md:text-base text-white font-agrandir_bold rounded">
          Try Again
        </button>
      </div>
    </div>
  );
}
