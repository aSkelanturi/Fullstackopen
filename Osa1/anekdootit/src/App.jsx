import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
   
  const [selected, setSelected] = useState(0)

  const getRandom = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min) 
  }

  const handleVote = () => {
    const Newvotes = [...votes]
    Newvotes[selected] += 1
    setVotes(Newvotes)
    }
  
  const mostVotes = () => {
    const copy = Math.max(...votes)
    const most = votes.indexOf(copy)
    return most
    
  }
  

  const handleClick = () => {
    const newValue = getRandom(0,8)
    if (newValue === selected) {
      return handleClick()
    }
    console.log(newValue)
    setSelected(newValue)
  }

  return (
    <div>
      <Header text='Anecdote of the day'/>
      <p>{anecdotes[selected]}</p>
      <Button onClick ={handleVote} text='Vote'/>
      <Button onClick ={handleClick} text='Next anecdote'/>
      <Header text='Anecdote with the most votes'/>
      <p>{anecdotes[mostVotes()]}</p>
    </div>
  )
}

export default App