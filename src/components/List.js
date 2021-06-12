import React, { useEffect, useState } from 'react'
import Item from './Item'

const List = ({ items, removeItem, editItem }) => {
  return (
    <section className='todo-list'>
      {items.map((item) => (
        <Item
          data={item}
          key={item.id}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </section>
  )
}
export default List
