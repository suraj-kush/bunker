import React from 'react'
import { useState,useEffect } from 'react'
import Subject from './Subject'
import Form from './Form'
import FormDialog from './FormDialog';


export const App = () => {

  const [subjects, setSubjects]  = useState([]);

  useEffect(() => {
    const prevData = JSON.parse(localStorage.getItem('courses'));
    if (prevData) {
     setSubjects(prevData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(subjects));
  }, [subjects]);

  return (
    <div align="center" className="bg-gray-200 h-screen">
    <h1 className='text-4xl text-current'>Bunker</h1>
    {/* <Form setSubjects={setSubjects} /> */}
    <Subject subjects={subjects} setSubjects={setSubjects} />
    {/* <FloatingButton/> */}
    <FormDialog/>
    </div>
  )
}

  export default App;