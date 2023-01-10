import React from 'react'
import SubjectCard from './SubjectCard';

const Subject = (props) =>{
    const {subjects, setSubjects, setAddSubject, tab} = props;
    let dayNumber = 0;

    return (
        subjects.map((subject, index) => {
            if(tab)
            return <SubjectCard key={index} id={index} subject={subject} setSubjects={setSubjects} setAddSubject={setAddSubject} />
            else {
               const {daysArr} = subject;

                return daysArr.map((day, ind) => {
                if(ind===dayNumber && day[1]===true)
                return <SubjectCard key={index} id={index} subject={subject} setSubjects={setSubjects} setAddSubject={setAddSubject} />
                return null;
               } )
            }
        })
    )
}

export default Subject