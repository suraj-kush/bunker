import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card'

export default function FormDialog(props) {
  const {setAddSubject, setSubjects} = props;

  const [subject, setSubject] = useState("");

    function handleChange(event){
        setSubject(event.target.value);
    }
    function handleClick(event){
        event.preventDefault();
        if(subject==='') return;
        const newSubject = {
            subjectName: subject,
            present: 0,
            total: 0
          }
        setSubjects(oldSubjects => [...oldSubjects, newSubject]);
        setSubject('');
        setAddSubject(false);
    }

  return (

      <Dialog open={true} onClose={() => setAddSubject(false)} style={{minWidth:"90vw"}}>
         <Card sx={{maxWidth: 300, width: "90vw", height: 85, padding: 2}}>
          <TextField
          fullWidth
          onChange={handleChange}
          name="subjectName"
          variant='standard'
          value={subject}
          placeholder="Subject Name"
          autoComplete="off"
          >
          </TextField>
          <div className='absolute right-0'>
          <Button variant="text" onClick={handleClick}>Add</Button>
          </div>
         </Card>
      </Dialog>
  );
}