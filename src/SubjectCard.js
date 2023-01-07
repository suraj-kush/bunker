import React from "react";
import { RxCross2 } from "react-icons/rx";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {MdOutlineDone} from 'react-icons/md';

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
    <Card sx={{m: 2, p: 0.5, textAlign: "center", maxWidth: 300, width: "90vw", height: 140, borderRadius: "8px"}} elevation={3}>
      <div>
      <h1 style={{margin: "0px", fontSize: "26px"}}>{subjectName}</h1>
      </div>
     <div>
     <Stack justifyContent="space-evenly" direction="row" sx={{mb:1, fontWeight: 600}}>
        <span style={{minWidth: "64px"}} >{present}/{total}</span> 
        <span style={{minWidth: "64px"}} >{percentage}%</span>
      </Stack>
     </div>
      <div>
      <Stack justifyContent="space-evenly" direction="row">
      <Button variant="contained" onClick={() => updateAttandence(1, id)}> <MdOutlineDone/> </Button>
      <Button variant="contained" color="error" onClick={() => updateAttandence(0, id)}> <RxCross2/> </Button>
      </Stack>
      </div>
      <div>
      {skip ? (
        <p style={{marginTop: "6px", color: "green"}}> You can skip next {skip} class </p>
      ) : (
        <p style={{marginTop: "6px", color: "red"}}> You can't skip next class </p>
      )}
      </div>
    </Card>
  );
};

export default SubjectCard;
