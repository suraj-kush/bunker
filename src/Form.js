import React,{useState} from "react";
import Subject from "./Subject";

const Form = (props) => {
    const [subject, setSubject] = useState("");

    const {setSubjects} = props;
    function handleChange(event){
        setSubject(event.target.value);
    }
    function handleClick(event){
        event.preventDefault();
        const newSubject = {
            subjectName: subject,
            present: 0,
            total: 0
          }
        setSubjects(oldSubjects => [...oldSubjects, newSubject]);
        setSubject('');
    }
    return (
        <>
        <input value={subject} onChange={handleChange} type='text' />
        <button onClick={handleClick}>+</button>
        </>
    )
}

export default Form