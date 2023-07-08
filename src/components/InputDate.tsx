import { IonDatetime } from "@ionic/react";
import Input from "./Input";
import { IonItem, IonLabel, IonIcon, IonInput } from "@ionic/react";
import { ChangeEventHandler, createRef, useEffect, useState } from "react";
import {
  eyeOutline,
  eyeOffOutline,
  calendarClearOutline,
} from "ionicons/icons";
import { TextFieldTypes } from "types/elements";
import { formatDate } from "helpers/date";
import useOutsideClick from "@/hooks/useOutsideClick";

interface InputDateProps {
  label?: string;
  name?: string;
  required?: boolean;
  value?: string | null;
  tabIndex?: number;
  type?: string;
  autoComplete?: string;
  klassInput?: string;
  klassCalendar?: string;
  readOnly?: boolean;
  onChange?: (value: Date, key?: string) => void;
  placeholder?: string;
  presentation?:
    | "date-time"
    | "time-date"
    | "date"
    | "time"
    | "month"
    | "year"
    | "month-year";
}

const InputDate: React.FC<InputDateProps> = ({
  name,
  label,
  required,
  value,
  type,
  autoComplete,
  klassInput = "w-full",
  klassCalendar,
  onChange,
  readOnly,
  placeholder = "dd/mm/yyyy",
  presentation = "date",
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [format, setFormat] = useState("");
  const ref = createRef<HTMLDivElement>();

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {}, []);

  return (
    <div ref={ref} className="w-full md:relative block custom-input-datetime">
      <div className="w-full relative mt-4">
        <label
          className={`text-sm ${isFocus ? " text-primary" : ""}`}
          htmlFor={name}
        >
          {label}
        </label>
        <div
          onClick={(e) => setIsOpen(!isOpen)}
          className={` md:w-full w-full  items-center flex box-border p-4 gap-2 mt-1 input rounded-[4px] ${
            isFocus ? "border-primary border-[1px]" : "border-gray border-[1px]"
          }`}
        >
          <IonIcon
            className="text-xl text-[#b3afaf]"
            icon={calendarClearOutline}
          />
          <input
            autoComplete={autoComplete}
            className={`border-transparent hover:cursor-pointer w-full font-avenir text-[14px] focus:border-transparent outline-none rounded bg-transparent`}
            type={type}
            name={name}
            value={format}
            placeholder={placeholder}
            onFocus={(e) => {
              setIsFocus(true);
            }}
            onBlur={(e) => {
              setIsFocus(false);
            }}
            required
            readOnly
          />
        </div>
      </div>
      {isOpen && (
        <div
          role="menu"
          className={`calendar ease-in-out mt-1 p-2 z-10 bg-white flex  md:w-content w-full absolute origin-top-rightborder border-gray-100 rounded-md shadow-lg ${klassCalendar}`}
          onMouseLeave={(e) => setIsOpen(false)}
        >
          <IonDatetime
            value={value}
            className="w-full"
            onIonChange={(e: any) => {
              const date = new Date(e.detail.value);
              setFormat(date?.toLocaleDateString("es"));
              onChange && onChange(e?.detail?.value, name);
              setIsOpen(false);
            }}
            presentation={presentation}
            mode="md"
            size="cover"
          />
        </div>
      )}
    </div>
  );
};

export default InputDate;
