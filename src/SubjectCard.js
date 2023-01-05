import React from "react";
import { MdDeleteForever } from 'react-icons/md';

const SubjectCard = (props) =>{
    const {subjectName, present, total} = props.subject;
    const {id, setSubjects} = props;
    let percentage = 0;
    if(total!==0){
        percentage = present/total*100;
        percentage = percentage.toFixed(2)
    }
    function updateAttandence(present, key){
        setSubjects(oldSubjects => {
               return oldSubjects.map( (subject, index) => {
                if(key===index)
                {
                  const newPresent = subject.present+present;
                  const newTotal = subject.total+1;
                  return {...subject, present: newPresent, total: newTotal }
                }
                return subject;
              } )
            
        } )
      }

    const handleDelete = () => {
        setSubjects(oldSubjects => oldSubjects.filter( (subject, index) => {
            if(index!==id)
            return subject;
        } ))
    }

    return <>
        <h1>{subjectName}</h1>
        <p>{present}/{total} {percentage}%</p>
        <button onClick={() => updateAttandence(1,id)}>present</button>
        <button onClick={()=> updateAttandence(0,id)}>absent</button>
        <button onClick={handleDelete}> <MdDeleteForever /> </button>
    </>
}

export default SubjectCard;