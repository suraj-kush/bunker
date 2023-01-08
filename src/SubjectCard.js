import React from "react";
import { RxCross2 } from "react-icons/rx";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {MdOutlineDone} from 'react-icons/md';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const SubjectCard = (props) => {
  const { subjectName, present, total } = props.subject;
  // eslint-disable-next-line
  const { id, setSubjects, setAddSubject } = props;
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
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // setAddSubject(true);
    setAnchorEl(null);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className="relative w-96">
    <Card sx={{m: 2, p: 0.5, textAlign: "center", height: 140, borderRadius: "8px"}} elevation={3}>
      <h1 style={{margin: "0px", fontSize: "26px", display: "inline-block"}}>{subjectName}</h1>
      <div className="absolute top-0 right-1">
      <IconButton onClick={handleMenuClick}>
      <MoreVertIcon />
      </IconButton>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem id="edit" onClick={handleEdit}>Edit Name</MenuItem>
        <MenuItem id="undo" onClick={handleMenuClose}>Undo</MenuItem>
        <MenuItem id="delete" onClick={handleDelete}>Delete</MenuItem>
      </Menu>
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
    </div>
  );
};

export default SubjectCard;
