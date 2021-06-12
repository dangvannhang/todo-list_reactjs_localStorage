import './App.css'
import React, { useEffect, useState } from 'react'
import List from './components/List'
import Alert from './components/Alert'

const getLocalStorage = () => {
  const data = localStorage.getItem('todo-list')

  if (!data) {
    return []
  } else {
    return JSON.parse(data)
  }
}

function App() {
  const [list, setList] = useState(getLocalStorage())
  const [name, setName] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [idEdit, setIdEdit] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    setStatus: '',
    setContent: '',
  })
  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(list))
  }, [list])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      showAlert(true, 'danger', 'Enter a value')
    } else if (isEdit && name) {
      // edit list
      setList(
        list.map((item) => {
          if (item.id === idEdit) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setIdEdit(null)
      setIsEdit(false)
      showAlert(true, 'success', 'change title finish')
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      // get current value of list and add new item for list
      setList([...list, newItem])
      setName('')
      showAlert(true, 'success', 'Add item finish')
    }
  }

  const showAlert = (show = false, setStatus = '', setContent = '') => {
    setAlert({ show, setStatus, setContent })
  }

  const clearItems = () => {
    showAlert(true, 'danger', 'clear all item')
    setList([])
  }
  const removeItem = (id) => {
    // in here I set new list by filter (get all item have id different with id I want delete)
    showAlert(true, 'danger', 'Item removed')
    setList(list.filter((item) => item.id !== id))
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEdit(true)
    setIdEdit(id)
    setName(specificItem.title)
  }

  return (
    <div className='app'>
      <h2>Todo List</h2>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='e.g .eggs'
        />
        <button type='submit'>{isEdit ? 'Edit' : 'Submit'}</button>
      </form>
      {list.length > 0 && (
        <section className='todo_container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button onClick={clearItems}>Clear all items</button>
        </section>
      )}
    </div>
  )
}

export default App
