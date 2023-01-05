import React from "react";
import { MdDeleteForever } from "react-icons/md";

const SubjectCard = (props) => {
  const { subjectName, present, total } = props.subject;
  const { id, setSubjects } = props;
  let percentage = 0;
  let skip = 0;
  if (total !== 0) {
    percentage = (present / total) * 100;
    percentage = percentage.toFixed(2);
  }
  const calculateSkip = (p, t) => {
    let temp = 4 * p - 3 * t;
    temp /= 3;
    temp = Math.floor(temp);
    return temp < 0 ? 0 : temp;
  };
  skip = calculateSkip(present, total);
  function updateAttandence(present, key) {
    setSubjects((oldSubjects) => {
      return oldSubjects.map((subject, index) => {
        if (key === index) {
          const newPresent = subject.present + present;
          const newTotal = subject.total + 1;
          return { ...subject, present: newPresent, total: newTotal };
        }
        return subject;
      });
    });
  }

  const handleDelete = () => {
      setSubjects((oldSubjects) =>
      // eslint-disable-next-line
      oldSubjects.filter((subject, index) => {
        if (index !== id) return subject;
      })
    );
  };

  return (
    <>
      <h1>{subjectName}</h1>
      <p>
        {present}/{total} {percentage}%
      </p>
      <button onClick={() => updateAttandence(1, id)}>present</button>
      <button onClick={() => updateAttandence(0, id)}>absent</button>
      <button onClick={handleDelete}>
        {" "}
        <MdDeleteForever />{" "}
      </button>
      {skip ? (
        <p> You can skip next {skip} class </p>
      ) : (
        <p> You can't skip next class </p>
      )}
    </>
  );
};

export default SubjectCard;
