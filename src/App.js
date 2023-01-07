import React from 'react'
import { useState,useEffect } from 'react'
import Subject from './Subject'
import FormDialog from './FormDialog';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export const App = () => {

  const [subjects, setSubjects]  = useState([]);
  const [addSubject, setAddSubject] = useState(false);

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
    setAddSubject(true);
  }

  return (
    <div align="center">
    <h1 className='text-4xl text-current'>Bunker</h1>
    <Subject subjects={subjects} setSubjects={setSubjects} setAddSubject={setAddSubject} />
    <div className='fixed bottom-3 right-3'>
      <Fab aria-label='add' color='success' onClick={handleClick}>
        <AddIcon/>
      </Fab>
    </div>
    { addSubject ? <FormDialog setAddSubject={setAddSubject} setSubjects={setSubjects} /> : null }
    </div>
  )
}

  export default App;