import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditSubjectName from "./EditSubjectName";

const SubjectCard = (props) => {
  const { subjectName, present, total } = props.subject;
  const { id, setSubjects, subject } = props;

  const [EditFormDialog, setEditFormDialog] = useState(false);

  let percentage = 0;
  let skip = 0;
  if (total !== 0) {
    percentage = (present / total) * 100;
    percentage = percentage.toFixed(2);
  }
  const calculateSkip = () => {
    let temp = 4 * present - 3 * total;
    temp /= 3;
    temp = Math.floor(temp);
    skip = temp < 0 ? 0 : temp;
  };
  calculateSkip();

  function updateAttandence(changePresent, changeTotal) {
    setSubjects((oldSubjects) => {
      return oldSubjects.map((subject, index) => {
        if (id === index) {
          let newPresent = subject.present + changePresent;
          if (newPresent < 0) newPresent = 0;
          let newTotal = subject.total + changeTotal;
          if (newTotal < newPresent) newTotal = newPresent;

          const d = new Date();
          let todayDate = d.getDate();
          return { ...subject, present: newPresent, total: newTotal, date: todayDate };
        }
        return subject;
      });
    });
    handleMenuClose();
  }

  const handleDelete = () => {
    setSubjects((oldSubjects) =>
      // eslint-disable-next-line
      oldSubjects.filter((subject, index) => {
        if (index !== id) return subject;
      })
    );
    handleMenuClose();
  };

  const handleEdit = () => {
    setEditFormDialog(true);
    handleMenuClose();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="relative w-11/12 max-w-md">
      <div>
        {EditFormDialog ? (
          <EditSubjectName
            setEditFormDialog={setEditFormDialog}
            setSubjects={setSubjects}
            singleSubject={subject}
            id={id}
          />
        ) : null}
      </div>
      <Card
        sx={{
          m: 2,
          p: 0.5,
          textAlign: "center",
          height: 140,
          borderRadius: "8px",
          backgroundColor: "rgb(236 254 255)",
        }}
        elevation={3}
      >
        <h1
          style={{ margin: "0px", fontSize: "26px", display: "inline-block" }}
        >
          {subjectName}
        </h1>
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
          <MenuItem id="edit" onClick={handleEdit}>
            Edit
          </MenuItem>
          <MenuItem id="undo" onClick={() => updateAttandence(-1, -1)}>
            Undo Present
          </MenuItem>
          <MenuItem id="undo" onClick={() => updateAttandence(0, -1)}>
            Undo Absent
          </MenuItem>
          <MenuItem id="delete" onClick={handleDelete} style={{ color: "red" }}>
            Delete
          </MenuItem>
        </Menu>
        <div></div>
        <div>
          <Stack
            justifyContent="space-evenly"
            direction="row"
            sx={{ mb: 1, fontWeight: 600 }}
          >
            <span style={{ minWidth: "64px" }}>
              {present}/{total}
            </span>
            <span style={{ minWidth: "64px" }}>{percentage}%</span>
          </Stack>
        </div>
        <div>
          <Stack justifyContent="space-evenly" direction="row">
            <Button variant="contained" onClick={() => updateAttandence(1, 1)}>
              {" "}
              P{" "}
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => updateAttandence(0, 0)}
            >
              {" "}
              C{" "}
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => updateAttandence(0, 1)}
            >
              {" "}
              A{" "}
            </Button>
          </Stack>
        </div>

        <div>
          {skip ? (
            <p style={{ marginTop: "6px", color: "green" }}>
              {" "}
              You can skip next {skip} class{" "}
            </p>
          ) : (
            <p style={{ marginTop: "6px", color: "red" }}>
              {" "}
              You can't skip next class{" "}
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default SubjectCard;
