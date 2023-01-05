import React,{useState} from "react";

const Form = (props) => {
    const [subject, setSubject] = useState("");
    const {setSubjects} = props;

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
    }


    return (
        <>
        <input value={subject} onChange={handleChange} type='text' />
        <button onClick={handleClick}>+</button>
        </>
    )
}

export default Form