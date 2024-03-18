import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosClose, IoIosCheckmark } from "react-icons/io";

export default function ScorePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const letters = ["a", "b", "c", "d", "e"];

  const [showAnswers, setShowAnswers] = useState(false);
  const [count, setCount] = useState(1);
  const { questions, answers, subject, timeRecord } = location.state;

  // calculate score
  const score: number = useMemo(() => {
    let scoreCount = 0;
    questions[subject].forEach(
      (
        question: {
          question: string;
          options: string[];
          answer: string;
          refrence: string;
        },
        index: number
      ) => {
        if (question.answer === answers[index]) scoreCount++;
      }
    );
    return scoreCount;
  }, [answers, questions, subject]);

  return (
    <div className="flex flex-col gap-4 mt-8 md:mt-12 mb-6 md:mb-10 w-full">
      <h2 className="flex mx-auto font-agrandir_grandheavy md:text-[1.5rem] text-green">
        Your Score is {score}
      </h2>
      <span className="flex text-[0.75rem] md:text-base font-agrandir_bold mx-auto">
        Time record: {timeRecord}
      </span>
      <div
        className={
          (showAnswers ? " flex " : " hidden ") + " flex-col px-8 mx-auto"
        }
      >
        {questions[subject].map(
          (
            question: {
              image?: any;
              question: string;
              options: string[];
              answer: string;
              reference?: string;
            },
            index: number
          ) => {
            if (index + 1 === count)
              return (
                <>
                  <span className="font-agrandir_grandheavy text-dark_ash text-[0.875rem] md:text-[1.2rem] flex mx-auto md:min-w-[35rem]">
                    {subject}
                  </span>
                  <span className="font-agrandir_bold text-[0.75rem] md:text-base text-dark_ash ">
                    Question {count} {question?.reference || ""}
                  </span>
                  <div className="flex flex-col text-[0.75rem] md:text-base font-agrandir_bold gap-2 md:gap-4">
                    {question?.image && (
                      <div
                        style={{ backgroundImage: `url(${question?.image})` }}
                        className="w-full h-[20rem] bg-no-repeat bg-contain bg-origin-border bg-center mx-auto flex"
                      ></div>
                    )}
                    <span>{question.question}</span>
                    <div className="flex flex-col gap-1 md:gap-2">
                      {question.options.map(
                        (option: string, option_index: number) => {
                          return (
                            <div
                              key={option_index}
                              className="flex w-full justify-between"
                            >
                              <span>
                                {letters[option_index]}. {option}
                              </span>
                              <span
                                className={
                                  "flex border-2 rounded-full text-xl my-auto text-white" +
                                  (question.answer === option
                                    ? " bg-green border-green"
                                    : " bg-red border-red")
                                }
                              >
                                {question.answer === option ? (
                                  <IoIosCheckmark />
                                ) : (
                                  <IoIosClose />
                                )}
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>
                    <div className="flex gap-2 md:gap-4">
                      <button
                        disabled={(() => {
                          if (count === 1 || count < 1) return true;
                          return false;
                        })()}
                        className="flex px-4 disabled:border-ash disabled:text-ash md:px-8 py-1 md:py-2 text-[0.75rem] md:text-base border border-2 border-light_green text-light_green font-agrandir_bold rounded"
                        onClick={() => {
                          setCount(count - 1);
                        }}
                      >
                        prev
                      </button>
                      <button
                        disabled={(() => {
                          if (count === 5 || count > 5) return true;
                          return false;
                        })()}
                        className="flex px-4 disabled:bg-ash md:px-8 py-1 md:py-2 bg-light_green text-[0.75rem] md:text-base text-white font-agrandir_bold rounded"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        next
                      </button>
                    </div>
                  </div>
                </>
              );
            return <></>;
          }
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 mx-auto">
        <button
          onClick={() => setShowAnswers(true)}
          className={
            (showAnswers ? " hidden " : " flex ") +
            " px-4 md:px-8 py-1 md:py-2 text-[0.75rem] md:text-base border border-2 border-light_green text-light_green font-agrandir_bold rounded"
          }
        >
          See Answers
        </button>
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
