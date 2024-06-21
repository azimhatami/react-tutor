import React from 'react';


const Course = (props) => {
  return (
    <div style={{backgroundColor : props.course.isCompleted ? 'green' : 'white'}}>
      <p>{props.course.courseName}</p>
      <button onClick={() => props.deleteCourse(props.course.id)}>DEL</button>
      <button onClick={() => props.completeCourse(props.course.id)}>completed</button>
    </div>
  );

}

export default Course;
