import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div>
      <Buttons color="success" onClick={() => console.log("clicked")}>
        MyButton
      </Buttons>
      <Buttons onClick={() => console.log("clicked")}>MyButton</Buttons>
      <Buttons color="primary" onClick={() => console.log("clicked")}>
        MyButton
      </Buttons>
    </div>
  );
}

export default App;
