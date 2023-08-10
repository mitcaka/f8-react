import logo from "./logo.svg";
import "./App.css";
import Gifts from "./Components/LearnUseState/Gifts";
import TwoWayBinding from "./Components/LearnUseState/TwoWayBinding";
import ToDoList from "./Components/LearnUseState/ToDoList";
import Mount from "./Components/LearnUseHook/Mount";
import TimeOut from "./Components/LearnUseHook/TimeOut";
import PreviewAvatar from "./Components/LearnUseHook/PreviewAvatar";

function App() {
  return (
    <div className="App">
      {/* <Gifts></Gifts>
      <TwoWayBinding></TwoWayBinding> */}
      <PreviewAvatar></PreviewAvatar>
    </div>
  );
}

export default App;
