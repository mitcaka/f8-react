import logo from "./logo.svg";
import "./App.css";
import Gifts from "./Components/LearnUseState/Gifts";
import TwoWayBinding from "./Components/LearnUseState/TwoWayBinding";
import ToDoList from "./Components/LearnUseState/ToDoList";
import Mount from "./Components/LearnUseHook/Mount";
import TimeOut from "./Components/LearnUseHook/TimeOut";

function App() {
  return (
    <div className="App">
      {/* <Gifts></Gifts>
      <TwoWayBinding></TwoWayBinding> */}
      <TimeOut></TimeOut>
    </div>
  );
}

export default App;
