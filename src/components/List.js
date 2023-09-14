import React, { useState } from 'react'
import './List.css'
import { AiFillDelete, AiFillEdit } from "react-icons/ai"

export default function List({id, title, cost, todoList, setTodoList, handleAlert, handleEdit}) {

  const handleClick = (id) => {
    let newTodoList = todoList.filter((data) => data.id !== id);
    setTodoList(newTodoList);
    handleAlert("delete");
  };

  return (
    <div key={id} className='todo__list'>
      <div className='todo__data'>
        <div className='todo__title'>
          {title}
        </div>
        <div className='todo__cost'>
          {Number(cost)}
        </div>
      </div>
      <div className='todo__buttons'>
        <button className='button-edit' onClick={() => handleEdit(id, title, cost)}>
          <AiFillEdit />
        </button>
        <button className='button-delete' onClick={() => handleClick(id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  )
}
