
const course = 'CSIT340 - Industry Elective 1'

const part1 = {
  name: 'CSIT340 - Industry Elective 1',
  exercises: 3
}

const part2 = {
  name: 'CSIT327 - Information Management 2',
  exercises: 3
}

const part3 = {
  name: 'ES038 - Technopreneurship',
  exercises: 3
}

// Header component
function Header({ course }) {
  return <h1>{course}</h1>
}

// Part component
function Part({ part }) {
  return (
    <li>
      {part.name}: {part.exercises} units
    </li>
  )
}

// Content component
function Content({ part1, part2, part3 }) {
  return (
    <ul>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </ul>
  )
}

// Main App component
function App() {
  return (
    <div>
      <Header course={course} />

      <h2>Course Information</h2>

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </div>
  )
}

export default App
