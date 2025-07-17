const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const Course = ({ course })  => {
    return (
    <>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total exercise={course.parts}/>
    </>
    )
  }

  const Header = ({ name }) => {
    return <h1>{name}</h1>
  }

  const Content = ({ parts }) => {
    return(
    <ul>
      {parts.map(part =>
        <Parts key={parts.id} part={part}/>
      )}
    </ul>
  )}

  const Parts = ({ part }) => {
    return <li>{part.name} {part.exercises}</li>
  }

  const Total = ({ exercise }) => {
    const initialValue = 0
    const total = () => {
      return exercise.reduce((accumulator, currentValue) =>  accumulator + currentValue.exercises, initialValue)
    }

    return <b>Total of {total()} exercises</b>
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App