import logo from "./logo.svg";
import "./App.css";
import Gifts from "./Components/LearnUseState/Gifts";
import TwoWayBinding from "./Components/LearnUseState/TwoWayBinding";
import ToDoList from "./Components/LearnUseState/ToDoList";

function App() {
  return (
    <div className="App">
      {/* <Gifts></Gifts>
      <TwoWayBinding></TwoWayBinding> */}
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
