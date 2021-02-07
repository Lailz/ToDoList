import ToDoItem from "./ToDoItem";
// Data
import _tasks from "../data";
import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(_tasks);

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const taskRows = tasks.map((item) => (
    <ToDoItem item={item} deleteTask={deleteTask} key={item.id} />
  ));

  return (
    <table className="table">
      <thead>
        <tr className="headerRow">
          <th>STATUS</th>
          <th>TASK</th>
          <th>PRIORITY</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>{taskRows}</tbody>
    </table>
  );
};

export default ToDoList;
