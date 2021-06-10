import React, { useEffect, useState } from 'react'
import Item from './Item'

const List = ({ items }) => {
  return (
    <section>
      <h2>List todo</h2>
      {items.map((item) => (
        <Item data={item} />
      ))}
    </section>
  )
}
export default List
