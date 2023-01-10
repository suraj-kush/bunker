import React from "react";

export default function DaySelector(props) {
  const {days, setDays} = props;

  function handleDayClick(id) {
    setDays((oldDays) => {
      return oldDays.map((day, index) => {
        if (id === index) return [day[0], !day[1]];
        return day;
      });
    });
  }
  return (
    <div className="flex flex-row justify-between mt-3">
      {days.map((day, index) => {
        let key = index + 37;
        return (
          <div
            key={key}
            className={`${day[1] ? "bg-emerald-300" : "bg-slate-200"} w-8 text-center rounded-full`}
            onClick={() => handleDayClick(index)}
          >
            <span>{day[0]}</span>
          </div>
        );
      })}
    </div>
  );
}

