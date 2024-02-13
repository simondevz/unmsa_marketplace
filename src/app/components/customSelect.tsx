import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CustomSelect({
  placeholder,
  name,
  list,
  id,
  showRedirect,
  setShow,
  show,
  selectedValue,
  setSelectedValue,
}: {
  placeholder: string;
  list: string[];
  name: string;
  showRedirect: boolean;
  id: number;
  show: number;
  selectedValue: any;
  setShow: React.Dispatch<React.SetStateAction<number>>;
  setSelectedValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="flex relative shadow-md shadow-dark_ash/50 w-[40rem] mx-auto rounded-md">
      <button
        onClick={() => {
          if (show === id) setShow(0);
          if (show !== id) setShow(id);
        }}
        className="flex w-full justify-between p-4 font-agrandir_bold"
      >
        {selectedValue[name] ? (
          <span className="flex my-auto">{selectedValue[name]}</span>
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
          " absolute bg-white rounded-b-lg top-[4rem] flex flex-col z-50 w-full font-agrandir_bold text-[0.875rem] shadow-lg "
        }
      >
        {list.map((value, index) => {
          return (
            <li
              onClick={() => {
                setSelectedValue({ ...selectedValue, [name]: value });
                setShow(0);
              }}
              className="px-4 py-3 border-b border-dark_ash"
              key={index}
            >
              {value}
            </li>
          );
        })}
        {showRedirect && (
          <li className="px-4 py-3 text-darker_lemon">
            <Link className="flex w-full mx-auto" to={"#"}>
              Log In to official website to access more subjects
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
