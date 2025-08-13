import { useState } from "react";
import Task from "./task.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleUpdateTask = (indexToUpdate, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === indexToUpdate ? newText : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (indexToDelete) => {
    setTasks(tasks.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#ede9fe" }}
    >
      <div
        className="p-4 rounded shadow w-100"
        style={{ maxWidth: "400px", backgroundColor: "#fff" }}
      >
        <h4 className="text-center mb-4" style={{ color: "#7c3aed" }}>
          To-Do List
        </h4>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="btn"
            style={{ backgroundColor: "#c4b5fd", color: "#4c1d95" }}
            onClick={handleAdd}
          >
            ➕
          </button>
        </div>

        <div className="d-flex flex-column gap-3">
          {tasks.map((task, index) => (
            <Task
              key={index}
              id={index}
              task={task}
              onDelete={handleDelete}
              onUpdateTask={handleUpdateTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}