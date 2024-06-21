import React, { useState } from 'react';
import Course from './Course/Course.js';
import logo from './logo.svg';
import './App.css';

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState('');

  const handelChange = (event) => {
    setNewCourse(event.target.value);
  };

  const addCourse = () => {
    const course = {
      id : courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      courseName : newCourse,
      isCompleted : false,
    };

    setCourseList([...courseList, course]);
    console.log(courseList);
  };

  const deleteCourse = (courseId) => {
//    const newCourseList = courseList.filter((course) => {
//      if (course === courseName) {
//        return false;
//      } else {
//        return true;
//      };
//    });
//    setCourseList(newCourseList);

    setCourseList(courseList.filter((course) => courseId !== course.id));
  };

  const completeCourse = (courseId) => {
    const newCourseList = courseList.map((course) => {
      if (course.id === courseId) 
        return {...course, isCompleted : !course.isCompleted}
      else 
        return course
    })
    setCourseList(newCourseList);
  };

  return (
    <div className="App">
      <div className='add-course'>
        <input type='text' placeholder='plz Enter text' onChange={handelChange}/>
        <button onClick={addCourse}>add course</button>
      </div>
      <div className='list'>
        {courseList.map((course, index) => {
          return (
            <Course key={index} course={course} deleteCourse={deleteCourse} completeCourse={completeCourse}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
