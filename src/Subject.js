import React from 'react'
import SubjectCard from './SubjectCard';

const Subject = (props) =>{
    const {subjects, setSubjects, setAddSubject} = props;
    return (
        subjects.map((subject, index) => {
            return <SubjectCard id={index} subject={subject} setSubjects={setSubjects} setAddSubject={setAddSubject} />
        })
    )
}

export default Subject