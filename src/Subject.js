import React from "react";
import SubjectCard from "./SubjectCard";

const Subject = (props) => {
  const { subjects, setSubjects, setAddSubject, tab } = props;
  const d = new Date();
  let day = d.getDay();
  let dayNumber = day - 1;
  return (
    <div>
      {subjects.map((subject, index) => {
        if (tab)
          return (
            <SubjectCard
              key={index}
              id={index}
              subject={subject}
              setSubjects={setSubjects}
              setAddSubject={setAddSubject}
            />
          );
        else {
          let { daysArr, date } = subject;

          if (!daysArr) return null;
          if (!date) date = -1;

          const d = new Date();
          let todayDate = d.getDate();

          return daysArr.map((day, ind) => {
            if (ind === dayNumber && day[1] === true && todayDate !== date)
              return (
                <SubjectCard
                  key={index}
                  id={index}
                  subject={subject}
                  setSubjects={setSubjects}
                  setAddSubject={setAddSubject}
                />
              );
            else return null;
          });
        }
      })}
    </div>
  );
};

export default Subject;
