import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form"
import Lists from "./components/Lists"
import Alert from "./components/Alert"

export default function App() {
  const [todoValue, setTodoValue] = useState({title: "", cost: 0});
  const [todoList, setTodoList] = useState([]);
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [isEditing, setIsEditing] = useState(-1);

  useEffect(() => {
    let timer;

    if (alert) {
      timer = setTimeout(() => {
        setAlert(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [alert]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing !== -1) {
      handleEditSubmit(isEditing);
      setIsEditing(-1);
    } else {
      if (todoValue.title === "" && todoValue.cost === 0) {return false};

      let newTodo = {
        id: Date.now(),
        title: todoValue.title,
        cost: todoValue.cost,
      };
      
      setTodoList((prev) => [...prev, newTodo]);
      setTodoValue({title: "", cost: 0});
  
      handleAlert("create");
    }
  };

  const handleAlert = (type) => {
    setAlertType(type);
    setAlert(true);
  }

  const handleRemoveClick = () => {
    setTodoList([]);
    handleAlert("delete-all");
  };

  const handleEdit = (id, title, cost) => {
    setIsEditing(id);
    setTodoValue({title: title, cost: cost});
  }

  const handleEditSubmit = (id) => {
    let newTodoList = todoList.map((data) => {
      if (data.id === id) {
        data.title = todoValue.title;
        data.cost = todoValue.cost;
      }
      return data;
    });

    setTodoList(newTodoList);
    setTodoValue({title: "", cost: 0});
    handleAlert("edit");
  };

  return (
    <div className="todo">
      {alert && <Alert alertType = {alertType} ></Alert>}
      <h1> 예산 계산기 </h1>
      <div className="todo__container">
        <Form
          handleSubmit={handleSubmit}
          todoValue={todoValue} 
          setTodoValue={setTodoValue}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          ></Form>
        <Lists
          todoList={todoList}
          setTodoList={setTodoList}
          handleAlert={handleAlert}
          handleRemoveClick={handleRemoveClick}
          handleEdit={handleEdit}
          ></Lists>
      </div>
      <h3 className="total-cost"> 총 지출 : {todoList.reduce((sum, data) => sum + Number(data.cost), 0)}</h3>
    </div>
  );
}


