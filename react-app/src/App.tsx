import { useState } from "react";
// import ExpandableText from "./components/ExpandableText.jsx/ExpandableText";
// import produce from "immer";
// import Form from "./components/Form";
// import FormExercise from "./components/FormExercise";
import FormExerciseSolution from "./components/expence-tracker/components/FormExerciseSolution";
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utility" },
    { id: 2, description: "bbb", amount: 10, category: "Utility" },
    { id: 3, description: "ccc", amount: 10, category: "Utility" },
    { id: 4, description: "ddd", amount: 10, category: "Utility" },
  ]);

  return (
    <div>
      {/* <Form /> */}
      {/* <FormExercise /> */}
      <FormExerciseSolution
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
