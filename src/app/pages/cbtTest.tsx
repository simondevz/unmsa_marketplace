import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ConfigType } from "../types/cbtTypes";

export default function CbtTestPage() {
  // TODO: Store some of the data in localstorage so that reloading will contine from where the user stopped
  const location = useLocation();
  const [count, setCount] = useState(1);
  const [subject, setSubject] = useState("");

  const navigate = useNavigate();
  const config: ConfigType = location.state.config;
  const [
    score,
    // setScore
  ] = useState(76);

  const [question, setQuestion] = useState({
    question: "What muscle in the body s regarded as the ‘climbing’ muscle",
    options: [
      "Sartorius",
      "Semimembranosus",
      "Latissimus dorsi",
      "Pectoralis minor",
      "Psoas",
    ],
    answer: "Semimembranosus",
  });

  useLayoutEffect(() => {
    if (config.subject) setSubject(config.subject);
  }, [config.subject, location.state, location.state.subject]);

  function handleEndTest() {
    navigate("../score", { state: { score } });
  }

  return (
    <div className="flex flex-col justify-center gap-4 mt-4 mb-10 px-12">
      <div className="flex justify-end font-agrandir_bold">
        10 : 00 remaining
      </div>
      <div className="flex flex-col gap-4 mx-auto">
        <span className="font-agrandir_grandheavy text-dark_ash text-[1.2rem] flex mx-auto">
          {subject}
        </span>
        <span className="font-agrandir_bold text-dark_ash ">
          Question {count}
        </span>
        <div className="flex flex-col font-agrandir_bold gap-4">
          <span>{question.question}</span>
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between">
              <label htmlFor={question.options[0]}>
                a. {question.options[0]}
              </label>
              <input
                type="radio"
                name="options"
                id={question.options[0]}
                value={question.options[0]}
              />
            </div>
            <div className="flex w-full justify-between">
              <label htmlFor={question.options[1]}>
                b. {question.options[1]}
              </label>
              <input
                type="radio"
                name="options"
                id={question.options[1]}
                value={question.options[1]}
              />
            </div>
            <div className="flex w-full justify-between">
              <label htmlFor={question.options[2]}>
                c. {question.options[2]}
              </label>
              <input
                type="radio"
                name="options"
                id={question.options[2]}
                value={question.options[2]}
              />
            </div>
            <div className="flex w-full justify-between">
              <label htmlFor={question.options[3]}>
                d. {question.options[3]}
              </label>
              <input
                type="radio"
                name="options"
                id={question.options[3]}
                value={question.options[3]}
              />
            </div>
            <div className="flex w-full justify-between">
              <label htmlFor={question.options[4]}>
                e. {question.options[4]}
              </label>
              <input
                type="radio"
                name="options"
                id={question.options[4]}
                value={question.options[4]}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button
              className="flex px-8 py-2 border border-2 border-light_green text-light_green font-agrandir_bold rounded"
              onClick={() => {
                if (count > 1) setCount(count - 1);
                setQuestion(question);
              }}
            >
              prev
            </button>
            <button
              className="flex px-8 py-2 bg-light_green text-white font-agrandir_bold rounded"
              onClick={() => {
                if (count < 10) setCount(count + 1);
                setQuestion({
                  ...question,
                  answer: question.options[count % 5],
                });
              }}
            >
              next
            </button>
          </div>
        </div>
        <button
          onClick={() => handleEndTest()}
          className="flex px-8 py-2 bg-red mx-auto text-white font-agrandir_bold rounded"
        >
          End Test
        </button>
      </div>
    </div>
  );
}
