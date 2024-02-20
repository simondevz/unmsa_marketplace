import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Timer from "../components/timer";

export default function CbtTestPage() {
  // TODO: Store some of the data in localstorage so that reloading will contine from where the user stopped
  const location = useLocation();
  const [count, setCount] = useState(1);
  const [
    QUESTIONS,
    // _
  ] = useState({
    "Anatomy Test": [
      {
        question:
          "All structures lie behind the thoracic duct at the root of the neck  except:",
        options: [
          "Vertebral artery  and vein",
          "Carotid sheath",
          "Phrenic nerve",
          "Thyrocervical trunk and its branches",
        ],
        answer: "Carotid sheath",
        refrence: "(1st test, Gross Anat, 2007)",
      },
      {
        question: " All the statements about azygos vein are correct  except: ",
        options: [
          "They are paravertebral in position",
          "They are not accompanied by  corresponding arteries",
          "They have  no valves in their lumen",
          "They may appear tortuous ",
        ],
        answer: "They have  no valves in their lumen",
        refrence: "(1st test, Gross Anat, 2007)",
      },
      {
        question: "All are the tributaries of  azygos vein  except:",
        options: [
          "Hemiazygos vein",
          "Accessory hemiazygos vein",
          "Right first posterior intercostal vein",
          "Right bronchial vein",
        ],
        answer: "Right first posterior intercostal vein",
        refrence: "(1st test, Gross Anat, 2007)",
      },
      {
        question: "The left superior intercostal vein drains into:",
        options: [
          "Left brachiocephalic vein",
          "Azygos vein",
          "Hemiazygos vein",
          "Accessory hemiazygos vein",
        ],
        answer: "Left brachiocephalic vein",
        refrence: "(1st test, Gross Anat, 2007)",
      },
      {
        question:
          "All the statements regarding accessory azygos vein are correct  except:",
        options: [
          "It  drains into azygos vein",
          "It  receives left superior intercostal vein",
          "It  receives left bronchial veins",
          "It  lies on left side only",
        ],
        answer: "It  receives left superior intercostal vein",
        refrence: "(1st test, Gross Anat, 2007)",
      },
    ],
  });

  const [answers, setAnswers] = useState<any[]>(Array(5));
  const [checked, setChecked] = useState<any>({});
  const letters = ["a", "b", "c", "d", "e"];

  const [timeRecord, setTimeRecord] = useState("");
  const navigate = useNavigate();
  const subject = location.state.subject;
  const handleEndTest = useCallback(() => {
    navigate("../score", {
      state: { questions: QUESTIONS, answers, subject, timeRecord },
    });
  }, [QUESTIONS, answers, navigate, subject, timeRecord]);

  function handleOptionPick(event: any, count: number, option: string) {
    const newAnswers = answers;
    newAnswers[count - 1] = event.target.value;
    setAnswers(newAnswers);
    setChecked({ [option]: true });
  }

  useEffect(() => {
    if (timeRecord === "0 : 0") handleEndTest();
  }, [handleEndTest, timeRecord]);

  return (
    <div className="flex flex-col justify-center gap-2 md:gap-4 mt-2 md:mt-4 mb-4 md:mb-10 px-6 md:px-12">
      <div className="flex justify-end text-[0.75rem] md:text-base font-agrandir_bold">
        <Timer
          timeRecord={timeRecord}
          setTimeRecord={setTimeRecord}
          startMinutes={10}
        />{" "}
        remaining
      </div>
      <div className="flex flex-col gap-2 md:gap-4 mx-auto">
        {subject === "Anatomy Test" ? (
          QUESTIONS["Anatomy Test"].map((question, index) => {
            if (index + 1 === count)
              return (
                <>
                  <span className="font-agrandir_grandheavy text-dark_ash text-[0.875rem] md:text-[1.2rem] flex mx-auto md:min-w-[35rem]">
                    {subject}
                  </span>
                  <span className="font-agrandir_bold text-[0.75rem] md:text-base text-dark_ash ">
                    Question {count} {question.refrence}
                  </span>
                  <div className="flex flex-col text-[0.75rem] md:text-base font-agrandir_bold gap-2 md:gap-4">
                    <span>{question.question}</span>
                    <div className="flex flex-col gap-1 md:gap-2">
                      {question.options.map(
                        (option: string, option_index: number) => {
                          return (
                            <div
                              key={option_index}
                              className="flex w-full justify-between"
                            >
                              <label htmlFor={option}>
                                {letters[option_index]}. {option}
                              </label>
                              <input
                                type="radio"
                                onChange={(event) =>
                                  handleOptionPick(event, count, option)
                                }
                                checked={
                                  checked[option] ||
                                  answers[count - 1] === option
                                }
                                name={"options" + index}
                                id={option}
                                value={option}
                              />
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
                      {count === 5 || count > 5 ? (
                        <button
                          className="flex px-4 disabled:bg-ash md:px-8 py-1 md:py-2 bg-light_green text-[0.75rem] md:text-base text-white font-agrandir_bold rounded"
                          onClick={() => {
                            handleEndTest();
                          }}
                        >
                          submit
                        </button>
                      ) : (
                        <button
                          className="flex px-4 disabled:bg-ash md:px-8 py-1 md:py-2 bg-light_green text-[0.75rem] md:text-base text-white font-agrandir_bold rounded"
                          onClick={() => {
                            setCount(count + 1);
                          }}
                        >
                          next
                        </button>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleEndTest()}
                    className="flex px-4 md:px-8 py-1 md:py-2 text-[0.75rem] md:text-base bg-red mx-auto text-white font-agrandir_bold rounded"
                  >
                    End Test
                  </button>
                </>
              );
            return <></>;
          })
        ) : (
          <div>
            Sorry no questions available for this paper yet. Please come back
            later
          </div>
        )}
      </div>
    </div>
  );
}
