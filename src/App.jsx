
const course = 'CSIT340 - Industry Elective 1'

const parts = [
  {
    name: 'CSIT340 - Industry Elective 1',
    exercises: 3
  },
  {
    name: 'CSIT327 - Information Management 2',
    exercises: 3
  },
  {
    name: 'ES038 - Technopreneurship',
    exercises: 3
  }
]

function App() {
  return (
    <div>
      <h1>{course}</h1>

      <h2>Course Information</h2>

      <ul>
        {parts.map((part, index) => (
          <li key={index}>
            {part.name}: {part.exercises} units
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
