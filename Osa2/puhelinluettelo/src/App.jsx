import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import New_person from './components/New_person'
import Search from './components/Search'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
}, [])

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
     //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (newName === '') {
      return alert("Can't add a empty name")
    }
    if (newNumber === '') {
      return alert("Can't add a person without a number")
    }
    if (persons.some(person => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }
    const personObject = {
      name : newName,
      number : newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(person =>
    person.name.toUpperCase().includes(search.toUpperCase()) ||
    person.number.includes(search)
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        search={search}
        handleSearch={handleSearch}
      />
      <h2>Add a new person:</h2>
      <New_person
        addPerson = {addPerson}
        newName = {newName}
        handleNameChange = {handleNameChange}
        newNumber = {newNumber}
        handleNumberChange = {handleNumberChange}
      />
      <h2>Numbers</h2>
        <ul>
          {personsToShow.map(person => 
            <Person key={person.name} person={person} />
          )}
        </ul>
    </div>
  )

}

export default App