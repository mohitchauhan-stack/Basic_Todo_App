import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  let [todosArray, setTodosArray] = useState([
    {
      todo: "sample todo",
      id: uuidv4(),
    },
  ]);

  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    setTodosArray((prevTodoArray) => {
      return [...prevTodoArray, { todo: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  let deleteTodo = (id) => {
    setTodosArray((prevTodoArray) =>
      prevTodoArray.filter((prevTodo) => prevTodo.id != id),
    );
  };

  let upperCaseAll = () => {
    setTodosArray((prevTodoArray) =>
      prevTodoArray.map((prevTodo) => ({
        ...prevTodo,
        todo: prevTodo.todo.toUpperCase(),
      })),
    );
  };

  let upperCaseOne = (id) => {
    setTodosArray((prevTodoArray) =>
      prevTodoArray.map((prevTodo) => {
        if (prevTodo.id === id) {
          return {
            ...prevTodo,
            todo: prevTodo.todo.toUpperCase(),
          };
        } else {
          return prevTodo;
        }
      }),
    );
  };

  let markDone = (id) => {
    setTodosArray((prevTodoArray) =>
      prevTodoArray.map((prevTodo) => {
        if (prevTodo.id === id) {
          return {
            ...prevTodo,
            isDone: true,
          };
        } else {
          return prevTodo;
        }
      }),
    );
  };

  return (
    <div className="mx-auto max-w-2xs h-full flex flex-col items-center">
      <div className="todo_app_container">
        <h1 className="italic font-bold">Todist</h1>
        <div className="input_container justify-around flex  w-full">
          <input
            type="text"
            name="todo_input"
            id="todo_input"
            className="bg-neutral-900 text-amber-100 px-1.5 rounded-lg"
            placeholder="enter todo"
            value={newTodo}
            onChange={updateTodoValue}
          />
          <button
            onClick={addNewTodo}
            className="bg-green-500 px-2 rounded-sm cursor-pointer"
          >
            Add
          </button>
        </div>
        <br /> <br /> <br />
        <hr></hr>
        <h5>Tasks to do</h5>
        <ul>
          {todosArray.map((todo) => (
            <li
              className="my-2 bg-amber-300 flex flex-col items-start p-2 rounded-sm"
              key={todo.id}
            >
              <span className={todo.isDone ? "line-through" : ""}>
                {todo.todo}
              </span>
              <div className="btn_container flex gap-2">
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white px-2 rounded-sm cursor-pointer"
                >
                  Delete
                </button>
                <button
                  onClick={() => upperCaseOne(todo.id)}
                  className="bg-red-500 text-white px-2 rounded-sm cursor-pointer"
                >
                  UpperCase One
                </button>
                <button
                  onClick={() => markDone(todo.id)}
                  className="bg-red-500 text-white px-2 rounded-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            </li>
          ))}
        </ul>
        <br />
        <button
          onClick={upperCaseAll}
          className="border-[.5px]  px-2 rounded-sm mx-2 cursor-pointer "
        >
          UpperCase All
        </button>
      </div>
    </div>
  );
};

export default TodoList;
