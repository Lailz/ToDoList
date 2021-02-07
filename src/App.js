import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList />
    </div>
  );
}

export default App;
