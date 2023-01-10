import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import DaySelector from "./DaySelector";

export default function AddSubjectName(props) {
  const { setAddFormDialog, setSubjects } = props;

  //
  const [subject, setSubject] = useState("");
  const [days, setDays] = useState([
    ["M", false],
    ["T", false],
    ["W", false],
    ["Th", false],
    ["F", false],
  ]);

  function handleChange(event) {
    setSubject(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    if (subject === "") return;
    const newSubject = {
      subjectName: subject,
      present: 0,
      total: 0,
      daysArr: days,
    };
    console.log(newSubject);
    setSubjects((oldSubjects) => [...oldSubjects, newSubject]);
    setSubject("");
    setAddFormDialog(false);
  }

  return (
    <Dialog
      open={true}
      onClose={() => setAddFormDialog(false)}
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
        <div className="absolute right-0 bottom-0">
          <Button variant="text" onClick={handleClick}>
            Add
          </Button>
        </div>
      </Card>
    </Dialog>
  );
}
