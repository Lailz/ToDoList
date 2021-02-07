import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";

const ToDoItem = (props) => {
  const item = props.item;
  const [done, setDone] = useState(item.done);

  const statusIcon = done ? (
    <FaCheckCircle color="green" />
  ) : (
    <FaTimesCircle color="red" />
  );

  const toggleStatus = () => setDone(!done);

  return (
    <tr className="row">
      <td onClick={toggleStatus}>{statusIcon}</td>
      <td>{item.task}</td>
      <td className={item.priority}>{item.priority.toUpperCase()}</td>
      <td>
        <BsFillTrashFill onClick={() => props.deleteTask(item.id)} />
      </td>
    </tr>
  );
};

export default ToDoItem;
