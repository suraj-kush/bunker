import React from 'react'
import { useState } from 'react'
import Subject from './Subject'
import Form from './Form'


export const App = () => {
  
  const [subjects, setSubjects] = useState([]);

  

  return (
    <div>
    <Form setSubjects={setSubjects} />
    <Subject subjects={subjects} setSubjects={setSubjects} />
    </div>
  )
}

  export default App;