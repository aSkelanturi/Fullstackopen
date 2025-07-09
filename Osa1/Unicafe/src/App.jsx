import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Average = (props) => {
  const sum = () => props.good + props.neutral + props.bad
  //console.log(sum())
  const avg = () => (props.good - props.bad) / sum()
  return(
    <p>Avarage: {avg()}</p>
  )
}

const Positiveavg = (props) => {
  const sum = () => props.good + props.neutral + props.bad
  //console.log(sum())
  const percent = () => (props.good / sum()) * 100
  //console.log(percent())
  return(
    <p>Positive: {percent()} %</p>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  //console.log('Good=',good)
  const [neutral, setNeutral] = useState(0)
  //console.log('Neutral=',neutral)
  const [bad, setBad] = useState(0)
  //console.log('Bad=',bad)

  return (
    <div>
      <Header text='Give feedback'/>
      <Button onClick={() => setGood(good +1)} text='Good'/>
      <Button onClick={() => setNeutral(neutral +1)} text='Neutral'/>
      <Button onClick={() => setBad(bad +1)} text='Bad'/>
      <Header text='Statistics'/>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good+bad+neutral}</p>
      <Average good={good} neutral={neutral} bad={bad}/>
      <Positiveavg good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
