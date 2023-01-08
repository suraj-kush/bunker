import React from 'react'
import { useState,useEffect } from 'react'
import Subject from './Subject'
import AddSubjectName from './AddSubjectName';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export const App = () => {

  const [subjects, setSubjects]  = useState([]);
  const [addFormDialog, setAddFormDialog] = useState(false);

  useEffect(() => {
    const prevData = JSON.parse(localStorage.getItem('courses'));
    if (prevData) {
     setSubjects(prevData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(subjects));
  }, [subjects]);

  const handleClick = () => {
    setAddFormDialog(true);
  }

  return (
    <div align="center">
    <h1 className='text-4xl text-current bg bg-blue-300'>Bunker</h1>
    <Subject subjects={subjects} setSubjects={setSubjects} setAddFormDialog={setAddFormDialog} />
    <div className='fixed bottom-3 right-3'>
      <Fab aria-label='add' color='success' onClick={handleClick}>
        <AddIcon/>
      </Fab>
    </div>
    { addFormDialog ? <AddSubjectName setAddFormDialog={setAddFormDialog} setSubjects={setSubjects} /> : null }
    </div>
  )
}

  export default App;