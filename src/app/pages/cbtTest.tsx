import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import umsle_step1_5 from "../assets/image/usmle_step1_5.jpg";
import Timer from "../components/timer";

export default function CbtTestPage() {
  // TODO: Store some of the data in localstorage so that reloading will contine from where the user stopped
  const location = useLocation();
  const [count, setCount] = useState(1);
  const [
    QUESTIONS,
    // _
  ] = useState({
    "Paediatrics Test": [
      {
        image: null,
        question:
          "Growth monitoring is an important component of child survival strategy. Which of the following is INCORRECT regarding activities associated with growth monitoring?",
        options: [
          "Accurate measurement of anthropometric indices of a child",
          "Precise plotting of measured parameters on a validated growth chart",
          "Correct interpretation of plotted measurements",
          "Discussing with and counselling parents on pattern of child's growth",
          "Follow up visit is left at parents leisure time for optimal compliance",
        ],
        answer:
          "Follow up visit is left at parents leisure time for optimal compliance",
        reference: "",
      },
      {
        question: "Drug of choice in treatment of severe malaria includes",
        options: [
          "Oral ACT given every 12 hours for 48 hours",
          "IM Lumefantrine given @3mg per kg per day",
          "Intravenous Artesunate 2.4 -3mg/kggiven @ 0. 12.24hr",
          "IV Quinine 5mg per kg every 8 hours for 72hours",
          "IM Anthemeter given at 1Omg per kg",
        ],
        answer: "Intravenous Artesunate 2.4 -3mg/kggiven @ 0. 12.24hr",
        reference: "",
      },
      {
        question: "During blood pressure measurement, patient should be",
        options: [
          "Relaxed, arm supported below the heart level and clothing removed from arm",
          "Relaxed, arm supported above the heart level and appropriate cuff size should be used.",
          "Relaxed, arm supported at heart level and appropriate cuff size should be used",
          "Blood pressure is usually recorded as diastolic over systolic pressure",
          "During inflation, the pressure at which the pulse is impalpable is the correct systolic pressure",
        ],
        answer:
          "Relaxed, arm supported at heart level and appropriate cuff size should be used",
        reference: "",
      },
      {
        question:
          "A 17yr old female presented with fast breathing, and evidence of left pleural effusion. Other findings suggestive of left pleural effusion will include all EXCEPT X.",
        options: [
          "Trachea may be deviated to the left",
          "Stony dull percussion note on the left lower lung zone",
          "Increased tactile fremitus on the affected side",
          "Chest wall movement may be decreased on affected side",
          "Breath sounds may be diminished on affected side",
        ],
        answer: "Trachea may be deviated to the left",
        reference: "",
      },
      {
        question:
          "A 4 year old male presented with 6 weeks of fever, multiple swellings in the neck and axillae. Findings on examination includes severe pallor, tachycardia, tachypnea and hepatosplenomegaly. In which of the following systems is the primary disease most likely to arise from?",
        options: [
          "Digestive system",
          "Haematologic system",
          "Immunologic system",
          "Cardiovascular",
          "Musculoskeletal system",
        ],
        answer: "Haematologic system",
        reference: "",
      },
    ],
    "Medicine M1": [
      {
        image: null,
        question: "All of the following are included in the bio data except",
        options: [
          "Age",
          "Occupation",
          "Residence",
          "Highest Education attained",
          "Race",
        ],
        answer: "Highest Education attained",
        reference: "",
      },
      {
        question:
          "In obtaining history of a patient with febrile illness, which of the following is considered least important?",
        options: [
          "Sexual history",
          "Drug and allergy history",
          "History of recent travel",
          "History of hypertension",
          "Source of drinking water",
        ],
        answer: "History of hypertension",
        reference: "",
      },
      {
        question: "Which of the following is not a component of social history",
        options: [
          "Cigarette smoking",
          "Alcohol use",
          "Allergy to pets",
          "Sexual history",
          "Household income",
        ],
        answer: "Allergy to pets",
        reference: "",
      },
      {
        question:
          "One of the following symptoms is most likely due to a gastro-intestinal disorder",
        options: [
          "Leg Swelling",
          "Epistaxis",
          "Hemoptysis",
          "Jaundice",
          "Fever",
        ],
        answer: "Jaundice",
        reference: "",
      },
      {
        question:
          "All these are included in the family and social history except",
        options: [
          "Type of Job",
          "Tobacco use",
          "History of hypertension",
          "Known family traditions",
          "History of asthma",
        ],
        answer: "Known family traditions",
        reference: "",
      },
    ],
    "Anatomy Test": [
      {
        image: null,
        question:
          "All structures lie behind the thoracic duct at the root of the neck  except:",
        options: [
          "Vertebral artery  and vein",
          "Carotid sheath",
          "Phrenic nerve",
          "Thyrocervical trunk and its branches",
        ],
        answer: "Carotid sheath",
        reference: "(1st test, Gross Anat, 2007)",
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
        reference: "(1st test, Gross Anat, 2007)",
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
        reference: "(1st test, Gross Anat, 2007)",
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
        reference: "(1st test, Gross Anat, 2007)",
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
        reference: "(1st test, Gross Anat, 2007)",
      },
    ],
    "Hematology Test": [
      {
        image: null,
        question: "In chronic myeloid leukaemia (CML)",
        options: [
          "There Is an extra short chromosome 9",
          "There is an extra long chromosome22",
          "The abnormal chromosome 22 is the Philadelphia chromosome",
          "There is reciprocal translocation between chromosome 8 and 22",
          "The reciprocal translocation between chromosomes 8 and 22 determines the treatment modality",
        ],
        answer: "The abnormal chromosome 22 is the Philadelphia chromosome",
        reference: "(2ND TEST, MBBS/BDS '024 SET)",
      },
      {
        question:
          "Which of the following investigations tests primary haemostasis",
        options: [
          "Whole blood clotting time",
          "Platelet count",
          "Activated partial thromboplastin time",
          "Mixing Studies",
          "Thrombin time test",
        ],
        answer: "Platelet count",
        reference: "(2ND TEST, MBBS/BDS '024 SET)",
      },
      {
        question:
          "Which of the following is the secondary haemostatic diagnostic test",
        options: [
          "PFA-100",
          "Prothrombin Time Test",
          "Factor VIll assay",
          "Bleeding time",
          "Full blood count",
        ],
        answer: "Prothrombin Time Test",
        reference: "(2ND TEST, MBBS/BDS '024 SET)",
      },
      {
        question: "About investigating Acute Lymphoblastic Leukaemia",
        options: [
          "CD10 positivity is important as it affects prognosis",
          "Bone marrow aspiration shows numerous reticulocytes",
          "Peripheral blood film shows numerous myeloblasts",
          "Full blood count shows thrombocythaemia",
          "Common chromosomal abnormality is t(4;8)",
        ],
        answer: "CD10 positivity is important as it affects prognosis",
        reference: "(2ND TEST, MBBS/BDS '024 SET)",
      },
      {
        question: "Acute Lymphoblastic Leukaemia (ALL)",
        options: [
          "Is a pathology of only B-lymphocytes",
          "is commoner in adults",
          "Is seen only among females",
          "CD 13 and CD 33 are routinely positive",
          "Bone marrow lymphoblasts are greater than 20%",
        ],
        answer: "Is seen only among females",
        reference: "(2ND TEST, MBBS/BDS '024 SET)",
      },
    ],
    "PLAB 1": [
      {
        image: null,
        question:
          "An 89 year old man has a basal cell carcinoma on his forehead which requires excision. He has dementia. The clinic nurse feels he is not competent to give consent for surgery. Which is the most appropriate action for obtaining consent?",
        options: [
          "Ask a psychiatrist to assess his cognitive function",
          "Ask his general practitioner to sign the consent form",
          "Ask his wife to sign the consent form",
          "Ask the patient to sign the consent form",
          "Ask the surgeon to assess his mental capacity",
        ],
        answer: "Ask the surgeon to assess his mental capacity",
        reference: "",
      },
      {
        question:
          "A 21 year old woman has increasing severe pain in her left leg. She had an undisplaced fracture of the midshaft of her left tibia 2 days ago which was treated conservatively with a plaster cast. Her toes are warm and pulses are present. Which is the most important immediate action?",
        options: [
          "Elevate the limb",
          "Refer to orthopaedics",
          "Remove the plaster cast",
          "Replace the cast with increased padding",
          "Re-X-ray the fracture site",
        ],
        answer: "Remove the plaster cast",
      },
      {
        question:
          "A 14 year old girl attends the GP surgery requesting the oral contraceptive pill (OCP). She is sexually active and her boyfriend is in the year above her at school. Her parents are unaware of the appointment and her request for OCP. Which is the most appropriate management?",
        options: [
          "Advise her about safe sex and prescribe the OCP",
          "Contact her parents",
          "Contact the local safeguarding team",
          "Contact the police",
          "Explain it is illegal to prescribe the OCP for her",
        ],
        answer: "Advise her about safe sex and prescribe the OCP",
      },
      {
        question:
          "A 22 year old man has a painful right eye for 1 day. He had similar symptoms 1 year ago. He has had episodic back pain and stiffness for 4 years which is relieved by exercise and ibuprofen. His right eye is red and his vision is blurred. Which is the most likely cause of his red eye?",
        options: [
          "Chorioretinitis",
          "Conjunctivitis",
          "Episcleritis",
          "Keratitis",
          "Uveitis",
        ],
        answer: "Uveitis",
      },
      {
        question:
          "A healthy boy is born by vaginal delivery at 40 weeks gestation. His mother had confirmed acute hepatitis B during this pregnancy. Which preventative intervention should be given immediately to the baby?",
        options: [
          "Confirm hepatitis B status of baby as first step",
          "Full course of hepatitis B vaccine",
          "Full course of hepatitis B vaccine and hepatitis B immunoglobulin",
          "Hepatitis B immunoglobulin",
          "Hepatitis B vaccine as a single dose",
        ],
        answer:
          "Full course of hepatitis B vaccine and hepatitis B immunoglobulin",
      },
    ],
    "USMLE step 1": [
      {
        question:
          "A 60-year-old man comes to the office because of weakness, tingling of his hands and feet, irritability, and forgetfulness for 4 months. Physical examination shows pallor, weakness, and spasticity. Deep tendon reflexes are increased. Sensation to vibration is absent in the lower extremities. Laboratory studies show megaloblastic anemia, serum antiparietal cell antibodies, and increased serum concentrations of methylmalonic acid and total homocyst(e)ine. The synthesis of which of the following amino acids is most likely impaired in this patient?",
        options: [
          "Cysteine",
          "Glutamine",
          "Methionine",
          "Phenylalanine",
          "Tyrosine",
        ],
        answer: "Methionine",
      },
      {
        question:
          "A 65-year-old woman comes to the office for a follow-up examination 1 year after she underwent operative resection of the right colon and chemotherapy for stage III colon cancer. She reports fatigue. Physical examination shows no abnormalities. A staging CT scan of the chest and abdomen shows five new 2- to 3-cm masses in the liver and both lungs. This patient's cancer most likely spread to the lungs via which of the following structures?",
        options: [
          "Inferior mesenteric vein",
          "Inferior vena cava",
          "Left colic vein",
          "Middle colic artery",
          "Pulmonary vein",
          "Superior mesenteric artery",
          "Superior vena cava",
        ],
        answer: "Inferior vena cava",
      },
      {
        question:
          "A 26-year-old man comes to the office because of a 1-week history of increased urinary frequency accompanied by excessive thirst. He says he has been urinating hourly. Physical examination shows no abnormalities. Serum chemistry studies are within the reference ranges. Urine osmolality is 50 mOsmol/kg H2O. After administration of ADH (vasopressin), his urine osmolality is within the reference range. The most likely cause of this patient's symptoms is dysfunction of which of the following structures?",
        options: [
          "Anterior pituitary gland",
          "Bowman capsule",
          "Glomerulus",
          "Hypophysial portal system",
          "Loop of Henle",
          "Supraoptic nucleus",
        ],
        answer: "Supraoptic nucleus",
      },
      {
        question:
          "A 52-year-old woman comes to the office because of a 6-month history of intermittent headaches. Sometimes the pain improves when the patient lies down in a quiet room. Her temperature is 37.5°C (99.5°F), pulse is 86/min, respirations are 16/min, and blood pressure is 154/100 mm Hg. The lungs are clear. Cardiac examination shows the point of maximal impulse displaced to the left and occasional skipped beats; there are no murmurs or rubs. There is no S3. Resting electrocardiography shows left axis deviation with R waves greater than 30 mm in leads V5 through V6. Which of the following processes best explains the development of the left ventricular abnormalities in this patient?",
        options: [
          "Excessive accumulation of glycogen",
          "Fibrosis of intraventricular conduction pathways",
          "Increased synthesis of contractile filaments",
          "Misfolding and aggregation of cytoskeletal proteins",
          "Myocyte hyperplasia as a result of induction of embryonic genes",
        ],
        answer: "Increased synthesis of contractile filaments",
      },
      {
        image: umsle_step1_5,
        question:
          "A 65-year-old woman with a history of rheumatic mitral valve disease is brought to the emergency department 30 minutes after the sudden onset of right-sided weakness and inability to speak. Neurologic examination shows weakness of the face and difficulty swallowing. Muscle strength is 3/5 on the right side. She can understand what is said to her, but she cannot repeat words or answer questions. An ECG shows atrial fibrillation. The most likely cause of the neurologic findings in this patient is occlusion of which of the following labeled arteries in the photograph of a normal brain?",
        options: ["A", "B", "C", "D", "E"],
        answer: "D",
        reference: "",
      },
    ],
  });

  const [answers, setAnswers] = useState<any[]>(Array(5));
  const [checked, setChecked] = useState<any>({});
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  const [timeRecord, setTimeRecord] = useState("");
  const navigate = useNavigate();
  const subject:
    | "Paediatrics Test"
    | "Medicine M1"
    | "Anatomy Test"
    | "Hematology Test"
    | "PLAB 1"
    | "USMLE step 1"
    | null = location.state.subject;
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
        {subject && Object.keys(QUESTIONS).includes(subject) ? (
          QUESTIONS[subject!].map((question, index) => {
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
                          className="flex px-4 disabled:bg-ash md:px-8 py-1 md:py-2 bg-orange text-[0.75rem] md:text-base text-white font-agrandir_bold rounded"
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
