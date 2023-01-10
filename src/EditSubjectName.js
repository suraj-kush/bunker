import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import DaySelector from "./DaySelector";

export default function EditSubjectName(props) {
  const { setSubjects, setEditFormDialog, singleSubject, id } = props;
  let initialSubjectName = singleSubject.subjectName;

  const [subject, setSubject] = useState(initialSubjectName);
  let prevArr = singleSubject.daysArr || [
    ["M", false],
    ["T", false],
    ["W", false],
    ["Th", false],
    ["F", false],
  ];

  const [days, setDays] = useState(prevArr);

  function handleChange(event) {
    setSubject(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    if (subject === "") return;
    setSubjects((subjectArray) =>
      subjectArray.map((subjectEle, index) => {
        if (id === index)
          return {
            ...subjectEle,
            subjectName: subject,
            daysArr: days,
          };

        return subjectEle;
      })
    );
    setSubject("");
    setEditFormDialog(false);
  }

  return (
    <Dialog
      open={true}
      onClose={() => setEditFormDialog(false)}
      style={{ minWidth: "90vw" }}
    >
      <Card sx={{ maxWidth: 300, width: "90vw", height: 122, padding: 2 }}>
        <TextField
          fullWidth
          onChange={handleChange}
          name="subjectName"
          variant="standard"
          value={subject}
          placeholder="Subject Name"
          autoComplete="off"
        ></TextField>
        <DaySelector days={days} setDays={setDays} />
        <div className="absolute right-0">
          <Button variant="text" onClick={handleClick}>
            Update
          </Button>
        </div>
      </Card>
    </Dialog>
  );
}
