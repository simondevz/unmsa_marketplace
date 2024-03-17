import { useState } from "react";
import CustomSelect from "../../components/customSelect";
import { useNavigate } from "react-router-dom";

export default function SelectQuestionPage() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState<number>(1);
  const [show, setShow] = useState(0);

  const [selectedValue, setSelectedValue] = useState<any>({ list: [] });
  const exams = {
    PLAB: ["PLAB 1", "PLAB 2"],
    USMLE: ["USMLE step 1", "USMLE step 2", "USMLE step 3"],
    MBBS: {
      "2nd MBBS": {
        Anatomy: ["Test", "Mock", "Exam"],
        Biochemistry: ["Test", "Mock", "Exam"],
        Physiology: ["Test", "Mock", "Exam"],
      },
      "3rd MBBS": {
        Pathology: {
          "Morbid Anatomy": ["Test", "Mock", "Exam"],
          "Chemical Pathology": ["Test", "Mock", "Exam"],
          Microbiology: ["Test", "Mock", "Exam"],
          Hematology: ["Test", "Mock", "Exam"],
        },
        Pharmacology: ["Test", "Mock", "Exam"],
      },
      "4th MBBS": {
        Paediatrics: ["Test", "Mock", "Exam"],
        "Obstetrics and Gynecology": ["Test", "Mock", "Exam"],
      },
      "5th MBBS": {
        Medicine: ["M1", "M2", "M3", "M4", "Mock", "Exam"],
        Surgery: ["S1", "S2", "S3", "S4", "Mock", "Exam"],
      },
    },
  };

  return (
    <div className="flex flex-col justify-center gap-2 md:gap-4 mt-2 md:mt-4 mb-4 md:mb-10">
      <div className="flex flex-col justify-center">
        <span className="flex mx-auto font-agrandir_bold text-[0.875rem] md:text-[1.2rem]">
          Choose a Subject
        </span>
        <span className="flex mx-auto md:text-base text-[0.75rem] font-agrandir">
          Duration: 8 minutes
        </span>
      </div>
      <CustomSelect
        placeholder="Select degree type..."
        name="degree"
        id={1}
        display={display}
        setDisplay={setDisplay}
        show={show}
        setShow={setShow}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        exams={exams}
        showRedirect
      />
      <CustomSelect
        placeholder="Select level..."
        name="level"
        id={2}
        show={show}
        display={display}
        setDisplay={setDisplay}
        setShow={setShow}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        exams={exams}
        showRedirect={false}
      />
      <CustomSelect
        placeholder="Select a subject..."
        name="subject"
        id={3}
        display={display}
        setDisplay={setDisplay}
        show={show}
        setShow={setShow}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        exams={exams}
        showRedirect
      />
      <CustomSelect
        placeholder="Select a subject..."
        name="subject"
        id={4}
        display={display}
        setDisplay={setDisplay}
        show={show}
        setShow={setShow}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        exams={exams}
        showRedirect
      />
      <CustomSelect
        placeholder="Select a subject..."
        name="subject"
        id={5}
        display={display}
        setDisplay={setDisplay}
        show={show}
        setShow={setShow}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        exams={exams}
        showRedirect
      />

      <button
        disabled={(() => {
          const { list }: { list: string[] } = selectedValue;
          if (list?.length < 2) return true;
          if (list?.length > 1) {
            if (
              list[list.length - 1].includes("USMLE") ||
              list[list.length - 1].includes("PLAB") ||
              list[list.length - 1].includes("Test") ||
              list[list.length - 1].includes("Mock") ||
              list[list.length - 1].includes("Exam") ||
              list[list.length - 1].includes("M1") ||
              list[list.length - 1].includes("M2") ||
              list[list.length - 1].includes("M3") ||
              list[list.length - 1].includes("M4") ||
              list[list.length - 1].includes("S1") ||
              list[list.length - 1].includes("S2") ||
              list[list.length - 1].includes("S3") ||
              list[list.length - 1].includes("S4")
            )
              return false;
            return true;
          }
        })()}
        onClick={() => {
          navigate("test", {
            state: {
              subject: (() => {
                if (selectedValue?.list?.length === 2)
                  return selectedValue.list[1];
                return `${
                  selectedValue.list[selectedValue?.list?.length - 2]
                } ${selectedValue.list[selectedValue?.list?.length - 1]}`;
              })(),
            },
          });
        }}
        className="bg-light_green disabled:bg-ash px-4 md:px-8 py-2 md:py-3 mx-auto md:text-base text-[0.75rem] font-agrandir_bold text-white rounded-md md:rounded-lg"
      >
        Start test
      </button>
    </div>
  );
}
