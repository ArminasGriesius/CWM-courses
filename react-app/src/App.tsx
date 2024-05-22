import Buttons from "./components/Buttons/Buttons";
import Like from "./components/Like/Like";

function App() {
  return (
    <div>
      {/* <Buttons onClick={() => {}}>My Button</Buttons> */}
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
