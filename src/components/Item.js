import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'

const Item = ({ data }) => {
  return (
    <article className='item'>
      <h3>New item</h3>
      <section className='btn-modify'>
        <button>
          <FaEdit />
        </button>
        <button>
          <FaTrash />
        </button>
      </section>
    </article>
  )
}
export default Item
