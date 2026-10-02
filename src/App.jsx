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
function Content({ parts }) {
  return (
    <ul>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </ul>
  )
}

// Footer component
function Footer({ name, course, section }) {
  return (
    <footer>
      {name} - {course} - {section}
    </footer>
  )
}

// Main App component
function App() {
  const total = parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <div>
      <Header course={course} />

      <h2>Course Information</h2>

      <Content parts={parts} />

      <h3>Total Units: {total}</h3>

      <Footer
        name="Joshua Kent Niño L. Limjap"
        course="CSIT340"
        section="G8"
      />
    </div>
  )
}

export default App