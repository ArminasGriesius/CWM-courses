import { useState } from "react";
import ExpandableText from "./components/ExpandableText.jsx/ExpandableText";
import produce from "immer";
import Form from "./components/Form";
import FormExercise from "./components/FormExercise";

function App() {
  return (
    <div>
      {/* <Form /> */}
      <FormExercise />
    </div>
  );
}

export default App;
