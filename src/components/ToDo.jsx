import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <div className="row">
          <div className="col-md-12">
            <div className="main-todo-input-wrap">
              <div className="main-todo-input fl-wrap">
                <div className="main-todo-input-item">
                  <input
                    type="text"
                    id="todo-list-item"
                    placeholder="What will you do today"
                    value={newTask}
                    onChange={handleTaskInputChange}
                  />
                </div>
                <button type="submit" className="add-items main-search-button">
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-md-12">
          <div className="main-todo-input-wrap">
            <div className="main-todo-input fl-wrap todo-listing">
              <ul id="list-items">
                {tasks.map((task, index) => (
                  <li key={index}>
                    <input className="checkbox" type="checkbox" />
                    <span className="todo-text">{task}</span>
                    <a
                      className="remove text-right"
                      onClick={() => handleDeleteTask(index)}
                    >
                      <i className="fa fa-trash"></i>
                    </a>
                    <hr />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
