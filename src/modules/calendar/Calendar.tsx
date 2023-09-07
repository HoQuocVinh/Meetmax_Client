import { useEffect, useRef, useState } from "react";
import { useWatch } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";
import Button from "~/components/button/Button";
import { TagMonthYear } from "./TagMonthYear";
import { dayOfWeeks, months } from "../../data/static/arrayCalendar";
import { CalendarProps } from "~/interface/AuthInterface";

const Calendar: React.FC<CalendarProps> = ({
  name,
  control,
  handleSave,
  handleCancel,
  setValue,
  defaultDate,
  setSelectedDate,
}) => {
  const date = defaultDate || new Date();
  const [activeDay, setActiveDay] = useState(date.getDate());
  const [currDate, setCurrDate] = useState<number>(date.getDate());
  const [currYear, setCurrYear] = useState<number>(date.getFullYear());
  const [currMonth, setCurrMonth] = useState<number>(date.getMonth());
  const [selectedMonth, setSelectedMonth] = useState<number>(date.getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(date.getFullYear());
  const [isShow, setIsShow] = useState<boolean>(false);
  const refDiv = useRef<HTMLDivElement>(null);

  const calendar = useWatch({
    control,
    name,
    defaultValue: "",
  });

  useEffect(() => {
    const currentDate = document.querySelector(".current__date") as HTMLElement,
      currentMonthYear = document.querySelector(
        ".current__month-year"
      ) as HTMLElement,
      daysTag = document.querySelector(".days");

    const handleLiClick = (event: Event) => {
      const day = (event.target as HTMLElement).dataset.day;
      if (day) {
        setActiveDay(parseInt(day));
        setCurrDate(parseInt(day));
        setIsShow(false);
        setSelectedDate(new Date(currYear, currMonth, parseInt(day)));
      }
    };

    //* Getting new date, current year and month
    const renderCalendar = () => {
      let firstDateofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(
          currYear,
          currMonth,
          lastDateofMonth
        ).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(),
        liTag = "";

      for (let i = firstDateofMonth; i > 0; i--) {
        liTag += `<li class = "inactive">${lastDateofLastMonth - i + 1}</li>`;
      }

      for (let i = 1; i <= lastDateofMonth; i++) {
        let isActive = i === activeDay && "active";
        liTag += `<li class="${isActive}" data-day="${i}">${i}</li>`;
      }

      for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class = "inactive">${i - lastDayofMonth + 1}</li>`;
      }

      currentDate &&
        (currentDate.innerText = `${currDate}/${currMonth + 1}/${currYear}`);

      currentMonthYear &&
        (currentMonthYear.innerText = `${months[currMonth]} ${currYear}`);

      daysTag && (daysTag.innerHTML = liTag);
      daysTag?.addEventListener("click", handleLiClick);
      setValue(name, currentDate?.innerText);
    };
    renderCalendar();
  }, [
    activeDay,
    currDate,
    currMonth,
    currYear,
    name,
    setSelectedDate,
    setValue,
  ]);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (event.target.matches("div")) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="w-80 select-none bg-white shadow">
      <header className="flex items-center justify-between px-5 pt-3 text-ct-gray">
        <p className="current__date"></p>
        <div className="list__month relative">
          <div
            className="icons flex cursor-pointer items-center gap-2"
            ref={refDiv}
            onClick={() => setIsShow(!isShow)}
          >
            <span className="current__month-year"></span>
            <span>
              <FiChevronDown className="h-6 w-6 " />
            </span>
          </div>
          {isShow && (
            <div className="list__month-content">
              <TagMonthYear
                setCurrYear={setCurrYear}
                setCurrMonth={setCurrMonth}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                isShow={isShow}
                setIsShow={setIsShow}
              />
            </div>
          )}
        </div>
      </header>
      <hr className="mt-2 border-[0.5] border-ct-gray border-opacity-20" />
      <div className="calendar mt-3 px-5 pb-5">
        <ul className="weeks">
          {dayOfWeeks.map((dayOfWeek: string, index: number) => (
            <li key={index}>{dayOfWeek}</li>
          ))}
        </ul>
        <ul className="days"></ul>
        <div className="mt-2.5 flex items-center justify-end">
          <Button.Auth text onClick={handleSave}>
            Cancel
          </Button.Auth>
          <Button.Auth onClick={handleCancel}>Save</Button.Auth>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
