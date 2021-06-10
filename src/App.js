import './App.css'
import React, { useEffect, useState } from 'react'
import List from './components/List'
import Alert from './components/Alert'

function App() {
  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = { id: new Date().getTime().toString(), title: name }
    setList([...list, newItem])
  }
  return (
    <div className='app'>
      <h2>Todo List</h2>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>{isEdit ? 'Edit' : 'Submit'}</button>
      </form>
      {list.length > 0 && <List items={list} />}
    </div>
  )
}

export default App
