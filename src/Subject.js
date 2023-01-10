import React from 'react'
import SubjectCard from './SubjectCard';

const Subject = (props) =>{
    const {subjects, setSubjects, setAddSubject, tab} = props;
    const d = new Date();
    let day = d.getDay();
    let dayNumber = day-1;
    return (
        subjects.map((subject, index) => {
            if(tab)
            return <SubjectCard key={index} id={index} subject={subject} setSubjects={setSubjects} setAddSubject={setAddSubject} />
            else {
                const {daysArr} = subject;

                if(!daysArr) return null;

                return daysArr.map((day, ind) => {
                if(ind===dayNumber && day[1]===true)
                return <SubjectCard key={index} id={index} subject={subject} setSubjects={setSubjects} setAddSubject={setAddSubject} />
                else  return null;
               } )
            }
        })
    )
}

export default Subject