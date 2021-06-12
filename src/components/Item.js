import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'

const Item = ({ data, removeItem, editItem }) => {
  return (
    <article className='todo-item'>
      <span>{data.title}</span>
      <span className='btn-modify'>
        <button
          onClick={() => {
            editItem(data.id)
          }}
        >
          <FaEdit />
        </button>
        <button
          onClick={() => {
            removeItem(data.id)
          }}
        >
          <FaTrash />
        </button>
      </span>
    </article>
  )
}
export default Item
