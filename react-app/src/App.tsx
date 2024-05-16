import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div>
      <Buttons color="success">MyButton</Buttons>
      <Buttons>MyButton</Buttons>
      <Buttons color="primary">MyButton</Buttons>
    </div>
  );
}

export default App;
