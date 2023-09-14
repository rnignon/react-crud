import React from "react"
import './Form.css';
import { IoIosSend } from "react-icons/io"

export default function Form({handleSubmit, todoValue, setTodoValue, isEditing, setIsEditing}) {

  const handleChange = (e, key) => {
    if (key === "title") {
      setTodoValue((prev) => {
        return {...prev, title: e.target.value}
      });
    } else if (key === "cost") {
      console.log("key is cost");
      setTodoValue((prev) => {
        return {...prev, cost: e.target.value}
      });
    }
  }

  return (
    <div className="todo__form-container">
      <form onSubmit={handleSubmit} className="todo__form">
        <div className="form__input-continer">
          <div className="form__title">
            <p>지출 항목</p>
            <input
              type="text"
              name="title"
              value={todoValue.title}
              placeholder="예) 렌트비"
              onChange={(e) => handleChange(e, "title")}
            />
          </div>
          <div className="form__cost">
            <p>비용</p>
            <input
              type="number"
              name="cost"
              value={todoValue.cost}
              onChange={(e) => handleChange(e, "cost")}
            />
          </div>
        </div>
        {isEditing !== -1 ? 
        <button
        type="submit">
        <p>수정</p><IoIosSend />
        </button>
        : 
        <button
          type="submit">
          <p>제출</p><IoIosSend />
        </button>
        }
      </form>
    </div>
  )
}
