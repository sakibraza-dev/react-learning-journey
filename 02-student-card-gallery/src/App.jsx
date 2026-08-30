import Card from "./components/Card"


function App() {

  const students = [
    {"name" : "Sakib Raza" , "age" : 20 , "course" : "CSE"},
    {"name" : "Mohd Nadeem" , "age" : 21 , "course" : "CSE"},
    {"name" : "Krishna Yadav" , "age" : 22 , "course" : "CSE"}
  ];

  function handleStudentClick(student) {
    alert(`You selected ${student.name}`);
  }

  return (
    <>
      <h1 className="text-4xl text-center font-bold p-5 bg-blue-200">Card Gallery</h1>
      <Card students = {students} onStudentClick={handleStudentClick}/>
    </>
  )
}

export default App
