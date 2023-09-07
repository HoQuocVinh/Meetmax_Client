import { useEffect } from "react";
import { months } from "../../data/static/arrayCalendar";

type TagMonthProps = {
  selectedMonth: number | null;
  selectedYear: number | null;
  setCurrYear: React.Dispatch<React.SetStateAction<number>>;
  setCurrMonth: React.Dispatch<React.SetStateAction<number>>;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TagMonthYear: React.FC<TagMonthProps> = ({
  setCurrMonth,
  setCurrYear,
  setSelectedMonth,
  setSelectedYear,
  setIsShow,
  selectedMonth,
  selectedYear,
  isShow,
}) => {
  const handleLiClick = (e: Event) => {
    const month = (e.target as HTMLElement).dataset.month;
    const year = (e.target as HTMLElement).dataset.year;

    if (month) {
      setCurrMonth(months.indexOf(month));
      setSelectedMonth(months.indexOf(month));
    }

    if (year) {
      setCurrYear(parseInt(year));
      setSelectedYear(parseInt(year));
    }
    setIsShow(!isShow);
  };

  useEffect(() => {
    const yearCurr = new Date().getFullYear();

    const renderListYear = () => {
      const listYear = document.querySelector(".list__year");
      if (listYear) {
        let liTag = "";

        for (let year = yearCurr - 120; year <= yearCurr; year++) {
          for (let month = 0; month < months.length; month++) {
            let isActive =
              selectedMonth === month &&
              selectedYear === year &&
              "bg-ct-blue bg-opacity-20 !text-ct-blue";
            liTag += `<li class="list__month-item ${isActive} text-left select-none cursor-pointer hover:bg-ct-blue hover:bg-opacity-20 hover:!text-ct-blue w-full pl-5 !font-normal" data-month="${months[month]}" data-year="${year}">${months[month]} ${year}</li>`;
          }
        }
        listYear.innerHTML = liTag;
        listYear.addEventListener("click", handleLiClick);
      }
    };
    renderListYear();

    const selectedYearElement = document.querySelector(
      `[data-year="${selectedYear}"]`
    );

    if (selectedYearElement) {
      selectedYearElement.scrollIntoView({
        block: "start",
        inline: "nearest",
      });
    }
  }, [
    setCurrMonth,
    setCurrYear,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    setIsShow,
    isShow,
  ]);

  return (
    <div>
      <ul className="list__year block h-96 w-52 overflow-auto rounded-md bg-white py-4 shadow-lg"></ul>
    </div>
  );
};
