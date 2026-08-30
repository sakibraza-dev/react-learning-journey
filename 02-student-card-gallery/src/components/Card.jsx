import React from 'react'
import StudentCard from './StudentCard'

function Card({students , onStudentClick}) {
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {students.map((student) => (
        <StudentCard
          key={student.name}
          student={student}
          onStudentClick={onStudentClick}
        />
      ))}
    </div>
    
  )
}

export default Card