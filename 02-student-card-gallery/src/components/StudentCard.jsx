import React from 'react'

function StudentCard({student , onStudentClick}) {
  return (
    <div className="border-2 rounded-lg p-4">
        <h2>Name : {student.name}</h2>
        <p>Age : {student.age}</p>
        <p>Course : {student.course}</p>
        <button
          onClick={() => onStudentClick(student)}
          className="border px-2 py-1">
          Select
        </button>
    </div>
  )
}

export default StudentCard