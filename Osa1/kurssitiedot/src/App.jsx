const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )

}

const Content = (props) =>{
  console.log(props)
  return (
    <>
      <Part pt={props.pt1} ex={props.ex1} />
      <Part pt={props.pt2} ex={props.ex2} />
      <Part pt={props.pt3} ex={props.ex3} />
    </>
  )
}

const Part = (props) =>{
  console.log(props)
  return (
    <>
      <p>
        {props.pt} {props.ex}
      </p>
    </>
  )
}

const Total = (props) =>{
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.ex1+props.ex2+props.ex3}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content pt1={course.parts[0].name} ex1={course.parts[0].exercises} pt2={course.parts[1].name} ex2={course.parts[1].exercises} pt3={course.parts[2].name} ex3={course.parts[2].exercises} />
      <Total ex1={course.parts[0].exercises} ex2={course.parts[1].exercises} ex3={course.parts[2].exercises} />
    </div>
  )
}

export default App