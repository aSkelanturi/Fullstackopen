import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statisticsline = (props) => (
  <tr>
    <td>{props.text}:</td> 
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  const all = () => props.good+props.bad+props.neutral
  
  const average = () => {
    return ((props.good - props.bad) / all()).toFixed(1)
  }
  
  const positiveavg = () => {
    const sum = () => props.good + props.neutral + props.bad
    const percent = () => (props.good / sum()) * 100
    return(percent().toFixed(1)+' %')
  }

  if (all()===0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <table>
      <tbody>
        <Statisticsline text='Good' value={props.good}/>
        <Statisticsline text='Neutral' value={props.neutral}/>
        <Statisticsline text='Bad' value={props.bad}/>
        <Statisticsline text='All' value={all()}/>
        <Statisticsline text='Average' value={average()}/>
        <Statisticsline text='Positive' value={positiveavg()}/>
      </tbody>
    </table>
  )
}

const App = () => {
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
