import React from 'react'
import './Lists.css';
import List from './List'
import { AiFillDelete } from "react-icons/ai"

export default function Lists({ todoList, setTodoList, handleAlert, handleRemoveClick, handleEdit}) {
  console.log(todoList);
  return (
    <div className='todo__lists'>
      {(todoList.map((data) => (
        <List
          key={data.id}
          id={data.id}
          title={data.title}
          cost={data.cost}
          todoList={todoList}
          setTodoList={setTodoList}
          handleAlert={handleAlert}
          handleEdit={handleEdit}
          ></List>
      ))
      )}
      <button className='button-deleteAll' onClick={handleRemoveClick}>
        <p>목록 지우기</p>
        <AiFillDelete />
      </button>
    </div>
  )
}
