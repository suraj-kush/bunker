import React from 'react'
import SubjectCard from './SubjectCard';

const Subject = (props) =>{
    const {subjects, setSubjects} = props;
    return (
        subjects.map((subject, index) => {
            return <SubjectCard id={index} subject={subject} setSubjects={setSubjects} />
        })
    )
}

export default Subject