import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CustomSelect({
  placeholder,
  name,
  exams,
  id,
  showRedirect,
  setShow,
  show,
  display,
  setDisplay,
  selectedValue,
  setSelectedValue,
}: {
  placeholder: string;
  exams: any;
  name: string;
  showRedirect: boolean;
  id: number;
  show: number;
  display: number;
  setDisplay: React.Dispatch<React.SetStateAction<number>>;
  selectedValue: any;
  setShow: React.Dispatch<React.SetStateAction<number>>;
  setSelectedValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [displayString, setDisplayString] = useState("");
  const isObjectEmpty = (objectName: any) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  const list: string[] = (() => {
    if (display === 1) {
      if (Array.isArray(exams)) return exams;
      return Object.keys(exams);
    }

    if (isObjectEmpty(selectedValue)) {
      if (Array.isArray(exams)) return exams;
      return Object.keys(exams);
    }

    if (Array.isArray(selectedValue["select" + (display - 1)]))
      return selectedValue["select" + (display - 1)];
    return Object.keys(selectedValue["select" + (display - 1)]);
  })();
  console.log(selectedValue);

  useEffect(() => {
    if (display < id) setDisplayString("");
  }, [display, id]);

  return (
    <div
      className={
        (display < id ? "hidden " : " flex ") +
        " relative shadow-md shadow-dark_ash/50 w-60 md:w-[40rem] mx-auto rounded-md"
      }
    >
      <button
        onClick={() => {
          if (show === id) setShow(0);
          if (show !== id) setShow(id);
          setDisplay(id);
        }}
        className="flex w-full justify-between p-2 md:text-base text-[0.75rem] md:p-4 font-agrandir_bold"
      >
        {displayString ? (
          <span className="flex my-auto">{displayString}</span>
        ) : (
          <span className="text-ash/50 flex my-auto">{placeholder}</span>
        )}
        <span className="flex my-auto">
          <FaChevronDown />
        </span>
      </button>

      <ul
        className={
          (show === id ? "flex " : "hidden ") +
          " absolute bg-white rounded-b-lg top-[2.25rem] md:top-[4rem] flex flex-col z-50 w-full font-agrandir_bold text-[0.5rem] md:text-[0.875rem] shadow-lg "
        }
      >
        {list.map((value: string, index: number) => {
          return (
            <li
              onClick={() => {
                if (Array.isArray(selectedValue["select" + (id - 1)])) {
                  setSelectedValue({
                    ...selectedValue,
                    list: [...selectedValue.list, value],
                    ["select" + id]: value,
                  });
                } else {
                  if (id === 1) {
                    setSelectedValue({
                      ...selectedValue,
                      list: [...selectedValue.list, value],
                      ["select" + id]: exams[value],
                    });
                  } else {
                    setSelectedValue({
                      ...selectedValue,
                      list: [...selectedValue.list, value],
                      ["select" + id]:
                        selectedValue["select" + (id - 1)][value],
                    });
                  }
                  setDisplay(id + 1);
                }
                setShow(0);
                setDisplayString(value);
              }}
              className="md:px-4 px-2 py-2 md:py-3 border-b border-dark_ash"
              key={index}
            >
              {value}
            </li>
          );
        })}
        {showRedirect && (
          <li className="md:px-4 px-2 py-2 md:py-3 text-darker_lemon">
            <Link className="flex w-full mx-auto" to={"#"}>
              Log In to official website to access more subjects
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
