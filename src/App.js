import React from 'react'
import { useState,useEffect } from 'react'
import Subject from './Subject'
import Form from './Form'


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
    <div>
    <Form setSubjects={setSubjects} />
    <Subject subjects={subjects} setSubjects={setSubjects} />
    </div>
  )
}

  export default App;