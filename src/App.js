import React from "react";
import { useState, useEffect } from "react";
import Subject from "./Subject";
import AddSubjectName from "./AddSubjectName";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {useSwipeable} from 'react-swipeable'
export const App = () => {
  const [subjects, setSubjects] = useState([]);
  const [addFormDialog, setAddFormDialog] = useState(false);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const prevData = JSON.parse(localStorage.getItem("courses"));
    if (prevData) {
      setSubjects(prevData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(subjects));
  }, [subjects]);

  const handleClick = () => {
    setAddFormDialog(true);
  };
  const { ref: documentRef } = useSwipeable({
    onSwipedLeft: ({ dir, event }) => {
      setTab(1);
    },
    onSwipedRight: ({ dir, event }) => {
      setTab(0);
    },
    preventDefaultTouchmoveEvent: true
  });
  // attach swipeable to document
  useEffect(() => {
    documentRef(document);
  });
  return (
    <div>
      <div align="center">
      <h1 className="text-4xl text-current bg bg-blue-300">Bunker</h1>
      <div className="flex justify-center">
        <button
          className={`mx-2.5 my-1 ${
            !tab ? "border-b-2 border-blue-400" : "border-b-2"
          } `}
          onClick={() => setTab(0)}
        >
          Today
        </button>
        <button
          className={`mx-2.5 my-1 ${
            tab ? "border-b-2 border-blue-400" : "border-b-2"
          }`}
          onClick={() => setTab(1)}
        >
          All Subject
        </button>
      </div>
      <Subject
        subjects={subjects}
        setSubjects={setSubjects}
        setAddFormDialog={setAddFormDialog}
        tab={tab}
      />
      <div className="fixed bottom-3 right-3">
        <Fab aria-label="add" color="success" onClick={handleClick}>
          <AddIcon />
        </Fab>
      </div>
      {addFormDialog ? (
        <AddSubjectName
          setAddFormDialog={setAddFormDialog}
          setSubjects={setSubjects}
        />
      ) : null}
    </div>
    </div>
  );
};

export default App;
