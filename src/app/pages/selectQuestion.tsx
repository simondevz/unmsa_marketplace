import { useState } from "react";
import CustomSelect from "../components/customSelect";
import { useNavigate } from "react-router-dom";
import { ConfigType } from "../types/cbtTypes";

export default function SelectQuestionPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState(0);
  const [selectedValue, setSelectedValue] = useState<ConfigType>({});

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
        show={show}
        setShow={setShow}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        list={[
          "USMLE step 1",
          "USMLE step 2",
          "USMLE step 3",
          "PLAB 1",
          "PLAB 2",
          "MBBS",
        ]}
        showRedirect
      />
      <CustomSelect
        placeholder="Select level..."
        name="level"
        id={2}
        show={show}
        setShow={setShow}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        list={["2nd MBBS", "3rd MBBS", "4th MBBS", "5th MBBS"]}
        showRedirect={false}
      />
      <CustomSelect
        placeholder="Select a subject..."
        name="subject"
        id={3}
        show={show}
        setShow={setShow}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        list={["Anatomy", "BIC", "Physiology"]}
        showRedirect
      />
      <button
        onClick={() => {
          if (
            selectedValue?.degree &&
            selectedValue?.level &&
            selectedValue?.subject
          )
            navigate("test", { state: { config: selectedValue } });
        }}
        className="bg-light_green px-4 md:px-8 py-2 md:py-3 mx-auto md:text-base text-[0.75rem] font-agrandir_bold text-white rounded-md md:rounded-lg"
      >
        Start test
      </button>
    </div>
  );
}
