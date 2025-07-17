const Course = ({ course })  => {
return (
<>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <p>
    <Total exercise={course.parts}/>
    </p>
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

export default Course